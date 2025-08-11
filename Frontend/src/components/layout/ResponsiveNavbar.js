import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              DataBot Labs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth/Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/cart"
              className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <FaShoppingCart className="h-5 w-5" />
            </Link>
            <Link
              to={isAuthenticated ? '/profile' : '/login'}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
            >
              <FaUser className="h-4 w-4" />
              <span className="text-sm font-medium">
                {isAuthenticated ? user?.name?.split(' ')[0] : 'Login'}
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/20 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/cart"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
                >
                  <FaShoppingCart className="h-5 w-5 mr-2" />
                  Cart
                </Link>
                <Link
                  to={isAuthenticated ? '/profile' : '/login'}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
                >
                  <FaUser className="h-5 w-5 mr-2" />
                  {isAuthenticated ? user?.name?.split(' ')[0] : 'Login'}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default ResponsiveNavbar;
