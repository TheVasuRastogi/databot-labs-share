const express = require('express');
const router = express.Router();

const {
    getProducts,
    createProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    createProductReview
} = require('../controllers/productController');

const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

// Public routes
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

// Protected routes
router.route('/review').put(isAuthenticatedUser, createProductReview);

// Admin routes
router
    .route('/admin/product/new')
    .post(isAuthenticatedUser, authorizeRoles('admin'), createProduct);
router
    .route('/admin/product/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);

module.exports = router;
