import React from 'react';
import { Search, Building, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Match in Tech
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">
            Connect with top companies and talent using AI-powered matching
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 flex items-center justify-center">
              <Search className="w-5 h-5 mr-2" />
              Find Jobs
            </button>
            <button className="bg-indigo-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 flex items-center justify-center">
              <Building className="w-5 h-5 mr-2" />
              Post a Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;