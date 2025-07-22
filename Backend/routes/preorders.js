const express = require('express');
const router = express.Router();
const { submitPreOrder, getPreOrders } = require('../controllers/preOrderController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const { preOrderValidator } = require('../utils/validators');

// Public route to submit a pre-order
router.route('/').post(preOrderValidator, submitPreOrder);

// Admin route to get all pre-orders
router.route('/').get(isAuthenticatedUser, authorizeRoles('admin'), getPreOrders);
router.route('/:id').patch(isAuthenticatedUser, authorizeRoles('admin'), require('../controllers/preOrderController').updatePreOrderStatus);

module.exports = router; 