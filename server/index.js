import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import SSLCommerzPayment from 'sslcommerz-lts';
import Stripe from 'stripe';
import { createOrder, getOrder, updateOrder, getAllOrders, syncExistingOrdersToDB } from './ordersStore.js';
import { connectDB } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;
const IS_LIVE = process.env.IS_LIVE === 'true';
const STORE_ID = process.env.STORE_ID || 'testbox';
const STORE_PASSWD = process.env.STORE_PASSWD || 'qwerty';

const getRequestOrigin = (req) => {
  if (req && req.headers) {
    if (req.headers.origin) return req.headers.origin;
    if (req.headers.host) {
      const proto = req.headers['x-forwarded-proto'] || (req.headers.host.includes('localhost') ? 'http' : 'https');
      return `${proto}://${req.headers.host}`;
    }
  }
  if (process.env.FRONTEND_URL) return process.env.FRONTEND_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:5173';
};

const getBackendUrl = (req) => {
  if (process.env.BACKEND_URL) return process.env.BACKEND_URL;
  if (req && req.headers && req.headers.host) {
    const proto = req.headers['x-forwarded-proto'] || (req.headers.host.includes('localhost') ? 'http' : 'https');
    return `${proto}://${req.headers.host}`;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${PORT}`;
};

const BACKEND_URL = process.env.BACKEND_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${PORT}`);
const FRONTEND_URL = process.env.FRONTEND_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:5173');

// Stripe initialization
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY) : null;
const STRIPE_CURRENCY = (process.env.STRIPE_CURRENCY || 'usd').toLowerCase();

// Preserve rawBody for Stripe webhook verification while allowing json parsing
app.use(cors());
app.use(express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: true }));

const sslcz = new SSLCommerzPayment(STORE_ID, STORE_PASSWD, IS_LIVE);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Uraan SSLCOMMERZ Payment Gateway API',
    isLive: IS_LIVE,
    timestamp: new Date().toISOString()
  });
});

// Fetch order details by transaction ID (used by frontend receipt modal)
app.get('/api/orders/:tran_id', async (req, res) => {
  const { tran_id } = req.params;
  const { session_id } = req.query;
  let order = await getOrder(tran_id);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }

  // If order is still pending and was created via Stripe, verify session with Stripe
  if (order.status === 'PENDING' && stripe && (session_id || tran_id.startsWith('STRIPE_'))) {
    try {
      let session = null;
      if (session_id) {
        session = await stripe.checkout.sessions.retrieve(session_id);
      } else {
        const list = await stripe.checkout.sessions.list({ limit: 10 });
        session = list.data.find((s) => s.client_reference_id === tran_id);
      }

      if (session && (session.payment_status === 'paid' || session.status === 'complete')) {
        order = await updateOrder(tran_id, {
          status: 'PAID',
          payment: {
            card_type: 'Stripe (Card / Digital Wallet)',
            stripe_session_id: session.id,
            stripe_payment_intent: session.payment_intent,
            paymentTime: new Date().toISOString()
          }
        });
        console.log(`[STRIPE] Order ${tran_id} marked as PAID via session verification.`);
      }
    } catch (verifyErr) {
      console.warn('[STRIPE] Session verification note:', verifyErr.message);
    }
  }

  res.json({ order });
});


// Fetch all orders (admin/dashboard helper)
app.get('/api/orders', async (req, res) => {
  const orders = await getAllOrders();
  res.json({ orders });
});

// 1. INITIATE PAYMENT
app.post('/api/payment/init', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      degree,
      cgpa,
      notes,
      packageTitle,
      packageId,
      amount
    } = req.body;

    if (!name || !phone || !amount) {
      return res.status(400).json({ error: 'Name, phone, and amount are required' });
    }

    const tran_id = `URAAN_${Date.now()}_${Math.floor(1000 + Math.random() * 9000)}`;

    // Save initial order in local store / MongoDB
    await createOrder({
      tran_id,
      customer: {
        name,
        email: email || '',
        phone,
        degree: degree || 'Master',
        cgpa: cgpa || '',
        notes: notes || ''
      },
      package: {
        id: packageId || 'custom-plan',
        title: packageTitle || 'Uraan Application Plan',
        amount: Number(amount)
      },
      currency: 'BDT',
      status: 'PENDING'
    });

    const sslData = {
      total_amount: Number(amount),
      currency: 'BDT',
      tran_id,
      success_url: `${getBackendUrl(req)}/api/payment/success?tran_id=${tran_id}`,
      fail_url: `${getBackendUrl(req)}/api/payment/fail?tran_id=${tran_id}`,
      cancel_url: `${getBackendUrl(req)}/api/payment/cancel?tran_id=${tran_id}`,
      ipn_url: `${getBackendUrl(req)}/api/payment/ipn`,
      shipping_method: 'NO',
      product_name: packageTitle || 'Uraan Study Abroad Service',
      product_category: 'Education',
      product_profile: 'non-physical-goods',
      cus_name: name,
      cus_email: email && email.includes('@') ? email : 'student@uraan.com',
      cus_add1: 'Dhaka',
      cus_city: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_phone: phone
    };

    console.log(`[SSLCOMMERZ] Initializing payment session for ${tran_id} (Amount: $${amount} USD)...`);
    const apiResponse = await sslcz.init(sslData);

    if (apiResponse?.GatewayPageURL) {
      console.log(`[SSLCOMMERZ] Payment URL generated: ${apiResponse.GatewayPageURL}`);
      return res.json({
        success: true,
        tran_id,
        url: apiResponse.GatewayPageURL
      });
    } else {
      console.error('[SSLCOMMERZ] Init failed:', apiResponse);
      return res.status(400).json({
        success: false,
        error: apiResponse?.failedreason || 'Failed to initialize payment gateway'
      });
    }
  } catch (err) {
    console.error('[SSLCOMMERZ] Payment init exception:', err);
    res.status(500).json({ error: err.message || 'Server error initiating payment' });
  }
});

// 2. PAYMENT SUCCESS CALLBACK (Browser POST from SSLCommerz)
app.post('/api/payment/success', async (req, res) => {
  const tran_id = req.query.tran_id || req.body.tran_id;
  const val_id = req.body.val_id;

  console.log(`[SSLCOMMERZ] Payment Success received for Tran ID: ${tran_id}, Val ID: ${val_id}`);

  let isValidated = true;
  let paymentDetails = {
    card_type: req.body.card_type || 'bKash/Card',
    bank_tran_id: req.body.bank_tran_id || '',
    card_brand: req.body.card_brand || '',
    val_id: val_id || '',
    paymentTime: new Date().toISOString()
  };

  try {
    if (val_id) {
      const validationData = await sslcz.validate({ val_id });
      if (validationData?.status === 'VALID' || validationData?.status === 'VALIDATED') {
        isValidated = true;
        paymentDetails = {
          ...paymentDetails,
          ...validationData
        };
      }
    }
  } catch (validateErr) {
    console.warn('[SSLCOMMERZ] Validation check warning:', validateErr.message);
  }

  // Update order in store
  await updateOrder(tran_id, {
    status: 'PAID',
    payment: paymentDetails,
    val_id: val_id || ''
  });

  // Redirect student back to React Frontend with success flag
  return res.redirect(`${getRequestOrigin(req)}/?payment_status=success&tran_id=${tran_id}`);
});

// 3. PAYMENT FAIL CALLBACK
app.post('/api/payment/fail', async (req, res) => {
  const tran_id = req.query.tran_id || req.body.tran_id;
  const errorMsg = req.body.error || 'Payment was unsuccessful or declined.';

  console.log(`[SSLCOMMERZ] Payment Failed for Tran ID: ${tran_id}`);
  await updateOrder(tran_id, {
    status: 'FAILED',
    failReason: errorMsg
  });

  return res.redirect(`${getRequestOrigin(req)}/?payment_status=failed&tran_id=${tran_id}&msg=${encodeURIComponent(errorMsg)}`);
});

// 4. PAYMENT CANCEL CALLBACK
app.post('/api/payment/cancel', async (req, res) => {
  const tran_id = req.query.tran_id || req.body.tran_id;
  console.log(`[SSLCOMMERZ] Payment Cancelled for Tran ID: ${tran_id}`);

  await updateOrder(tran_id, {
    status: 'CANCELLED'
  });

  return res.redirect(`${getRequestOrigin(req)}/?payment_status=cancelled&tran_id=${tran_id}`);
});

// 5. INSTANT PAYMENT NOTIFICATION (IPN Webhook)
app.post('/api/payment/ipn', async (req, res) => {
  const { tran_id, val_id, status } = req.body;
  console.log(`[SSLCOMMERZ IPN] Notification received for ${tran_id}, status: ${status}`);

  if (val_id && (status === 'VALID' || status === 'VALIDATED')) {
    await updateOrder(tran_id, {
      status: 'PAID',
      val_id,
      ipnReceivedAt: new Date().toISOString()
    });
  }

  res.status(200).send('IPN received OK');
});

// 6. STRIPE PAYMENT INITIATION
app.post('/api/payment/stripe/init', async (req, res) => {
  try {
    if (!stripe) {
      return res.status(500).json({
        error: 'Stripe is not configured yet. Please set STRIPE_SECRET_KEY in server/.env'
      });
    }

    const {
      name,
      email,
      phone,
      degree,
      cgpa,
      notes,
      packageTitle,
      packageId,
      amount
    } = req.body;

    if (!name || !amount) {
      return res.status(400).json({ error: 'Name and amount are required' });
    }

    const tran_id = `STRIPE_${Date.now()}_${Math.floor(1000 + Math.random() * 9000)}`;

    // Create initial order in database
    await createOrder({
      tran_id,
      customer: {
        name,
        email: email || '',
        phone: phone || '',
        degree: degree || 'Master',
        cgpa: cgpa || '',
        notes: notes || ''
      },
      package: {
        id: packageId || 'custom-plan',
        title: packageTitle || 'Uraan Application Plan',
        amount: Number(amount)
      },
      currency: STRIPE_CURRENCY.toUpperCase(),
      status: 'PENDING'
    });

    console.log(`[STRIPE] Creating Checkout Session for ${tran_id} (Amount: ${amount} ${STRIPE_CURRENCY.toUpperCase()})...`);

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: email && email.includes('@') ? email : undefined,
      client_reference_id: tran_id,
      metadata: {
        tran_id,
        name,
        phone: phone || '',
        packageTitle: packageTitle || 'Uraan Study Abroad Plan'
      },
      line_items: [
        {
          price_data: {
            currency: STRIPE_CURRENCY,
            product_data: {
              name: packageTitle || 'Uraan Study Abroad Application Plan',
              description: `Application service for ${name}`
            },
            unit_amount: Math.round(Number(amount) * 100)
          },
          quantity: 1
        }
      ],
      success_url: `${getRequestOrigin(req)}/?payment_status=success&tran_id=${tran_id}&gateway=stripe&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${getRequestOrigin(req)}/?payment_status=cancelled&tran_id=${tran_id}`
    });

    return res.json({
      success: true,
      tran_id,
      url: session.url
    });
  } catch (err) {
    console.error('[STRIPE] Session creation exception:', err);
    res.status(500).json({ error: err.message || 'Server error initiating Stripe payment' });
  }
});

// 7. STRIPE WEBHOOK HANDLER
app.post('/api/payment/stripe/webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    if (webhookSecret && sig && stripe) {
      event = stripe.webhooks.constructEvent(req.rawBody || req.body, sig, webhookSecret);
    } else {
      event = req.body;
    }
  } catch (err) {
    console.error(`[STRIPE WEBHOOK] Verification failed:`, err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event?.type === 'checkout.session.completed') {
    const session = event.data.object;
    const tran_id = session.client_reference_id || session.metadata?.tran_id;

    if (tran_id) {
      console.log(`[STRIPE WEBHOOK] Payment verified for ${tran_id}`);
      await updateOrder(tran_id, {
        status: 'PAID',
        payment: {
          card_type: 'Stripe (Card / Digital Wallet)',
          stripe_session_id: session.id,
          stripe_payment_intent: session.payment_intent,
          paymentTime: new Date().toISOString()
        }
      });
    }
  }

  res.json({ received: true });
});

if (!process.env.VERCEL) {
  app.listen(PORT, async () => {
    await connectDB();
    await syncExistingOrdersToDB();
    console.log(`===============================================`);
    console.log(`🚀 Uraan Backend is live on: ${BACKEND_URL}`);
    console.log(`💳 SSLCOMMERZ Mode: ${IS_LIVE ? 'LIVE' : 'SANDBOX (Test Mode)'}`);
    console.log(`💳 Stripe Mode: ${stripe ? 'ACTIVE (' + STRIPE_CURRENCY.toUpperCase() + ')' : 'NOT CONFIGURED (Add STRIPE_SECRET_KEY in server/.env)'}`);
    console.log(`📦 Store ID: ${STORE_ID}`);
    console.log(`===============================================`);
  });
}


export default app;
