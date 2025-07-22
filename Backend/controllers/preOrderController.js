const PreOrder = require('../models/PreOrder');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: require('path').resolve(__dirname, '../config/config.env') });

// Helper to send email
async function sendPreOrderEmail(preOrder) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  const adminMail = process.env.ADMIN_EMAIL;
  await transporter.sendMail({
    from: `Robot Shop <${process.env.SMTP_USER}>`,
    to: adminMail,
    subject: `New Pre-order: ${preOrder.product}`,
    text: `New pre-order received:\n\nName: ${preOrder.name}\nEmail: ${preOrder.email}\nProduct: ${preOrder.product}\nMessage: ${preOrder.message || 'N/A'}\nSubmitted: ${preOrder.createdAt}`
  });
}

// @desc    Submit a pre-order
// @route   POST /api/v1/preorders
// @access  Public
exports.submitPreOrder = async (req, res, next) => {
  try {
    const preOrder = await PreOrder.create(req.body);
    // Send email notification (do not block response)
    sendPreOrderEmail(preOrder).catch(console.error);
    res.status(201).json({
      success: true,
      message: 'Your pre-order has been received. We will contact you soon.',
      data: preOrder
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get all pre-orders
// @route   GET /api/v1/preorders
// @access  Private/Admin
exports.getPreOrders = async (req, res, next) => {
  try {
    const preOrders = await PreOrder.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: preOrders.length,
      data: preOrders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update pre-order status
// @route   PATCH /api/v1/preorders/:id
// @access  Private/Admin
exports.updatePreOrderStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const preOrder = await PreOrder.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!preOrder) {
      return res.status(404).json({ success: false, message: 'Pre-order not found' });
    }
    res.status(200).json({ success: true, data: preOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}; 