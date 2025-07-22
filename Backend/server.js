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
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
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

// Mount routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: {
    success: false,
    message: 'Too many attempts, please try again later.'
  }
});
app.use('/api/v1/auth/login', authLimiter);
app.use('/api/v1/auth/register', authLimiter);
app.use('/api/v1/products', products);
app.use('/api/v1/orders', orders);
app.use('/api/v1/contact', contact);
app.use('/api/v1/invoices', invoices);
app.use('/api/v1/preorders', preorders);
app.use('/api/v1/team', team);
app.use('/api/v1/milestones', milestones);

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
