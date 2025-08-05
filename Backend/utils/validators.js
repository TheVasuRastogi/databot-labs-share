const { check } = require('express-validator');

exports.registerValidator = [
    check('name')
        .trim()
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 2, max: 50 })
        .withMessage('Name must be between 2 and 50 characters'),
    
    check('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please enter a valid email'),
    
    check('password')
        .trim()
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .matches(/\d/)
        .withMessage('Password must contain a number')
];

exports.loginValidator = [
    check('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please enter a valid email'),
    
    check('password')
        .trim()
        .notEmpty()
        .withMessage('Password is required')
];

exports.productValidator = [
    check('name')
        .trim()
        .notEmpty()
        .withMessage('Product name is required')
        .isLength({ max: 100 })
        .withMessage('Product name cannot exceed 100 characters'),
    
    check('description')
        .trim()
        .notEmpty()
        .withMessage('Product description is required')
        .isLength({ max: 2000 })
        .withMessage('Description cannot exceed 2000 characters'),
    
    check('category')
        .trim()
        .notEmpty()
        .withMessage('Category is required')
        .isIn(['Domestic', 'Industrial', 'Educational', 'Entertainment'])
        .withMessage('Please select a valid category'),
    
    check('stock')
        .notEmpty()
        .withMessage('Stock is required')
        .isInt({ min: 0 })
        .withMessage('Stock must be a positive number')
];

exports.contactValidator = [
    check('name')
        .trim()
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ max: 50 })
        .withMessage('Name cannot exceed 50 characters'),
    
    check('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please enter a valid email'),
    
    check('subject')
        .trim()
        .notEmpty()
        .withMessage('Subject is required')
        .isLength({ max: 100 })
        .withMessage('Subject cannot exceed 100 characters'),
    
    check('message')
        .trim()
        .notEmpty()
        .withMessage('Message is required')
        .isLength({ max: 2000 })
        .withMessage('Message cannot exceed 2000 characters')
];

exports.preOrderValidator = [
    check('name')
        .trim()
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ max: 50 })
        .withMessage('Name cannot exceed 50 characters'),
    check('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please enter a valid email'),
    check('product')
        .trim()
        .notEmpty()
        .withMessage('Product is required')
        .isLength({ max: 100 })
        .withMessage('Product name cannot exceed 100 characters'),
    check('productName')
        .trim()
        .notEmpty()
        .withMessage('Product name is required')
        .isLength({ max: 100 })
        .withMessage('Product name cannot exceed 100 characters'),
    check('quantity')
        .notEmpty()
        .withMessage('Quantity is required')
        .isInt({ min: 1 })
        .withMessage('Quantity must be at least 1'),
    check('message')
        .optional()
        .isLength({ max: 2000 })
        .withMessage('Message cannot exceed 2000 characters'),
    check('phone')
        .notEmpty()
        .withMessage('Phone number is required')
        .matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/)
        .withMessage('Please enter a valid phone number. Supported formats include: +1234567890, 1234567890, 123-456-7890, (123) 456-7890, +91 1234567890'),
    check('company')
        .optional()
        .isLength({ max: 100 })
        .withMessage('Company name cannot exceed 100 characters')
];
