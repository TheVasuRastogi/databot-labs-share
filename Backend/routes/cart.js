const express = require('express');
const router = express.Router();

const {
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart
} = require('../controllers/cartController');

const { isAuthenticatedUser } = require('../middleware/auth');

// Cart routes
router.route('/')
    .get(isAuthenticatedUser, getCart)
    .post(isAuthenticatedUser, addToCart)
    .delete(isAuthenticatedUser, clearCart);

router.route('/:itemId')
    .put(isAuthenticatedUser, updateCartItem)
    .delete(isAuthenticatedUser, removeFromCart);

module.exports = router;