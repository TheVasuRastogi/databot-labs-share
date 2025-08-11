import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ResponsiveButton = ({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  icon,
  disabled = false,
  loading = false,
  animate = true
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 focus:ring-purple-500',
    secondary: 'bg-white/10 text-white hover:bg-white/20 focus:ring-white',
    outline: 'border-2 border-white/20 text-white hover:bg-white/10 focus:ring-white'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const buttonContent = (
    <>
      {loading ? (
        <div className="flex items-center">
          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
          Loading...
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {icon && <span className="text-xl">{icon}</span>}
          {children}
        </div>
      )}
    </>
  );

  const buttonStyles = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  const ButtonWrapper = ({ children }) => {
    return animate ? (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        {children}
      </motion.div>
    ) : (
      <>{children}</>
    );
  };

  if (to) {
    return (
      <ButtonWrapper>
        <Link
          to={to}
          className={buttonStyles}
          onClick={onClick}
          tabIndex={disabled ? -1 : 0}
        >
          {buttonContent}
        </Link>
      </ButtonWrapper>
    );
  }

  return (
    <ButtonWrapper>
      <button
        type="button"
        className={buttonStyles}
        onClick={onClick}
        disabled={disabled || loading}
      >
        {buttonContent}
      </button>
    </ButtonWrapper>
  );
};

export default ResponsiveButton;
