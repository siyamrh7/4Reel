import React, { useEffect, useState } from 'react';

const projects = [
  {
    id: 1,
    title: "FITPREPS",
    name: "Fitpreps",
    subtitle: "Healthy food for winners",
    description: "Small Description",
    tags: ["Development", "Design"],
    year: "2024",
    bgColor: "bg-orange-500",
    textColor: "text-white",
    image: "./home/img2.png"
  },
  {
    id: 2,
    title: "MOISE",
    name: "Moise",
    subtitle: "Premium baby care products",
    description: "Small Description",
    tags: ["Development", "Design"],
    year: "2024",
    bgColor: "bg-gray-200",
    textColor: "text-white",
    image: "./home/img1.png"
  }
];

export default function PortfolioShowcase() {
const [hoveredSection, setHoveredSection] = useState(null);
  return (
    <div className="min-h-auto bg-[#171719] max-w-[1440px] mx-auto">
     {/* Mobile Layout - Stacked vertically */}
      <div className="lg:hidden">
        {projects.map((project) => (
          <section 
            key={project.id}
            className={`max-h-[250px] ${project.bgColor} relative overflow-hidden`}
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
            
            {/* Content Container */}
            <div className="relative h-full min-h-[250px] flex flex-col justify-between p-4 sm:p-4">
              
              {/* Top spacer */}
              <div className="flex-1"></div>
              
              {/* Bottom Content */}
              <div className="space-y-4">
                <div className="flex items-end justify-between gap-4">
                  <h2 className={`text-[24px] font-medium ${project.textColor}`}>
                    {project.name}
                  </h2>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-end">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-4 py-1.5 rounded-full border ${
                          project.textColor === 'text-white' 
                            ? 'border-white/60 text-white bg-white/10' 
                            : 'border-gray-900/40 text-gray-900 bg-white/20'
                        } text-sm font-medium backdrop-blur-sm`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Desktop Layout - Side by side */}
       <div className="hidden lg:block">
        <div className="min-h-[800px] flex max-w-[1440px] mx-auto overflow-hidden">
          {/* Fitpreps - Left Side */}
          <section 
            className={`bg-orange-500 relative overflow-hidden flex flex-col justify-between p-12 xl:p-16 transition-all duration-700 ease-in-out cursor-pointer ${
              hoveredSection === 'moise' ? 'w-[15%]' : 'w-[85%]'
            }`}
            onMouseEnter={() => setHoveredSection('fitpreps')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* Large Title - Centered */}
            <div className={`flex-1 flex items-center justify-center transition-opacity duration-500 ${
              hoveredSection === 'fitpreps' ? 'opacity-0' : 'opacity-100'
            }`}>
            </div>
            {/* Bottom Content */}
            <div className={`relative z-10 flex items-end justify-between transition-opacity duration-500 ${
              hoveredSection === 'moise' ? 'opacity-0' : 'opacity-100'
            }`}>
              {/* Left: Name */}
              <div>
                <h2 className="text-3xl xl:text-4xl font-semibold text-white mb-2">
                  Fitpreps - Healthy food for winners
                </h2>
                <p className="text-lg text-white/80">Small Description</p>
              </div>

              {/* Right: Tags and Year */}
              <div className="flex flex-col items-end gap-4">
                <div className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-lg font-semibold">
                  2024
                </div>
                <div className="flex flex-wrap gap-3 justify-end">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-5 py-2 rounded-full border-2 border-white/40 text-white text-sm font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Background Image */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url(${projects[0].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

          </section>

          {/* Moise - Right Side */}
          <section 
            className={`bg-gray-200 relative overflow-hidden flex flex-col justify-between p-12 xl:p-16 transition-all duration-700 ease-in-out cursor-pointer ${
              hoveredSection === 'fitpreps' ? 'w-[15%]' : 'w-[85%]'
            }`}
            onMouseEnter={() => setHoveredSection('moise')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* Large Title - Centered */}
            <div className={`flex-1 flex items-center justify-center transition-opacity duration-500 ${
              hoveredSection === 'fitpreps' ? 'opacity-0' : 'opacity-100'
            }`}>
            </div>

            {/* Bottom Content */}
            <div className={`relative z-10 flex items-end justify-between transition-opacity duration-500 ${
              hoveredSection === 'fitpreps' ? 'opacity-0' : 'opacity-100'
            }`}>
              {/* Left: Name */}
              <div>
                <h2 className="text-3xl xl:text-4xl font-semibold text-gray-900 mb-2">
                  Moise - Premium baby care products
                </h2>
                <p className="text-lg text-gray-700">Small Description</p>
              </div>

              {/* Right: Tags */}
              <div className="flex flex-wrap gap-3 justify-end">
                {projects[1].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2 rounded-full border-2 border-gray-900/30 text-gray-900 text-sm font-medium backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Background Image - More visible */}
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `url(${projects[1].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </section>
        </div>
      </div>
    </div>
  );
} 