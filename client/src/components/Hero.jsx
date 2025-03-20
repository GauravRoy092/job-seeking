import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  const companies = [
    assets.microsoft_logo,
    assets.walmart_logo,
    assets.accenture_logo,
    assets.samsung_logo,
    assets.amazon_logo,
    assets.adobe_logo
  ];

  return (
    <div className="relative">
      {/* Purple Gradient Section with Search */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white 
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

          {/* Search Bar Container - Keep this in purple section */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full mb-12 sm:mb-16">
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

            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white 
                             px-4 sm:px-8 py-2 sm:py-3 
                             rounded-full w-full sm:w-auto 
                             transition-all duration-200 text-sm sm:text-base shadow-md hover:shadow-lg
                             focus:outline-none focus:ring-2 focus:ring-purple-300">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Trusted Companies Section - Outside Purple Area */}
      <div className="mt-12 sm:mt-16 px-4">
        <p className="text-sm sm:text-base text-gray-600 text-center mb-6">
          Trusted by leading companies worldwide
        </p>
        
        {/* Scrolling Logos Container */}
        <div className="relative overflow-hidden w-full">
          <div className="animate-scroll whitespace-nowrap flex items-center space-x-12 sm:space-x-16 py-4">
            {[...companies, ...companies].map((logo, index) => (
              <img 
                key={index}
                src={logo}
                alt="Company logo"
                className="h-8 sm:h-10 object-contain opacity-80 hover:opacity-100 transition-opacity inline-block"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: inline-block;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
            overflow-x: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;