import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaRobot } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import MiniCart from '../cart/MiniCart';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const { getCartItemsCount } = useContext(CartContext);
  const { isAuthenticated, user } = useContext(AuthContext);
  
  const itemCount = getCartItemsCount();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/products' },
    { name: 'Software', path: '/software' },
    { name: 'About us', path: '/about' },
    { name: 'Support/Resources', path: '/resources' },
    { name: 'Blog/News', path: '/blog' },
    { name: 'Contact us', path: '/contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative">
              <img 
                src="/images/databot-logo.jpg" 
                alt="DataBot-Labs Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-500 transition-all duration-300 hidden sm:inline-block">
              DataBot-Labs
            </span>
            <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-500 transition-all duration-300 sm:hidden">
              DataBot
            </span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 relative group
                  ${isActive(item.path) ? 'text-white' : 'text-white/70 hover:text-white'}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300
                  ${isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              <FaSearch className="w-5 h-5" />
            </button>

            {/* Cart */}
            <div className="relative">
              <Link
                to="/cart"
                className="text-white/70 hover:text-white transition-colors duration-300 relative"
              >
                <FaShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Auth */}
            {isAuthenticated ? (
              <Link
                to="/profile"
                className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                {user?.name || 'Profile'}
              </Link>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white/90 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-50 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } md:hidden`}
        aria-hidden={!isMenuOpen}
      >
        <div className={`h-full flex flex-col transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
              <img 
                src="/images/databot-logo.jpg" 
                alt="DataBot-Labs Logo" 
                className="w-8 h-8 rounded-lg" 
              />
              <span className="text-sm font-bold text-white">DataBot-Labs</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white/70 hover:text-white p-2"
              aria-label="Close menu"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300
                    ${isActive(item.path) 
                      ? 'bg-white/10 text-white' 
                      : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Search */}
            <div className="px-8 py-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-white/20 text-sm"
                />
              </div>
            </div>

            {/* Mobile Cart & Profile */}
            <div className="px-4 py-4 border-t border-white/10">
              <div className="space-y-2">
                <Link
                  to="/cart"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <FaShoppingCart className="w-5 h-5 text-white/70" />
                    <span className="text-white font-medium">Cart</span>
                  </div>
                  {itemCount > 0 && (
                    <span className="bg-white text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Link>

                <Link
                  to={isAuthenticated ? "/profile" : "/login"}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-center text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors duration-300"
                >
                  {isAuthenticated ? user?.name || "Profile" : "Login"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="w-full max-w-2xl">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Search</h2>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products, software, or resources..."
                  className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
