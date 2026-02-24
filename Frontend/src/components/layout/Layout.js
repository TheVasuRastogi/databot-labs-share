import React from 'react';
import Navbar from './Navbar';
import ResponsiveContainer from './ResponsiveContainer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <ResponsiveContainer>
          {children}
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Layout;
