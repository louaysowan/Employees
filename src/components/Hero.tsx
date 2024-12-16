import React from 'react';
import { Users2 } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <Users2 className="h-16 w-16 text-white mx-auto mb-8" />
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Meet Our Amazing Team
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover the talented individuals who make our company thrive. Together, we're building something extraordinary.
          </p>
          <div className="mt-10">
            <a href="#employees" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              View Directory
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-16 bg-gray-100 transform skew-y-2 origin-bottom-right"></div>
    </div>
  );
}