const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ErrorHandler = require('../utils/errorHandler');

exports.isAuthenticatedUser = async (req, res, next) => {
    try {
        let token;
        console.log('Headers:', req.headers);
        console.log('Cookies:', req.cookies);

        // Check for token in Authorization header first, then in cookies
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
            console.log('Found token in Authorization header:', token);
        } else if (req.cookies.token) {
            token = req.cookies.token;
            console.log('Found token in cookies:', token);
        }

        if (!token) {
            console.log('No token found in request');
            return res.status(401).json({
                success: false,
                message: 'Please login first to access this resource'
            });
        }

        try {
            console.log('Verifying token with secret:', process.env.JWT_SECRET ? 'Secret exists' : 'No secret found');
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('Token decoded:', decoded);

            const user = await User.findById(decoded.id);
            console.log('User found:', user ? 'Yes' : 'No');

            if (!user) {
                console.log('User not found for token:', decoded.id);
                return res.status(401).json({
                    success: false,
                    message: 'User not found. Please login again.'
                });
            }

            req.user = user;
            console.log('Authentication successful for user:', user._id);
            next();
        } catch (jwtError) {
            console.log('JWT verification failed:', jwtError.message);
            return res.status(401).json({
                success: false,
                message: 'Invalid token. Please login again.'
            });
        }
    } catch (error) {
        console.error('Auth middleware error:', error);
        return res.status(500).json({
            success: false,
            message: 'Authentication error'
        });
    }
};

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role (${req.user.role}) is not allowed to access this resource`, 403));
        }
        next();
    };
};