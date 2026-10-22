import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';
import { isDBConnected } from './db.js';
import { Order } from './models/Order.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// On serverless environments (Vercel / AWS Lambda), the deployment directory (/var/task)
// is strictly read-only. We safely use os.tmpdir() (/tmp) where writing is allowed.
const isServerless = Boolean(
  process.env.VERCEL ||
  process.env.AWS_LAMBDA_FUNCTION_NAME ||
  process.env.LAMBDA_TASK_ROOT ||
  process.env.NOW_REGION
);

const DATA_DIR = isServerless ? path.join(os.tmpdir(), 'uraan_data') : path.join(__dirname, 'data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');

// In-memory fallback map (tran_id -> order). Guarantees zero unhandled exceptions
// even if the filesystem is completely read-only or temporarily unavailable.
const inMemoryOrders = new Map();

// Safely ensure data directory and file without throwing
function ensureDataFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(ORDERS_FILE)) {
      fs.writeFileSync(ORDERS_FILE, JSON.stringify([], null, 2), 'utf8');
    }
  } catch (err) {
    // Non-fatal: in serverless environments where disk write is prohibited,
    // inMemoryOrders serves as the fallback store.
  }
}

// Safely read local file orders and sync to in-memory map
function getLocalOrders() {
  try {
    ensureDataFile();
    if (fs.existsSync(ORDERS_FILE)) {
      const raw = fs.readFileSync(ORDERS_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        parsed.forEach((order) => {
          if (order?.tran_id) inMemoryOrders.set(order.tran_id, order);
        });
      }
    }
  } catch (err) {
    // Filesystem error ignored - inMemoryOrders remains accessible
  }
  return Array.from(inMemoryOrders.values());
}

// Safely write to local file orders
function saveLocalOrders(orders) {
  if (Array.isArray(orders)) {
    orders.forEach((o) => {
      if (o?.tran_id) inMemoryOrders.set(o.tran_id, o);
    });
  }
  try {
    ensureDataFile();
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2), 'utf8');
  } catch (err) {
    // Safe: ignore write failures on read-only environments
  }
}

// Auto-migrate local orders to MongoDB on first run
export async function syncExistingOrdersToDB() {
  if (!isDBConnected()) return;
  try {
    const localOrders = getLocalOrders();
    for (const order of localOrders) {
      if (order?.tran_id) {
        const exists = await Order.findOne({ tran_id: order.tran_id });
        if (!exists) {
          await Order.create(order);
          console.log(`📦 [MongoDB] Migrated existing order ${order.tran_id} to Atlas`);
        }
      }
    }
  } catch (err) {
    console.warn('[MongoDB] Sync note:', err.message);
  }
}

export async function getAllOrders() {
  if (isDBConnected()) {
    try {
      return await Order.find().sort({ createdAt: -1 }).lean();
    } catch (err) {
      console.error('[MongoDB] Failed to fetch orders, falling back to local/memory:', err.message);
    }
  }
  return getLocalOrders();
}

export async function getOrder(tran_id) {
  if (isDBConnected()) {
    try {
      const order = await Order.findOne({ tran_id }).lean();
      if (order) return order;
    } catch (err) {
      console.error('[MongoDB] Failed to fetch order by tran_id:', err.message);
    }
  }
  if (inMemoryOrders.has(tran_id)) {
    return inMemoryOrders.get(tran_id);
  }
  const orders = getLocalOrders();
  return orders.find((o) => o.tran_id === tran_id) || inMemoryOrders.get(tran_id) || null;
}

export async function createOrder(orderData) {
  const newOrder = {
    ...orderData,
    createdAt: orderData.createdAt || new Date().toISOString(),
    status: orderData.status || 'PENDING',
  };

  if (newOrder.tran_id) {
    inMemoryOrders.set(newOrder.tran_id, newOrder);
  }

  if (isDBConnected()) {
    try {
      const order = await Order.create(orderData);
      return order.toObject();
    } catch (err) {
      console.error('[MongoDB] Failed to create order in MongoDB, falling back to local/memory:', err.message);
    }
  }

  // Local file fallback
  try {
    const orders = getLocalOrders();
    const existingIdx = orders.findIndex((o) => o.tran_id === newOrder.tran_id);
    if (existingIdx >= 0) {
      orders[existingIdx] = newOrder;
    } else {
      orders.push(newOrder);
    }
    saveLocalOrders(orders);
  } catch (err) {
    // Non-fatal
  }

  return newOrder;
}

export async function updateOrder(tran_id, updates) {
  let updatedOrder = null;

  if (isDBConnected()) {
    try {
      const updated = await Order.findOneAndUpdate(
        { tran_id },
        { $set: updates },
        { new: true }
      ).lean();
      if (updated) updatedOrder = updated;
    } catch (err) {
      console.error('[MongoDB] Failed to update order in MongoDB, falling back to local/memory:', err.message);
    }
  }

  const memoryOrder = inMemoryOrders.get(tran_id) || {};
  const merged = {
    ...memoryOrder,
    ...updates,
    tran_id,
    updatedAt: new Date().toISOString(),
  };
  inMemoryOrders.set(tran_id, merged);

  try {
    const orders = getLocalOrders();
    const index = orders.findIndex((o) => o.tran_id === tran_id);
    if (index !== -1) {
      orders[index] = {
        ...orders[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      };
      saveLocalOrders(orders);
      return updatedOrder || orders[index];
    } else {
      orders.push(merged);
      saveLocalOrders(orders);
    }
  } catch (err) {
    // Non-fatal
  }

  return updatedOrder || merged;
}
