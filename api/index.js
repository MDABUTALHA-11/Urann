import app from '../server/index.js';
import { connectDB } from '../server/db.js';

export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}
