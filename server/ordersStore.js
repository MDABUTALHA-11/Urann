import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { isDBConnected } from './db.js';
import { Order } from './models/Order.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, 'data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');

// Ensure local data folder and orders.json exist for fallback
function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(ORDERS_FILE)) {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify([], null, 2), 'utf8');
  }
}

// Fallback: Read local file
function getLocalOrders() {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(ORDERS_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading orders file:', err);
    return [];
  }
}

// Fallback: Save local file
function saveLocalOrders(orders) {
  ensureDataFile();
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2), 'utf8');
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
      console.error('[MongoDB] Failed to fetch orders, falling back to local file:', err.message);
    }
  }
  return getLocalOrders();
}

export async function getOrder(tran_id) {
  if (isDBConnected()) {
    try {
      return await Order.findOne({ tran_id }).lean();
    } catch (err) {
      console.error('[MongoDB] Failed to fetch order by tran_id:', err.message);
    }
  }
  const orders = getLocalOrders();
  return orders.find((o) => o.tran_id === tran_id) || null;
}

export async function createOrder(orderData) {
  if (isDBConnected()) {
    try {
      const order = await Order.create(orderData);
      return order.toObject();
    } catch (err) {
      console.error('[MongoDB] Failed to create order in MongoDB, falling back to local file:', err.message);
    }
  }

  // Local file fallback
  const orders = getLocalOrders();
  const newOrder = {
    ...orderData,
    createdAt: new Date().toISOString(),
    status: orderData.status || 'PENDING',
  };
  orders.push(newOrder);
  saveLocalOrders(orders);
  return newOrder;
}

export async function updateOrder(tran_id, updates) {
  if (isDBConnected()) {
    try {
      const updated = await Order.findOneAndUpdate(
        { tran_id },
        { $set: updates },
        { new: true }
      ).lean();
      if (updated) return updated;
    } catch (err) {
      console.error('[MongoDB] Failed to update order in MongoDB, falling back to local file:', err.message);
    }
  }

  // Local file fallback
  const orders = getLocalOrders();
  const index = orders.findIndex((o) => o.tran_id === tran_id);
  if (index === -1) {
    return null;
  }
  orders[index] = {
    ...orders[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  saveLocalOrders(orders);
  return orders[index];
}
