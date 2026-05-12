import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_LOGO } from '../../utils/brandAssets';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowRight,
} from 'react-icons/fa';

const FOOTER_WIDTH = 'max-w-5xl';

const quickLinks = [
  { label: 'Products', to: '/products' },
  { label: 'Contact', to: '/contact' },
];

const categories = [
  { label: 'Industrial', to: '/products?category=industrial' },
  { label: 'Domestic', to: '/products?category=domestic' },
  { label: 'Educational', to: '/products?category=educational' },
  { label: 'Entertainment', to: '/products?category=entertainment' },
];

const socialLinks = [
  { name: 'Discord', icon: FaDiscord, href: 'https://discord.gg/databotlabs', ariaLabel: 'Join us on Discord' },
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/bvdhaagen/goliath', ariaLabel: 'View on GitHub' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/company/databotlabs', ariaLabel: 'Connect on LinkedIn' },
  { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com/databotlabs', ariaLabel: 'Follow on Twitter' },
];

const contact = {
  email: 'b.vanderhaagen76@gmail.com',
  phone: '+31 6 43465990',
  address: 'Grondzeilersplantsoen 53, 1333 BS Almere, Netherlands',
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200" role="contentinfo">
      {/* Main footer content */}
      <div className={`${FOOTER_WIDTH} mx-auto px-4 sm:px-6 py-14 sm:py-16`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-theme hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded-lg -m-2 p-2"
              aria-label="DataBot-Labs home"
            >
              <span className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-theme">
                Databot Labs
              </span>
              <img
                src={COMPANY_LOGO}
                alt="DataBot Labs logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-theme-secondary leading-relaxed max-w-sm">
              Your trusted partner for advanced robotics and automation. Building the future, one robot at a time.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-theme hover:text-gray-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded-lg py-2 pr-2"
            >
              Get in touch
              <FaArrowRight className="w-3.5 h-3.5" aria-hidden />
            </Link>
            {/* Social */}
            <ul className="mt-8 flex items-center gap-3">
              {socialLinks.map(({ name, icon: Icon, href, ariaLabel }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-theme-secondary hover:text-theme hover:border-gray-300 hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
                    aria-label={ariaLabel}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-theme-muted">
                Quick links
              </h3>
              <ul className="mt-4 space-y-3">
                {quickLinks.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm text-theme-secondary hover:text-theme transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-theme-muted">
                Categories
              </h3>
              <ul className="mt-4 space-y-3">
                {categories.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm text-theme-secondary hover:text-theme transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-theme-muted">
                Contact
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 text-sm text-theme-secondary hover:text-theme transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded group"
                  >
                    <FaEnvelope className="w-3.5 h-3.5 text-theme-muted shrink-0 group-hover:text-theme" />
                    <span className="break-all">{contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-sm text-theme-secondary hover:text-theme transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded group"
                  >
                    <FaPhone className="w-3.5 h-3.5 text-theme-muted shrink-0 group-hover:text-theme" />
                    {contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-theme-secondary">
                  <FaMapMarkerAlt className="w-3.5 h-3.5 text-theme-muted shrink-0" />
                  {contact.address}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 bg-gray-50/80">
        <div className={`${FOOTER_WIDTH} mx-auto px-4 sm:px-6 py-5`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-theme-muted">
              © {new Date().getFullYear()} DataBot-Labs. All rights reserved.
            </p>
            <p className="text-xs text-theme-muted">
              Advanced robotics & automation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
