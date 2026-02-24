import React from 'react';

const ResponsiveContainer = ({ children, className = '' }) => {
  return (
    <div className={`
      w-full 
      min-h-screen 
      bg-[#030014] 
      text-white 
      relative 
      overflow-hidden
      px-4 
      sm:px-6 
      lg:px-8
      ${className}
    `}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#030014]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:1.25rem_1.25rem] sm:bg-[length:2rem_2rem]" />
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[25rem] sm:w-[37.5rem] md:w-[50rem] h-[25rem] sm:h-[37.5rem] md:h-[50rem] bg-purple-500/10 rounded-full filter blur-[6.25rem] sm:blur-[7.5rem] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[25rem] sm:w-[37.5rem] md:w-[50rem] h-[25rem] sm:h-[37.5rem] md:h-[50rem] bg-blue-500/10 rounded-full filter blur-[6.25rem] sm:blur-[7.5rem] animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default ResponsiveContainer;
