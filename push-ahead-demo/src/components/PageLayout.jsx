import React from 'react';
import TopBar from './TopBar';

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <div className="pt-32">
        {children}
      </div>
    </div>
  );
};

export default PageLayout; 