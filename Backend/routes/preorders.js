const express = require('express');
const router = express.Router();
const { submitPreOrder, getPreOrders, getMyPreOrders } = require('../controllers/preOrderController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const { preOrderValidator } = require('../utils/validators');
const { validationResult } = require('express-validator');

// Public route to submit a pre-order
router.route('/').post(preOrderValidator, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: errors.array()[0].msg });
  }
  require('../controllers/preOrderController').submitPreOrder(req, res, next);
});

// Get user's own pre-orders
router.route('/my').get(isAuthenticatedUser, getMyPreOrders);

// Admin routes
router.route('/').get(isAuthenticatedUser, authorizeRoles('admin'), getPreOrders);
router.route('/:id').patch(isAuthenticatedUser, authorizeRoles('admin'), require('../controllers/preOrderController').updatePreOrderStatus);

module.exports = router; 