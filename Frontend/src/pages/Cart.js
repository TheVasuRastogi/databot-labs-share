import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import { updateQuantity, removeFromCart, syncCartWithBackend } from '../redux/slices/cartSlice';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, loading, error, itemCount, subtotal, tax, total } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleQuantityChange = async (itemId, type) => {
    const item = cartItems.find(item => item.product === itemId);
    if (type === 'increase' && item.quantity < item.stock) {
      dispatch(updateQuantity({ id: itemId, quantity: item.quantity + 1 }));
      await dispatch(syncCartWithBackend());
    } else if (type === 'decrease' && item.quantity > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: item.quantity - 1 }));
      await dispatch(syncCartWithBackend());
    }
  };

  const handleRemoveItem = async (itemId) => {
    dispatch(removeFromCart(itemId));
    await dispatch(syncCartWithBackend());
    toast.success('Item removed from cart');
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast.error('Please login to proceed');
      navigate('/login', { state: { from: '/cart' } });
      return;
    }
    navigate('/checkout');
  };

  if (loading) {
    return (
      <div className="min-h-screen relative pt-20 bg-black text-white overflow-hidden">
        {/* Footer-style background overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
        </div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-white/10 rounded w-1/4"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="h-40 bg-white/10 rounded-xl"></div>
                ))}
              </div>
              <div className="h-80 bg-white/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen relative pt-20 bg-black text-white overflow-hidden">
        {/* Footer-style background overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
        </div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen relative pt-20 bg-black text-white overflow-hidden">
        {/* Footer-style background overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 py-16 text-center relative z-10"
        >
          <FaShoppingCart className="text-6xl text-white/30 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h2>
          <p className="text-white/70 mb-8 text-lg">
            Add some amazing robots to your cart and come back here to complete your purchase.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Browse Robots
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative pt-20 bg-black text-white overflow-hidden">
      {/* Footer-style background overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-8 relative z-10"
      >
        <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart ({itemCount} items)</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.product}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-4 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-40 h-40 object-cover rounded-lg border border-white/10"
                    />
                    
                    <div className="flex-grow">
                      <Link
                        to={`/product/${item.product}`}
                        className="text-xl font-semibold text-white hover:text-blue-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                      
                      <div className="flex flex-wrap items-center gap-6 mt-4">
                        <div className="flex items-center">
                          <span className="text-white/70 mr-4">Quantity:</span>
                          <div className="flex items-center bg-white/5 rounded-lg border border-white/10">
                            <button
                              onClick={() => handleQuantityChange(item.product, 'decrease')}
                              className="p-2 hover:bg-white/10 rounded-l-lg transition-colors"
                              disabled={item.quantity === 1}
                            >
                              <FaMinus className={item.quantity === 1 ? 'text-white/30' : 'text-white/70'} />
                            </button>
                            <span className="px-4 py-2 text-white font-medium min-w-[40px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.product, 'increase')}
                              className="p-2 hover:bg-white/10 rounded-r-lg transition-colors"
                              disabled={item.quantity === item.stock}
                            >
                              <FaPlus className={item.quantity === item.stock ? 'text-white/30' : 'text-white/70'} />
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between flex-grow">
                          <div>
                            <span className="text-2xl font-bold text-white">${(item.price * item.quantity).toFixed(2)}</span>
                            <span className="text-white/70 ml-2">(${item.price.toFixed(2)} each)</span>
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.product)}
                            className="text-white/50 hover:text-red-400 transition-colors p-2"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>

                      {item.quantity === item.stock && (
                        <p className="text-orange-400/70 text-sm mt-2">
                          Maximum available quantity reached
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Shipping</span>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Tax (10%)</span>
                  <span className="text-white">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-white/10 pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-white">Total</span>
                    <span className="text-xl font-bold text-white">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg mt-6 hover:from-blue-600 hover:to-purple-700 transition-colors font-medium"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="block w-full text-center text-white/70 hover:text-white mt-4 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;
