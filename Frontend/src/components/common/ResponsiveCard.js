import React from 'react';
import { motion } from 'framer-motion';

const ResponsiveCard = ({ children, className = '', onClick, animate = true }) => {
  const cardContent = (
    <div
      className={`
        relative 
        p-4 sm:p-6 md:p-8 
        rounded-2xl 
        bg-white/[0.02] 
        backdrop-blur-lg 
        border 
        border-white/[0.05] 
        shadow-xl 
        hover:shadow-2xl 
        transition-all 
        duration-300
        ${className}
      `}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );

  return animate ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group"
      onClick={onClick}
    >
      {cardContent}
    </motion.div>
  ) : (
    <div className="group" onClick={onClick}>
      {cardContent}
    </div>
  );
};

export default ResponsiveCard;
