const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middleware/error');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
const rateLimit = require('express-rate-limit');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDatabase();

// Create express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001', process.env.FRONTEND_URL],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

// Import routes
const auth = require('./routes/auth');
const products = require('./routes/products');
const orders = require('./routes/orders');
const contact = require('./routes/contact');
const invoices = require('./routes/invoices');
const preorders = require('./routes/preorders');
const team = require('./routes/team');
const milestones = require('./routes/milestones');
const cart = require('./routes/cart');

// Root route
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to DataBot Labs API',
        version: '1.0.0',
        documentation: '/api/v1/docs',
        endpoints: {
            auth: '/api/v1/auth',
            products: '/api/v1/products',
            orders: '/api/v1/orders',
            contact: '/api/v1/contact',
            team: '/api/v1/team',
            milestones: '/api/v1/milestones',
            cart: '/api/v1/cart'
        }
    });
});

// Test route
app.get('/api/v1/test', (req, res) => {
    res.json({
        success: true,
        message: 'API is working!',
        timestamp: new Date().toISOString()
    });
});

// Mount routes
app.use('/api/v1/auth', auth);
app.use('/api/v1/products', products);
app.use('/api/v1/contact', contact);
app.use('/api/v1/invoices', invoices);
app.use('/api/v1/team', team);
app.use('/api/v1/milestones', milestones);
app.use('/api/v1/cart', cart);

// These routes need authentication
app.use('/api/v1/orders', orders);
app.use('/api/v1/preorders', preorders);

// Error Handling Middleware
app.use(errorMiddleware);

// Handle unhandled routes
app.all('*', (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `Can't find ${req.originalUrl} on this server!`
    });
});

// Handle Unhandled Promise rejections
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    process.exit(1);
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode.`);
});
