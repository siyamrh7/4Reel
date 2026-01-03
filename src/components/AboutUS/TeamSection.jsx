import Image from 'next/image';
import React from 'react';

export default function TeamSection() {
  return (
    <div className="min-h-auto bg-gray-100">
      {/* Team Photo Section */}
      <div className="relative bg-gradient-to-b from-gray-200 to-gray-300 ">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative">
            {/* Team Image Placeholder */}
            <div className="bg-gradient-to-br from-gray-300 via-gray-200 to-white  overflow-hidden shadow-2xl">
              <img
                src="/about/bg1.png"
                alt="Team members"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative white platform effect */}
            <div className="absolute bottom-0 left-0 right-0 h-8 md:h-12 bg-gradient-to-t from-white/40 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative bg-gradient-to-br from-blue-100 via-purple-50 to-blue-50 px-4 py-12 md:py-16">
        <div className="max-w-[1013px] mx-auto text-center">
          {/* Large Purple Number */}
          <div className="mb-6 md:mb-8 flex justify-center">
             <Image
                  src="/about/logo.png"
                  alt="Hero Image"
                  width={225}
                  height={252}
                  className="object-contain w-auto h-auto max-w-full max-h-full"
                  
                />
          </div>

          {/* Description Text */}
          <p className="text-gray-700 text-xl md:text-2xl lg:text-[40px] leading-relaxed max-w-[1023px] mx-auto px-4">
            Our mix of experience and our way of working with care helps us build solid, long-term relationships with our clients and within the team.
          </p>
        </div>

        {/* Decorative gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 to-transparent pointer-events-none">
        </div>
      </div>
    </div>
  );
}