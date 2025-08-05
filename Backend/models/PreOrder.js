const mongoose = require('mongoose');

const preOrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    maxLength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  product: {
    type: String,
    required: [true, 'Please select a product']
  },
  productName: {
    type: String,
    required: [true, 'Please enter product name'],
    maxLength: [100, 'Product name cannot exceed 100 characters']
  },
  quantity: {
    type: Number,
    required: [true, 'Please enter quantity'],
    min: [1, 'Quantity must be at least 1']
  },
  expectedDelivery: {
    type: Date,
    required: [true, 'Expected delivery date is required']
  },
  company: {
    type: String,
    maxLength: [100, 'Company name cannot exceed 100 characters']
  },
  phone: {
    type: String,
    required: [true, 'Please enter your phone number'],
    validate: {
      validator: function(v) {
        // This regex supports:
        // - International format with + (e.g., +1234567890)
        // - Local format (e.g., 1234567890)
        // - Format with spaces or dashes (e.g., 123-456-7890)
        // - Format with parentheses (e.g., (123) 456-7890)
        // - International codes (e.g., +91 1234567890)
        return /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number. Please enter a valid phone number.`
    }
  },
  message: {
    type: String,
    maxLength: [2000, 'Message cannot exceed 2000 characters']
  },
  status: {
    type: String,
    default: 'Pending',
    enum: ['Pending', 'Contacted', 'Closed']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PreOrder', preOrderSchema); 