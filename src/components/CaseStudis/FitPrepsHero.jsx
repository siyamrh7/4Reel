'use client';

import Image from "next/image";
import React from "react";
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
  }
];

export default function FitPrepsHero() {
  
  return (
    <div className="relative max-w-[1440px] mx-auto overflow-hidden">
      
      {/* Background Image */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/home/bg2.png"
          alt="Fitpreps background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="hidden md:flex relative z-10 min-h-[390px] md:min-h-[600px] lg:min-h-[800px] flex flex-col justify-between px-6 md:px-12 lg:px-20 py-12">

        {/* Bottom Info Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mt-auto">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white drop-shadow-lg">
              Fitpreps – Healthy food for winners
            </h2>
            <p className="text-white/90 text-sm md:text-base drop-shadow">
              Small Description
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Development", "Design", "SEO"].map((item) => (
              <button
                key={item}
                className="px-6 py-2 md:px-8 md:py-3 border-2 border-white/50 rounded-full text-white text-sm md:text-base backdrop-blur-sm hover:bg-white/20 hover:border-white/70 transition-all shadow-lg"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Year Badge */}
        <div className="absolute bottom-24 md:bottom-32 right-4 md:right-12 lg:right-20 px-6 py-3 bg-white/30 backdrop-blur-md rounded-full text-white font-medium text-sm md:text-base border border-white/40 shadow-lg">
          2024
        </div>
      </div>


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
    </div>
  );
}
