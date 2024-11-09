import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import Menu from '../components/Menu';
import { Menu as MenuIcon } from 'lucide-react';

const HomePage = () => {
  console.log('HomePage component rendering');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add this navigation items array
  const navItems = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Programs',
      path: '/programs'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Get Involved',
      path: '/get-involved',
      children: [
        {
          name: 'Volunteer',
          path: '/volunteer'
        },
        {
          name: 'Partner',
          path: '/partner'
        }
      ]
    },
    {
      name: 'Contact',
      path: '/contact'
    }
  ];

  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav 
        className="fixed w-full z-40 bg-white shadow-md"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Menu button - moved to left */}
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <MenuIcon className="h-6 w-6 text-gray-900" />
            </button>

            {/* Logo - moved to center */}
            <Link 
              to="/" 
              className="flex items-center space-x-2"
              aria-label="Push Ahead Home"
            >
              <span className="text-xl font-bold text-gray-900">Push Ahead</span>
            </Link>

            {/* Donate button - added to top right */}
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

      {/* Hero Section */}
      <section 
        className="pt-16 bg-gradient-to-b from-blue-50 to-white"
        aria-label="Hero section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Youth Through 
              <span className="text-blue-600"> Skateboarding</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Combining skateboarding, mindfulness, and entrepreneurship to build confidence, 
              creativity, and community in underserved areas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/programs"
                className="px-8 py-3 bg-[#FBBF24] text-white hover:bg-[#F59E0B] transition-colors"
                aria-label="View our programs"
              >
                View Programs
              </Link>
              <Link
                to="/volunteer"
                className="px-8 py-3 bg-white text-[#FBBF24] border-2 border-[#FBBF24] hover:bg-[#FEF3C7] transition-colors"
                aria-label="Become a volunteer"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;