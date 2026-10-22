import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    tran_id: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    customer: {
      name: { type: String, default: '' },
      email: { type: String, default: '' },
      phone: { type: String, default: '' },
      degree: { type: String, default: 'Master' },
      cgpa: { type: String, default: '' },
      notes: { type: String, default: '' },
    },
    package: {
      id: { type: String, default: '' },
      title: { type: String, default: '' },
      amount: { type: Number, default: 0 },
    },
    currency: {
      type: String,
      default: 'BDT',
    },
    status: {
      type: String,
      enum: ['PENDING', 'PAID', 'FAILED', 'CANCELLED'],
      default: 'PENDING',
    },
    payment: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    val_id: {
      type: String,
      default: '',
    },
    failReason: {
      type: String,
      default: '',
    },
    ipnReceivedAt: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

// Prevent model overwrite in hot-reload environments
export const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);
