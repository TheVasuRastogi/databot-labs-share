import React from 'react';
import { motion } from 'framer-motion';

const PageLayout = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen bg-[#030014] text-white ${className}`}
    >
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#030014]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:1.25rem_1.25rem] sm:bg-[length:2rem_2rem]" />
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[25rem] sm:w-[37.5rem] md:w-[50rem] h-[25rem] sm:h-[37.5rem] md:h-[50rem] bg-purple-500/10 rounded-full filter blur-[6.25rem] sm:blur-[7.5rem] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[25rem] sm:w-[37.5rem] md:w-[50rem] h-[25rem] sm:h-[37.5rem] md:h-[50rem] bg-blue-500/10 rounded-full filter blur-[6.25rem] sm:blur-[7.5rem] animate-pulse" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="w-full">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PageLayout;
