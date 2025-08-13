const PreOrder = require('../models/PreOrder');
const { sendEmail } = require('../utils/emailService');

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
    sendEmail('newPreOrder', preOrder).catch(console.error);
    
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