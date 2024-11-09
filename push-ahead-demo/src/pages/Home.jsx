import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css'

const HomePage = () => {
  console.log('HomePage component rendering');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items structure
  const navItems = [
    {
      name: 'Programs',
      path: '/programs',
      children: [
        { name: 'After School', path: '/programs/after-school' },
        { name: 'Summer Camps', path: '/programs/summer-camps' },
        { name: 'Workshops', path: '/programs/workshops' },
      ],
    },
    { name: 'About Us', path: '/about' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'For Schools', path: '/schools' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2"
              aria-label="Push Ahead Home"
            >
              {/* <Skateboarding className="h-8 w-8 text-blue-600" /> */}
              <span className="text-xl font-bold text-gray-900">Push Ahead</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <span className="flex items-center">
                      {item.name}
                      {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                    </span>
                  </Link>
                  {item.children && (
                    <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-md mt-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
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
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                aria-label="Donate to Push Ahead"
              >
                Donate
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-900" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen' : 'max-h-0'
          } overflow-hidden bg-white`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
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
              className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
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
                className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                aria-label="View our programs"
              >
                View Programs
              </Link>
              <Link
                to="/volunteer"
                className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
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