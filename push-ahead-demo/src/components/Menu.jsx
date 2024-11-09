import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const Menu = ({ isOpen, onClose, navItems }) => {
  return (
    <>
      {/* Overlay - made fully white */}
      <div 
        className={`fixed inset-0 w-screen h-screen bg-white transition-opacity z-50 ${
          isOpen ? 'opacity-85' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Slide-out menu - made fully white */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-transform z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="p-4 flex-grow">
            <button
              className="absolute top-4 right-4"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-900" />
            </button>
            
            <div className="mt-8 space-y-4 text-center">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className="block px-3 py-2 text-xl font-medium text-gray-700 hover:text-[#FBBF24]"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="block px-3 py-2 text-lg text-gray-600 hover:text-[#FBBF24]"
                          onClick={onClose}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link
                to="/donate"
                className="block w-full text-center px-4 py-2 bg-[#FBBF24] text-white hover:bg-[#F59E0B] transition-colors text-xl mb-2"
                onClick={onClose}
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
