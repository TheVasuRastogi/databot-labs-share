import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { COMPANY_LOGO } from '../../utils/brandAssets';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 transition-all duration-300">
        <div className="max-w-5xl mx-auto">
          {/* Single cylinder / pill – entire navbar */}
          <div
            className={`rounded-full bg-white border border-gray-100 flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 sm:py-3 transition-shadow duration-300 ${
              scrolled ? 'shadow-lg' : 'shadow-md'
            }`}
          >
            {/* Logo + DataBot Labs text */}
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 group"
              aria-label="DataBot Labs Home"
            >
              <img
                src={COMPANY_LOGO}
                alt="DataBot Labs logo"
                className="h-9 w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
              <span className="text-base sm:text-lg font-semibold tracking-tight text-[#1a1a1a] whitespace-nowrap">
                DataBot Labs
              </span>
            </Link>

            {/* Desktop nav – links directly in the bar (no inner cylinder) */}
            <nav
              className="hidden md:flex items-center flex-1 justify-center gap-1"
              aria-label="Main"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-white bg-[#1a1a1a] shadow-sm hover:bg-[#2d2d2d]'
                      : 'text-[#1a1a1a] hover:bg-gray-100 hover:text-[#0f0f0f]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right: Get Started + mobile toggle */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold bg-[#1a1a1a] text-white hover:bg-[#2d2d2d] transition-colors duration-200"
              >
                Get Started
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-[#1a1a1a] hover:text-[#0f0f0f] hover:bg-gray-100 transition-colors duration-200"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu – pill-style list below cylinder */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? 'max-h-64 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="rounded-2xl bg-white border border-gray-100 shadow-lg px-3 py-3 mx-auto max-w-sm">
            <ul className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-center px-4 py-3 rounded-full text-sm font-medium transition-all ${
                      isActive(item.path)
                        ? 'bg-[#1a1a1a] text-white shadow-sm'
                        : 'text-[#1a1a1a] hover:bg-gray-50 hover:text-[#0f0f0f]'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 block text-center px-4 py-3 rounded-full text-sm font-semibold bg-[#1a1a1a] text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
