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
      {/* Purple Gradient Section with Search - Reduced Height */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white 
                    py-6 sm:py-12 px-2 sm:px-4 text-center 
                    rounded-xl sm:mx-4 mx-2 mt-6 sm:mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">
              Over <span className="text-purple-200">10,000+</span> jobs available
            </h2>
            <p className="text-sm sm:text-lg text-purple-100 px-2 sm:px-4">
              Find your next career opportunity - search top positions and launch your future!
            </p>
          </div>

          {/* Search Bar Container - Reduced Bottom Margin */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full mb-6 sm:mb-8">
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
                             px-4 sm:px-8 py-2 sm:py-2.5 
                             rounded-full w-full sm:w-auto 
                             transition-all duration-200 text-sm sm:text-base shadow-md hover:shadow-lg
                             focus:outline-none focus:ring-2 focus:ring-purple-300">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Trusted Companies Section with Automatic Scrolling */}
      <div className="mt-10 sm:mt-12 px-4">
        <p className="text-sm sm:text-base text-gray-600 text-center mb-6">
          Trusted by leading companies worldwide
        </p>
        
        {/* Auto-Scrolling Container */}
        <div className="relative overflow-hidden w-full">
          <div className="logos-slide flex items-center space-x-8 sm:space-x-12 lg:space-x-16 py-4">
            {[...companies, ...companies, ...companies].map((logo, index) => (
              <img 
                key={index}
                src={logo}
                alt="Company logo"
                className="h-8 sm:h-10 lg:h-12 object-contain opacity-80 hover:opacity-100 
                         transition-opacity inline-block min-w-[100px] sm:min-w-[120px]"
              />
            ))}
          </div>
          
          {/* Gradient Fades */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        
        .logos-slide {
          display: flex;
          animation: scroll 30s linear infinite;
          white-space: nowrap;
          width: fit-content;
        }
        
        /* Prevent scrollbar from appearing */
        .overflow-hidden {
          overflow: hidden;
        }
        
        /* Adjust animation speed for different screen sizes */
        @media (min-width: 640px) {
          .logos-slide {
            animation-duration: 35s;
          }
        }
        
        @media (min-width: 1024px) {
          .logos-slide {
            animation-duration: 40s;
          }
        }
        
        /* Pause animation on hover */
        .logos-slide:hover {
          animation-play-state: paused;
        }
        
        /* Respect user's motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .logos-slide {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;