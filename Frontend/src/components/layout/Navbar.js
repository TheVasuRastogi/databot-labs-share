import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartItemsCount } = useContext(CartContext);
  const { isAuthenticated, user } = useContext(AuthContext);
  
  const itemCount = getCartItemsCount();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Software', path: '/software' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm" role="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="DataBot-Labs Home">
            <img 
              src="/images/databot-logo.jpg" 
              alt="DataBot-Labs Logo" 
              className="w-8 h-8 rounded-lg"
            />
            <span className="ml-2 text-white font-bold text-lg hidden sm:block">
              DataBot-Labs
            </span>
            <span className="ml-2 text-white font-bold text-lg sm:hidden">
              DataBot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4" role="menubar">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                role="menuitem"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${isActive(item.path)
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/cart" 
              className="text-gray-300 hover:text-white relative"
              aria-label={`Shopping cart with ${itemCount} items`}
            >
              <FaShoppingCart className="h-6 w-6" aria-hidden="true" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <Link
              to={isAuthenticated ? "/profile" : "/login"}
              className="flex items-center space-x-2 text-gray-300 hover:text-white"
              aria-label={isAuthenticated ? 'Go to profile' : 'Login'}
            >
              <FaUser className="h-6 w-6" aria-hidden="true" />
              <span className="text-sm font-medium">
                {isAuthenticated ? (user?.name || 'Profile') : 'Login'}
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" aria-hidden="true" />
            ) : (
              <FaBars className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(item.path)
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              aria-current={isActive(item.path) ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
          <div className="border-t border-gray-700 pt-4 pb-3">
            <Link
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              aria-label={`Shopping cart with ${itemCount} items`}
            >
              <FaShoppingCart className="h-6 w-6 mr-3" aria-hidden="true" />
              Cart
              {itemCount > 0 && (
                <span className="ml-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <Link
              to={isAuthenticated ? "/profile" : "/login"}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              aria-label={isAuthenticated ? 'Go to profile' : 'Login'}
            >
              <FaUser className="h-6 w-6 mr-3" aria-hidden="true" />
              {isAuthenticated ? (user?.name || 'Profile') : 'Login'}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;