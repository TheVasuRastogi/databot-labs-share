const express = require('express');
const router = express.Router();

const {
    newOrder,
    getSingleOrder,
    myOrders,
    allOrders,
    updateOrder,
    deleteOrder
} = require('../controllers/orderController');

const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

// User routes
router.get('/me', isAuthenticatedUser, myOrders); // Put specific routes first
router.post('/new', isAuthenticatedUser, newOrder);
router.get('/:id', isAuthenticatedUser, getSingleOrder);

// Admin routes
router.route('/admin').get(isAuthenticatedUser, authorizeRoles('admin'), allOrders);
router.route('/admin/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateOrder)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteOrder);

module.exports = router;
