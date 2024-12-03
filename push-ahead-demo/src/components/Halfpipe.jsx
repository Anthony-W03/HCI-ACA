import React from 'react';


const Halfpipe = ({ className, contentClassName, children }) => {
  return (
    <div className={`halfpipe-container relative h-[200px] py-4 ${className || ''}`}>
      <div className={`halfpipe-content absolute top-0 w-full ${contentClassName || ''}`}>
        {children}
      </div>
      <div className="halfpipe-image absolute bottom-0 w-full">
        <svg 
          viewBox="0 0 100 30" 
          className="w-full h-48"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L15,0 L15,0 A25,20 0 0,0 85,0 L85,0 L100,0 L100,30 L0,30 Z"
            className="fill-current text-[#3B82F6]"
          />
        </svg>
      </div>
    </div>
  );
};

export default Halfpipe; 