import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function VideoProductionLanding() {
  return (
    <div className="min-h-auto bg-[#171719] text-white max-w-[1440px] mx-auto">
      {/* Hero Section */}
      <div className=" px-4 md:px-10 py-4 md:py-10">
        <div className="mb-8">
          <h1 className="text-[40px] md:text-[64px] font-medium font-[Degular Demo] ">
            OUR APPROACH
          </h1>
          <p className="text-2xl md:text-[40px] text-[#FFFFFF]">
            What makes our video content strategy unique
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Video 1 - Interview */}
          <div className="hidden md:block relative aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=600&fit=crop" 
              alt="Interview scene" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Video 2 - Flag Scene */}
          <div className="hidden md:block relative aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=600&fit=crop" 
              alt="Flag production" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Video 3 - Urban Night */}
          <div className="hidden md:block relative aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=600&fit=crop" 
              alt="Urban scene" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Video 4 - Ski Jump with Play Button */}
          <div className="relative aspect-[3/4] bg-gradient-to-b from-cyan-500 to-blue-600 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop" 
              alt="Ski jump" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Play className="w-7 h-7 text-black ml-1" fill="black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}