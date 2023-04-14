import React from 'react';
import Navbar from './Navbar';

type LayoutProbs = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProbs) => {
  return (
    <div className="bg-gray-950">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
