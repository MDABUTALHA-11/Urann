import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

// Global cache for serverless environments (e.g. Vercel / AWS Lambda)
let cached = global._mongooseCache;
if (!cached) {
  cached = global._mongooseCache = { conn: null, promise: null };
}

export async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn('[MongoDB] No MONGODB_URI found in environment. Using serverless fallback storage.');
    return false;
  }

  if (cached.conn && mongoose.connection.readyState === 1) {
    return true;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000, // Timeout in 5s so serverless invocations never freeze
    };

    cached.promise = mongoose.connect(uri, opts).then((m) => {
      console.log(`✅ [MongoDB] Connected successfully to: ${m.connection.host}`);
      return m;
    }).catch((err) => {
      console.error('❌ [MongoDB] Connection note (fallback enabled):', err.message);
      cached.promise = null;
      return null;
    });
  }

  try {
    cached.conn = await cached.promise;
    return Boolean(cached.conn && mongoose.connection.readyState === 1);
  } catch (err) {
    console.warn('⚠️ [MongoDB] Falling back to in-memory storage.');
    return false;
  }
}

export function isDBConnected() {
  return Boolean(mongoose.connection && mongoose.connection.readyState === 1);
}
