import React from 'react';

const ResponsiveGrid = ({ 
  children, 
  cols = { 
    default: 1,    // 1 column by default
    sm: 2,         // 2 columns on small screens
    md: 2,         // 2 columns on medium screens
    lg: 3,         // 3 columns on large screens
    xl: 4          // 4 columns on extra large screens
  },
  gap = {
    default: 4,    // gap-4 by default
    sm: 6,         // gap-6 on small screens
    md: 6,         // gap-6 on medium screens
    lg: 8,         // gap-8 on large screens
    xl: 8          // gap-8 on extra large screens
  },
  className = ''
}) => {
  const getGridCols = () => {
    return `
      grid-cols-${cols.default}
      ${cols.sm ? `sm:grid-cols-${cols.sm}` : ''}
      ${cols.md ? `md:grid-cols-${cols.md}` : ''}
      ${cols.lg ? `lg:grid-cols-${cols.lg}` : ''}
      ${cols.xl ? `xl:grid-cols-${cols.xl}` : ''}
    `;
  };

  const getGap = () => {
    return `
      gap-${gap.default}
      ${gap.sm ? `sm:gap-${gap.sm}` : ''}
      ${gap.md ? `md:gap-${gap.md}` : ''}
      ${gap.lg ? `lg:gap-${gap.lg}` : ''}
      ${gap.xl ? `xl:gap-${gap.xl}` : ''}
    `;
  };

  return (
    <div className={`grid ${getGridCols()} ${getGap()} ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;
