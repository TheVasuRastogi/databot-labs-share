const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Create express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

// Import routes
const auth = require('./routes/auth');

// Mount auth routes
app.use('/api/v1/auth', auth);

// Test route
app.get('/test', (req, res) => {
    res.json({
        success: true,
        message: 'Server is working!',
        routes: {
            'POST /api/v1/auth/register': 'User registration',
            'POST /api/v1/auth/login': 'User login',
            'GET /api/v1/auth/logout': 'User logout',
            'GET /api/v1/auth/me': 'Get user profile'
        }
    });
});

// Handle unhandled routes
app.all('*', (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `Can't find ${req.originalUrl} on this server!`,
        availableRoutes: [
            'POST /api/v1/auth/register',
            'POST /api/v1/auth/login',
            'GET /api/v1/auth/logout',
            'GET /api/v1/auth/me'
        ]
    });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Test server is running on port ${PORT}`);
    console.log(`Available routes:`);
    console.log(`- POST http://localhost:${PORT}/api/v1/auth/register`);
    console.log(`- POST http://localhost:${PORT}/api/v1/auth/login`);
    console.log(`- GET http://localhost:${PORT}/api/v1/auth/logout`);
    console.log(`- GET http://localhost:${PORT}/api/v1/auth/me`);
    console.log(`- GET http://localhost:${PORT}/test`);
});