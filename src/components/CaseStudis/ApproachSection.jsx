'use client';

import React from 'react';

export default function ApproachSection() {
  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8 text-gray-900">
            Approach
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 leading-relaxed max-w-2xl">
            We study the business from the inside so we can create design that looks strong and supports the goals of the company..
          </p>

          {/* Testimonial Card - Mobile */}
          <div className="bg-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
            <blockquote className="mb-6 sm:mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-900 leading-relaxed">
                "4Reel helped us bring our vision of data-backed storytelling to life in a novel, engaging and highly memorable way."
              </p>
            </blockquote>
            
            <div className="border-t border-blue-100 pt-4 sm:pt-6">
              <p className="text-base sm:text-lg font-medium text-gray-700">
                Fleur Heyns
              </p>
              <p className="text-sm sm:text-base text-gray-500 mt-1">
                Co-founder & CEO at PROOF
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column - Text */}
          <div>
            <h2 className="text-5xl xl:text-6xl font-light mb-8 text-gray-900 leading-tight">
              Approach
            </h2>
            
            <p className="text-xl xl:text-2xl text-gray-700 leading-relaxed">
              We study the business from the inside so we can create design that looks strong and supports the goals of the company..
            </p>
          </div>

          {/* Right Column - Testimonial Card */}
          <div className="bg-blue-50 rounded-3xl xl:rounded-[2rem] p-10 xl:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
            <blockquote className="mb-8 xl:mb-10">
              <p className="text-2xl xl:text-3xl text-gray-900 leading-relaxed font-light">
                "4Reel helped us bring our vision of data-backed storytelling to life in a novel, engaging and highly memorable way."
              </p>
            </blockquote>
            
            <div className="border-t border-blue-100 pt-6 xl:pt-8">
              <p className="text-lg xl:text-xl font-medium text-gray-700">
                Fleur Heyns
              </p>
              <p className="text-base xl:text-lg text-gray-500 mt-2">
                Co-founder & CEO at PROOF
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}