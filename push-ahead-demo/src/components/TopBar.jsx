import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon } from 'lucide-react';
import Menu from './Menu';
import { navItems } from '../config/navigation';

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav 
      className="fixed w-full z-40 bg-white shadow-md h-24"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <MenuIcon className="h-6 w-6 text-gray-900" />
          </button>

          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="Push Ahead Home"
          >
            <span className="text-xl font-bold text-gray-900">Push Ahead</span>
          </Link>

          <Link
            to="/donate"
            className="px-4 py-2 bg-[#FBBF24] text-white hover:bg-[#F59E0B] transition-colors"
          >
            Donate
          </Link>
        </div>
      </div>

      <Menu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
      />
    </nav>
  );
};

export default TopBar; 