import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import TopBar from '../components/TopBar';
import Halfpipe from '../components/Halfpipe';

const HomePage = () => {
  console.log('HomePage component rendering');
  const [isScrolled, setIsScrolled] = useState(false);

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
      <TopBar />
      {/* Hero Section */}
      <section 
        className="pt-16 bg-gradient-to-b from-blue-50 to-white relative"
        aria-label="Hero section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 ">
              Empowering Youth Through 
              <span className="text-blue-600"> Skateboarding</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-light">
              Combining skateboarding, mindfulness, and entrepreneurship to build confidence, 
              creativity, and community in underserved areas.
            </p>
          </div>
          <Halfpipe>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/programs"
                className="px-8 py-3 bg-[#FBBF24] text-white hover:bg-[#F59E0B] transition-colors rounded-md"
              >
                View Programs
              </Link>
              <Link
                to="/volunteer"
                className="px-8 py-3 bg-white text-[#FBBF24] border-2 border-[#FBBF24] hover:bg-[#FEF3C7] transition-colors rounded-md"
              >
                Volunteer
              </Link>
            </div>
          </Halfpipe>
        </div>
      </section>
    </div>
  );
};

export default HomePage;