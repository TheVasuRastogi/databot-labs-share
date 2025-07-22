const express = require('express');
const router = express.Router();
const axios = require('axios');
const { isAuthenticatedUser } = require('../middleware/auth');

// Generate invoice for an order
router.post('/generate/:orderId', isAuthenticatedUser, async (req, res) => {
    try {
        // Get order details from database
        const Order = require('../models/Order');
        const order = await Order.findById(req.params.orderId)
            .populate('user')
            .populate('orderItems.product');

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // Prepare invoice data
        const invoiceData = {
            invoiceNumber: `INV-${order._id}`,
            invoiceDate: new Date(),
            customerName: order.user.name,
            customerEmail: order.user.email,
            items: order.orderItems.map(item => ({
                productName: item.product.name,
                quantity: item.quantity,
                unitPrice: item.product.price,
                total: item.quantity * item.product.price
            })),
            totalAmount: order.totalPrice
        };

        // Call invoice service
        const response = await axios.post('http://localhost:8081/api/invoices/generate', 
            invoiceData,
            { 
                responseType: 'arraybuffer',
                headers: {
                    'Accept': 'application/pdf'
                }
            }
        );

        // Send PDF response
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=invoice-${invoiceData.invoiceNumber}.pdf`);
        res.send(response.data);

    } catch (error) {
        console.error('Invoice generation error:', error);
        res.status(500).json({ message: 'Error generating invoice' });
    }
});

module.exports = router; 