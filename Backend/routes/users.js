const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

// Import user controller methods here
// const { getUserProfile, updateProfile } = require('../controllers/userController');

// User routes
// router.route('/me').get(isAuthenticatedUser, getUserProfile);
// router.route('/me/update').put(isAuthenticatedUser, updateProfile);

module.exports = router;
