import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 to-indigo-900 text-white 
                    py-8 sm:py-20 px-2 sm:px-4 text-center 
                    rounded-xl sm:mx-4 mx-2 mt-6 sm:mt-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Over <span className="text-purple-200">10,000+</span> jobs available
          </h2>
          <p className="text-sm sm:text-lg text-purple-100 px-2 sm:px-4">
            Find your next career opportunity - search top positions and launch your future!
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          {/* Job Title or Keywords */}
          <div className="flex items-center bg-white/95 border border-purple-200 
                        rounded-full px-3 py-2 w-full sm:flex-1 shadow-sm backdrop-blur-sm">
            <img
              src={assets.search_icon}
              alt="Search"
              className="w-5 h-5 mr-2 opacity-80 text-purple-600"
            />
            <input
              type="text"
              placeholder="Job title or keywords"
              className="w-full text-sm sm:text-base border-none outline-none text-gray-800 placeholder-gray-500/90"
            />
          </div>

          {/* Location */}
          <div className="flex items-center bg-white/95 border border-purple-200 
                        rounded-full px-3 py-2 w-full sm:flex-1 shadow-sm backdrop-blur-sm">
            <img
              src={assets.location_icon}
              alt="Location"
              className="w-5 h-5 mr-2 opacity-80 text-purple-600"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full text-sm sm:text-base border-none outline-none text-gray-800 placeholder-gray-500/90"
            />
          </div>

          {/* Search Button */}
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white 
                           px-4 sm:px-8 py-2 sm:py-3 
                           rounded-full w-full sm:w-auto 
                           transition-all duration-200 text-sm sm:text-base shadow-md hover:shadow-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;