import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronRight, Calendar, Users, Clock, MapPin } from 'lucide-react';

// Example of a reusable section header component
const SectionHeader = ({ title, description }) => (
  <div className="mb-8 text-center max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
    <p className="text-lg text-gray-600">{description}</p>
  </div>
);

// Example of a program filter component
const ProgramFilter = ({ activeFilter, setActiveFilter }) => {
  const filters = ['All Programs', 'Beginners', 'Advanced', 'Weekend Only'];
  
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === filter
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

// Example of a program card component with interaction
const ProgramCard = ({ program }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={() => navigate(`/programs/${program.id}`)}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all cursor-pointer"
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        <img 
          src="/api/placeholder/400/300"
          alt={program.title}
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{program.schedule}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-5 h-5 mr-2" />
            <span>{program.ageGroup}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{program.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{program.description}</p>
        
        <div className="flex gap-3">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              // Add registration logic
            }}
            className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Register Now
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/programs/${program.id}`);
            }}
            className="flex-1 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

// Example of a call-to-action section
const CTASection = () => (
  <div className="bg-indigo-700 text-white py-12 px-4 mt-16">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to Join Push Ahead?</h2>
      <p className="mb-8">
        Transform lives through skating, mindfulness, and entrepreneurship.
        Join our community today!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/register"
          className="bg-white text-indigo-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
        >
          Register Now
        </Link>
        <Link
          to="/contact"
          className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-600 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </div>
);

// Main page component
const ProgramsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All Programs');
  
  // Example program data - in a real app, this might come from an API
  const programs = [
    {
      id: 1,
      title: "Beginner Skate & Mindfulness",
      description: "Perfect for newcomers to skating. Learn fundamentals while developing mindfulness practices.",
      schedule: "Mon, Wed, Fri afternoons",
      ageGroup: "Ages 8-12",
      duration: "8 weeks",
      location: "Central Skate Park"
    },
    {
      id: 2,
      title: "Young Entrepreneurs Workshop",
      description: "Combine skating skills with basic business concepts. Learn while having fun!",
      schedule: "Saturday mornings",
      ageGroup: "Ages 13-16",
      duration: "12 weeks",
      location: "Community Center"
    }
  ];

  // Example of handling scroll position
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">
              Our Programs
            </h1>
            <p className="text-xl text-indigo-100">
              Discover how Push Ahead combines skating, mindfulness, and 
              entrepreneurship to create unique learning experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <SectionHeader 
          title="Available Programs"
          description="Choose from our variety of programs designed to inspire and educate through skating."
        />

        <ProgramFilter 
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        {/* Breadcrumb Navigation Example */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-8">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">Programs</span>
        </div>
      </div>

      {/* Call to Action */}
      <CTASection />
    </div>
  );
};

export default ProgramsPage;