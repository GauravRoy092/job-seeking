import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-800 to-purple-900 text-white 
                    py-8 sm:py-20 px-2 sm:px-4 text-center 
                    rounded-xl sm:mx-4 mx-2 mt-6 sm:mt-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Over <span className="text-gray-300">10,000+</span> jobs available
          </h2>
          <p className="text-sm sm:text-lg text-gray-200 px-2 sm:px-4">
            Find your next career opportunity - search top positions and launch your future!
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          {/* Job Title or Keywords */}
          <div className="flex items-center bg-white border border-gray-300 
                        rounded-full px-3 py-2 w-full sm:flex-1 shadow-sm">
            <img
              src={assets.search_icon}
              alt="Search"
              className="w-5 h-5 mr-2 opacity-60"
            />
            <input
              type="text"
              placeholder="Job title or keywords"
              className="w-full text-sm sm:text-base border-none outline-none text-gray-700"
            />
          </div>

          {/* Location */}
          <div className="flex items-center bg-white border border-gray-300 
                        rounded-full px-3 py-2 w-full sm:flex-1 shadow-sm">
            <img
              src={assets.location_icon}
              alt="Location"
              className="w-5 h-5 mr-2 opacity-60"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full text-sm sm:text-base border-none outline-none text-gray-700"
            />
          </div>

          {/* Search Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white 
                           px-4 sm:px-8 py-2 sm:py-3 
                           rounded-full w-full sm:w-auto 
                           transition-colors text-sm sm:text-base">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;