import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "John Evans",
    role: "Marketing Lead",
    company: "Client's Logo",
    quote: "Dream team! Thanks for all the support helping us hit our incredibly ambitious timeline and vision for the launch.",
    videoThumbnail: "/home/videofrm.png",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Product Manager",
    company: "Tech Startup Inc",
    quote: "Outstanding collaboration and results. They understood our vision perfectly and delivered beyond expectations.",
    videoThumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CEO",
    company: "Innovation Labs",
    quote: "Professional, creative, and always on time. Working with this team has been a game-changer for our business.",
    videoThumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative bg-white overflow-hidden max-w-[1440px] mx-auto">
      {/* Purple decorative background element - bottom right */}
      <div 
        className="absolute bottom-0 right-0 w-full h-[600px] pointer-events-none"
        style={{
          backgroundImage: 'url(/home/sidelogo.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-10 lg:py-16">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-sm lg:text-base text-[#50515B] uppercase tracking-wider mb-3 lg:mb-4 font-normal">
            CLIENTS SUCCESS STORIES
          </p>
          <h2 className="text-[32px] lg:text-[64px] xl:text-[64px] font-medium text-[#171719] leading-tight font-[Degular Demo]">
            Hear from those who<br />have worked with us
          </h2>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden ">
       <div className="flex gap-3 justify-center items-center mb-3">
  
             {/* Client Info */}
          <div className="mb-2">
            <p className="text-sm text-gray-900 mb-4">{currentTestimonial.company}</p>
            <h3 className="text-base font-normal text-gray-900 mb-0.5">
              {currentTestimonial.name}
            </h3>
            <p className="text-sm text-gray-500">{currentTestimonial.role}</p>
          </div>



          {/* Video Thumbnail with background image */}
          <div 
            className="relative w-full max-w-[228px] aspect-[3/4] rounded-2xl overflow-hidden mb-6"
            style={{
              backgroundImage: `url(${currentTestimonial.videoThumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Play Button */}
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <Play className="w-5 h-5 text-gray-900 ml-0.5" fill="currentColor" />
            </button>
          </div>
</div>

        
          {/* Quote */}
          <div className="mb-8">
            <div className="text-7xl font-bold text-gray-900 mb-4 leading-none italic"><Image
              src="/home/icon1.png"
                alt="Banner Image"
                  width={48}
                height={35}
            /></div>
            <p className="text-[24px] text-[#171719] leading-relaxed">
              {currentTestimonial.quote}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-3">
            <button
              onClick={handlePrevious}
              className="w-12 h-8 rounded bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-gray-900" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-8 rounded bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5 text-gray-900" />
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-16 xl:gap-20 lg:items-start">
          {/* Left: Video with background image */}
          <div 
            className="relative w-full max-w-[360px] col-span-4 aspect-[3/4] rounded-3xl overflow-hidden shadow-xl"
            style={{
              backgroundImage: `url(${currentTestimonial.videoThumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Play Button */}
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-gray-900 ml-0.5" fill="currentColor" />
            </button>
          </div>

          {/* Right: Content */}
          <div className="pt-0 col-span-7">
            {/* Quote */}
            <div className="mb-12">
              <div className="text-8xl font-bold text-gray-900 mb-6 leading-none italic"><Image
      src="/home/icon1.png"
      alt="Banner Image"
      width={48}
      height={35}
    /></div>
              <p className="text-2xl xl:text-[28px] text-gray-900 leading-relaxed font-normal">
                {currentTestimonial.quote}
              </p>
            </div>

            {/* Client Info */}
            <div className="mb-12 border-l-2 border-gray-300 pl-6">
              <p className="text-sm text-gray-900 mb-4 font-normal">{currentTestimonial.company}</p>
              <h3 className="text-lg font-normal text-gray-900 mb-1">
                {currentTestimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{currentTestimonial.role}</p>
            </div>

            {/* Navigation */}
            <div className="flex gap-4">
              <button
                onClick={handlePrevious}
                className="w-12 h-8 rounded bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                <ChevronLeft className="w-7 h-4 text-gray-900" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-8 rounded bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                <ChevronRight className="w-5 h-5 text-gray-900" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}