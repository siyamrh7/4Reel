import React from 'react';

export default function AboutHero() {
  const tags = [
    'Strategic thinking',
    'Creative vision',
    'Business perspective'
  ];

  return (
    <div className="min-h-auto bg-black max-w-[1440px] mx-auto overflow-hidden">
      {/* Mobile Layout */}
      <div className=" bg-black text-white px-4 md:px-10 py-10 md:py-12 ">
        <h2 className="text-[40px] md:text-[80px] font-light font-[Degular Demo]">About</h2>
        
      <div className="block md:flex gap-10 items-center">
          <div className="flex flex-wrap gap-3 mb-8 w-full md:w-1/2 mt-6 md:mt-25">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-6 py-2.5 border border-white rounded-full text-sm font-light hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer font-[Proxima Nova] text-base"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-2xl md:text-[32px] leading-relaxed font-light w-full md:w-1/2">
          Our fast and focused team gives each project the care it needs, bringing work that feels clear, strong, and motivating.
        </p>
      </div>
      </div>
    </div>
  );
}