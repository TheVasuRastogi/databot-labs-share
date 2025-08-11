import React from 'react';
import ResponsiveNavbar from './ResponsiveNavbar';
import ResponsiveContainer from './ResponsiveContainer';

const Layout = ({ children }) => {
  return (
    <>
      <ResponsiveNavbar />
      <div className="pt-16"> {/* Add padding for fixed navbar */}
        <ResponsiveContainer>
          {children}
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Layout;
