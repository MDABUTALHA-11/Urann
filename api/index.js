import app from '../server/index.js';
import { connectDB } from '../server/db.js';

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.warn('[Serverless DB] Connect note:', err.message);
  }
  return app(req, res);
}
