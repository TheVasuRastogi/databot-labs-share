import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { getCartItemsCount } = useContext(CartContext);
  const { isAuthenticated, user } = useContext(AuthContext);
  
  const itemCount = getCartItemsCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/products' },
    { name: 'Software', path: '/software' },
    { name: 'About us', path: '/about' },
    { name: 'Support/Resources', path: '/resources' },
    { name: 'Blog/News', path: '/blog' },
    { name: 'Contact us', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/databot-logo.jpg"
              alt="DataBot-Labs"
              className="w-8 h-8 rounded"
            />
            <span className="text-white text-lg font-semibold">
              DataBot-Labs
            </span>
          </Link>

          {/* Main Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-white border-b-2 border-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="Search"
            >
              <FaSearch className="w-5 h-5" />
            </button>

            <Link
              to="/cart"
              className="text-gray-300 hover:text-white transition-colors duration-300 relative"
              aria-label="Shopping Cart"
            >
              <FaShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <Link
                to="/profile"
                className="text-sm font-medium text-white hover:text-gray-300 transition-colors duration-300"
              >
                {user?.name || 'seema rastogi'}
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-sm font-medium text-white hover:text-gray-300 transition-colors duration-300"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden text-gray-300 hover:text-white p-2"
              onClick={() => document.body.classList.toggle('mobile-menu-open')}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-3 py-2 text-base font-medium ${
                isActive(item.path)
                  ? 'text-white bg-black/30'
                  : 'text-gray-300 hover:text-white hover:bg-black/20'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;