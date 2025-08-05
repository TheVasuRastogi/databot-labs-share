const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Get current user's cart
exports.getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items: [] });
    }
    res.status(200).json({ success: true, cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add item to cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity, isPreorder } = req.body;
    
    // Create mock product data for demo
    const mockProducts = {
      '1': { 
        _id: '1',
        name: 'Robotic Arm on Linear Rail',
        price: 25999,
        image: '/images/industrial-robot.jpg',
        category: 'Industrial'
      },
      '2': {
        _id: '2',
        name: 'Robotic Joint Assembly',
        price: 18999,
        image: '/images/20250616_110627.svg',
        category: 'Mobile Robotics'
      },
      '3': {
        _id: '3',
        name: 'Goliath Arm (Fixed)',
        price: 22999,
        image: '/images/arm.svg',
        category: 'Industrial'
      },
      '4': {
        _id: '4',
        name: 'SLAM Navigation Robot',
        price: 15999,
        image: '/images/domestic-robot.jpg',
        category: 'Mobile Robotics'
      },
      '5': {
        _id: '5',
        name: 'Educational Robot Kit',
        price: 2999,
        image: '/images/educational-robot.jpg',
        category: 'Educational'
      },
      '6': {
        _id: '6',
        name: 'Entertainment Robot Companion',
        price: 8999,
        image: '/images/entertainment-robot.jpg',
        category: 'Entertainment'
      },
      '7': {
        _id: '7',
        name: 'Smart Gripper System',
        price: 4999,
        image: '/images/industrial-robot.jpg',
        category: 'Industrial'
      },
      '8': {
        _id: '8',
        name: 'Linear Slider Rail',
        price: 7999,
        image: '/images/industrial-robot.jpg',
        category: 'Industrial'
      },
      '9': {
        _id: '9',
        name: 'Advanced Vision System',
        price: 12999,
        image: '/images/industrial-robot.jpg',
        category: 'AI & Vision'
      },
      '10': {
        _id: '10',
        name: 'Collaborative Robot',
        price: 35999,
        image: '/images/industrial-robot.jpg',
        category: 'Industrial'
      }
    };
    
    const product = mockProducts[productId];
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items: [] });
    }
    
    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
      cart.items[itemIndex].price = product.price;
      if (isPreorder) {
        cart.items[itemIndex].isPreorder = true;
        cart.items[itemIndex].expectedDelivery = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000); // 60 days from now
      }
    } else {
      const newItem = { 
        product: productId, 
        quantity, 
        price: product.price,
        isPreorder: isPreorder || false
      };
      
      if (isPreorder) {
        newItem.expectedDelivery = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000); // 60 days from now
      }
      
      cart.items.push(newItem);
    }
    
    cart.updatedAt = Date.now();
    await cart.save();
    
    // Populate with actual product data if exists, otherwise use mock data
    await cart.populate('items.product');
    
    // Add mock product data to items that don't have populated product
    cart.items = cart.items.map(item => {
      const mockProduct = mockProducts[item.product.toString()];
      if (mockProduct) {
        item.product = mockProduct;
      }
      return item;
    });
    
    res.status(200).json({ success: true, cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update cart item quantity
exports.updateCartItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { quantity } = req.body;
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });
    const item = cart.items.id(itemId);
    if (!item) return res.status(404).json({ success: false, message: 'Item not found' });
    item.quantity = quantity;
    cart.updatedAt = Date.now();
    await cart.save();
    await cart.populate('items.product');
    res.status(200).json({ success: true, cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
  try {
    const { itemId } = req.params;
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });
    cart.items = cart.items.filter(item => item._id.toString() !== itemId);
    cart.updatedAt = Date.now();
    await cart.save();
    await cart.populate('items.product');
    res.status(200).json({ success: true, cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Clear cart
exports.clearCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });
    cart.items = [];
    cart.updatedAt = Date.now();
    await cart.save();
    res.status(200).json({ success: true, cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};