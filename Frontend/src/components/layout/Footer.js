import React from 'react';
import { FaRobot, FaComments } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-20 pb-8 overflow-hidden">
      {/* Hero-style background overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl p-6 sm:p-8 lg:p-12 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Business Info */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">DataBot-Labs</h2>
              <p className="text-gray-200 mb-4 text-sm sm:text-base">Your trusted destination for cutting-edge robotics and automation solutions.</p>
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base group"
                aria-label="Chat with Robot"
                onClick={() => window.location.href = '/chat'}
              >
                <FaComments className="mr-2 text-lg" />
                Chat with Robot
              </button>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href="/products" className="hover:underline text-gray-200">Browse Robots</a></li>
                <li><a href="/about" className="hover:underline text-gray-200">About Us</a></li>
                <li><a href="/contact" className="hover:underline text-gray-200">Contact</a></li>
                <li><a href="/faq" className="hover:underline text-gray-200">FAQ</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3">Categories</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href="/products?category=industrial" className="hover:underline text-gray-200">Industrial Robots</a></li>
                <li><a href="/products?category=domestic" className="hover:underline text-gray-200">Domestic Robots</a></li>
                <li><a href="/products?category=educational" className="hover:underline text-gray-200">Educational Robots</a></li>
                <li><a href="/products?category=entertainment" className="hover:underline text-gray-200">Entertainment Robots</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3">Contact Us</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-200">
                <li className="break-words">Email: <a href="mailto:b.vanderhaagen76@gmail.com" className="hover:underline">b.vanderhaagen76@gmail.com</a></li>
                <li>Phone: <a href="tel:+31643465990" className="hover:underline">+31 6 43465990</a></li>
                <li>Address: Amsterdam, The Netherlands</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-xs sm:text-sm">
            <div>© 2025 DataBot-Labs. All rights reserved.</div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
              <a href="/terms" className="hover:underline">Terms of Service</a>
              <a href="/sitemap" className="hover:underline">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
