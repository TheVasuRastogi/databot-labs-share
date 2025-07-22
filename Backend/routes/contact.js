const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const {
    submitContact,
    getContacts,
    getContact,
    updateContactStatus,
    deleteContact
} = require('../controllers/contactController');

// Public routes
router.post('/', submitContact);

// Protected admin routes
router.use(isAuthenticatedUser);
router.use(authorizeRoles('admin'));

router.route('/')
    .get(getContacts);

router.route('/:id')
    .get(getContact)
    .put(updateContactStatus)
    .delete(deleteContact);

module.exports = router; 