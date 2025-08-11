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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm shadow-lg" role="navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group" aria-label="DataBot-Labs Home">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <img 
                  src="/images/databot-logo-compact.svg"
                  alt="DataBot-Labs Logo"
                  className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="hidden sm:block text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-500 transition-all duration-300">
                  DataBot-Labs
                </span>
                <span className="block sm:hidden text-base font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  DataBot
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-4" role="menubar">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  role="menuitem"
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    ${isActive(item.path)
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white hover:shadow-md'
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
                className="relative p-2 text-gray-300 hover:text-white transition-colors duration-300"
                aria-label={`Shopping cart with ${itemCount} items`}
              >
                <FaShoppingCart className="h-6 w-6" aria-hidden="true" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
              <Link
                to={isAuthenticated ? "/profile" : "/login"}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
                aria-label={isAuthenticated ? 'Go to profile' : 'Login'}
              >
                <FaUser className="h-5 w-5 text-gray-300" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-300">
                  {isAuthenticated ? (user?.name || 'Profile') : 'Login'}
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/20 transition-all duration-300"
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
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-b from-black/90 to-black/95 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-gray-700/50 mt-4 pt-4">
              <Link
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300"
                aria-label={`Shopping cart with ${itemCount} items`}
              >
                <FaShoppingCart className="h-6 w-6 mr-3" aria-hidden="true" />
                Cart
                {itemCount > 0 && (
                  <span className="ml-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
              <Link
                to={isAuthenticated ? "/profile" : "/login"}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300"
                aria-label={isAuthenticated ? 'Go to profile' : 'Login'}
              >
                <FaUser className="h-6 w-6 mr-3" aria-hidden="true" />
                {isAuthenticated ? (user?.name || 'Profile') : 'Login'}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16 sm:h-20" aria-hidden="true"></div>
    </>
  );
};

export default Navbar;