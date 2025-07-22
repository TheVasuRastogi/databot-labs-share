const Contact = require('../models/Contact');
const errorHandler = require('../utils/errorHandler');

// @desc    Submit a contact form
// @route   POST /api/v1/contact
// @access  Public
exports.submitContact = async (req, res, next) => {
    try {
        const contact = await Contact.create(req.body);
        
        // Here you could add email notification logic
        // await sendEmailNotification(contact);

        res.status(201).json({
            success: true,
            message: 'Your message has been received. We will contact you soon.',
            data: contact
        });
    } catch (error) {
        next(errorHandler(error));
    }
};

// @desc    Get all contact submissions
// @route   GET /api/v1/contact
// @access  Private/Admin
exports.getContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find()
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts
        });
    } catch (error) {
        next(errorHandler(error));
    }
};

// @desc    Get single contact submission
// @route   GET /api/v1/contact/:id
// @access  Private/Admin
exports.getContact = async (req, res, next) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return next(errorHandler('Contact submission not found', 404));
        }

        res.status(200).json({
            success: true,
            data: contact
        });
    } catch (error) {
        next(errorHandler(error));
    }
};

// @desc    Update contact status
// @route   PUT /api/v1/contact/:id
// @access  Private/Admin
exports.updateContactStatus = async (req, res, next) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true, runValidators: true }
        );

        if (!contact) {
            return next(errorHandler('Contact submission not found', 404));
        }

        res.status(200).json({
            success: true,
            data: contact
        });
    } catch (error) {
        next(errorHandler(error));
    }
};

// @desc    Delete contact submission
// @route   DELETE /api/v1/contact/:id
// @access  Private/Admin
exports.deleteContact = async (req, res, next) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact) {
            return next(errorHandler('Contact submission not found', 404));
        }

        res.status(200).json({
            success: true,
            message: 'Contact submission deleted successfully'
        });
    } catch (error) {
        next(errorHandler(error));
    }
}; 