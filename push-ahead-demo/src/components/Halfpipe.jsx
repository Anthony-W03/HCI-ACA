import React from 'react';

const Halfpipe = ({ className, contentClassName, children }) => {
  return (
    <div className={`halfpipe-container relative h-[200px] ${className || ''}`}>
      <div className={`halfpipe-content absolute top-0 w-full ${contentClassName || ''}`}>
        {children}
      </div>
      {/* <div className="halfpipe absolute bottom-0 w-full h-[100px] bg-gray-200"
           style={{
             clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 20% 0%, 20% 60%, 80% 60%, 80% 0%)'
           }}
      ></div> */}
    </div>
  );
};

export default Halfpipe; 