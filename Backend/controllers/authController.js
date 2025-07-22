const User = require('../models/User');
const ErrorHandler = require('../utils/errorHandler');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Register user => /api/v1/auth/register
exports.registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { name, email, password } = req.body;

        const user = await User.create({
            name,
            email,
            password
        });

        const token = user.getJwtToken();

        res.status(201).json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        if (error.code === 11000) {
            return next(new ErrorHandler('Email already exists', 400));
        }
        next(error);
    }
};

// Login user => /api/v1/auth/login
exports.loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { email, password } = req.body;

        // Check if email and password is entered by user
        if (!email || !password) {
            return next(new ErrorHandler('Please enter email & password', 400));
        }

        // Finding user in database
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return next(new ErrorHandler('Invalid Email or Password', 401));
        }

        // Check if password is correct
        const isPasswordMatched = await user.comparePassword(password);

        if (!isPasswordMatched) {
            return next(new ErrorHandler('Invalid Email or Password', 401));
        }

        const token = user.getJwtToken();

        // Options for cookie
        const options = {
            expires: new Date(
                Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
            ),
            httpOnly: true
        };

        res.status(200)
            .cookie('token', token, options)
            .json({
                success: true,
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            });
    } catch (error) {
        next(error);
    }
};

// Logout user => /api/v1/auth/logout
exports.logout = async (req, res, next) => {
    try {
        res.cookie('token', null, {
            expires: new Date(Date.now()),
            httpOnly: true
        });

        res.status(200).json({
            success: true,
            message: 'Logged out successfully'
        });
    } catch (error) {
        next(error);
    }
};

// Get currently logged in user details => /api/v1/auth/me
exports.getUserProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        next(error);
    }
};

// Update / Change password => /api/v1/auth/password/update
exports.updatePassword = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).select('+password');

        // Check previous user password
        const isMatched = await user.comparePassword(req.body.oldPassword);
        if (!isMatched) {
            return next(new ErrorHandler('Old password is incorrect', 400));
        }

        user.password = req.body.newPassword;
        await user.save();

        const token = user.getJwtToken();

        res.status(200).json({
            success: true,
            token
        });
    } catch (error) {
        next(error);
    }
};

// Forgot Password => /api/v1/auth/password/forgot
exports.forgotPassword = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return next(new ErrorHandler('User not found with this email', 404));
        }

        // Get reset token
        const resetToken = user.getResetPasswordToken();

        await user.save({ validateBeforeSave: false });

        // Create reset password url
        const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/auth/password/reset/${resetToken}`;

        // TODO: Send email with reset password link

        res.status(200).json({
            success: true,
            message: 'Password reset email sent'
        });
    } catch (error) {
        next(error);
    }
};

// Reset Password => /api/v1/auth/password/reset/:token
exports.resetPassword = async (req, res, next) => {
    try {
        // Hash URL token
        const resetPasswordToken = crypto
            .createHash('sha256')
            .update(req.params.token)
            .digest('hex');

        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() }
        });

        if (!user) {
            return next(new ErrorHandler('Password reset token is invalid or has expired', 400));
        }

        if (req.body.password !== req.body.confirmPassword) {
            return next(new ErrorHandler('Passwords do not match', 400));
        }

        // Setup new password
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        const token = user.getJwtToken();

        res.status(200).json({
            success: true,
            token
        });
    } catch (error) {
        next(error);
    }
};

// Update user profile => /api/v1/auth/me/update
exports.updateProfile = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const newUserData = {
            name: req.body.name,
            email: req.body.email
        };

        const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        next(error);
    }
};
