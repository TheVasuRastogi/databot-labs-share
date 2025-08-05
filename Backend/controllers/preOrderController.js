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
            from: `DataBot-Labs <${process.env.SMTP_USER}>`,
    to: adminMail,
    subject: `New Pre-order: ${preOrder.product}`,
    html: `
      <h2>New Pre-order Received</h2>
      <p><strong>Customer Details:</strong></p>
      <ul>
        <li>Name: ${preOrder.name}</li>
        <li>Email: ${preOrder.email}</li>
        <li>Phone: ${preOrder.phone || 'N/A'}</li>
        <li>Company: ${preOrder.company || 'N/A'}</li>
      </ul>
      <p><strong>Order Details:</strong></p>
      <ul>
        <li>Product: ${preOrder.productName}</li>
        <li>Quantity: ${preOrder.quantity}</li>
        <li>Expected Delivery: ${new Date(preOrder.expectedDelivery).toLocaleDateString()}</li>
        <li>Message: ${preOrder.message || 'N/A'}</li>
      </ul>
      <p><strong>Submitted:</strong> ${new Date(preOrder.createdAt).toLocaleString()}</p>
    `
  });
}

// @desc    Submit a pre-order
// @route   POST /api/v1/preorders
// @access  Public
exports.submitPreOrder = async (req, res, next) => {
  try {
    // Set expected delivery to 60 days from now if not provided
    if (!req.body.expectedDelivery) {
      req.body.expectedDelivery = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000);
    }

    const preOrderData = {
      ...req.body,
      user: req.user ? req.user._id : undefined,
      status: 'Pending'
    };
    
    const preOrder = await PreOrder.create(preOrderData);
    
    // Send email notification (do not block response)
    sendPreOrderEmail(preOrder).catch(console.error);
    
    res.status(201).json({
      success: true,
      message: 'Your pre-order has been received. We will contact you soon.',
      data: preOrder
    });
  } catch (error) {
    console.error('Pre-order submission error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to submit pre-order'
    });
  }
};

// @desc    Get all pre-orders (admin)
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

// @desc    Get user's pre-orders
// @route   GET /api/v1/preorders/my
// @access  Private
exports.getMyPreOrders = async (req, res, next) => {
  try {
    const preOrders = await PreOrder.find({ 
      $or: [
        { user: req.user._id },
        { email: req.user.email }
      ]
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: preOrders.length,
      data: preOrders
    });
  } catch (error) {
    console.error('Error fetching pre-orders:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch pre-orders'
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