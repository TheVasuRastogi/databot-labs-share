import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaTrash, FaTimes } from 'react-icons/fa';
import { removeFromCart } from '../../redux/slices/cartSlice';
import { motion, AnimatePresence } from 'framer-motion';

const MiniCart = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { cartItems, itemCount, subtotal } = useSelector((state) => state.cart);

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" onClick={onClose}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, x: 20, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute right-0 top-20 w-96 max-h-[calc(100vh-5rem)] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl">
              {/* Header */}
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <FaShoppingCart className="text-white/70" />
                    Cart ({itemCount} items)
                  </h3>
                  <button
                    onClick={onClose}
                    className="text-white/70 hover:text-white transition-colors p-1"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Cart Content */}
              <div className="p-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-8">
                    <FaShoppingCart className="text-4xl text-white/30 mx-auto mb-4" />
                    <p className="text-white/70">Your cart is empty</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
                      <AnimatePresence>
                        {cartItems.map((item) => (
                          <motion.div
                            key={item.product}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex items-start gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg border border-white/10"
                            />
                            <div className="flex-grow min-w-0">
                              <Link
                                to={`/product/${item.product}`}
                                onClick={onClose}
                                className="text-white hover:text-blue-400 transition-colors line-clamp-1 font-medium"
                              >
                                {item.name}
                              </Link>
                              <div className="flex items-center justify-between mt-1">
                                <div className="text-sm text-white/70">
                                  {item.quantity} × ${item.price.toFixed(2)}
                                </div>
                                <div className="text-sm font-medium text-white">
                                  ${(item.quantity * item.price).toFixed(2)}
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => handleRemoveItem(item.product)}
                              className="opacity-0 group-hover:opacity-100 text-white/50 hover:text-red-400 transition-all p-1"
                            >
                              <FaTrash className="w-4 h-4" />
                            </button>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>

                    {/* Cart Summary */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-white/70">Subtotal</span>
                        <span className="text-white font-medium">${subtotal.toFixed(2)}</span>
                      </div>

                      <div className="space-y-2">
                        <Link
                          to="/cart"
                          onClick={onClose}
                          className="block w-full text-center bg-white/10 text-white py-2 rounded-lg hover:bg-white/20 transition-colors"
                        >
                          View Cart
                        </Link>
                        <Link
                          to="/checkout"
                          onClick={onClose}
                          className="block w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MiniCart; 