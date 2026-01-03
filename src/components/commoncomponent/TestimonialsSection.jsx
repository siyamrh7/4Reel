import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Fleur Heyns',
      title: 'Co-founder & CEO at PROOF',
      image: '/about/img.png',
      quote: '"4Reel helped us bring our vision of data-backed storytelling to life in a novel, engaging and highly memorable way."',
      bgColor: 'bg-gray-200'
    },
    {
      id: 2,
      name: 'Alex Meek',
      title: 'Co-founder & President at MOXION POWER',
      image: '/about/img2.png',
      quote: '"Great partnership. We proudly showcase the results achieved together."',
      bgColor: 'bg-gradient-to-br from-yellow-500 to-orange-600'
    },
    {
      id: 3,
      name: 'Abdul Ovaice',
      title: 'Creative Director at OURA RING',
      image: '/about/img3.png',
      quote: '"They passionately drove OURA\'s brand strategy, and instead of the usual dip after launching a new website, it was the exact opposite. Numbers increased."',
      bgColor: 'bg-gray-200'
    }
  ];

  return (
    <div className="hidden md:block min-h-auto  bg-[#F1F1F1] px-4 py-10 lg:px-10 lg:py-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#50515B] text-base uppercase tracking-wider  ">
            CLIENTS SUCCESS STORIES
          </p>
          <h1 className="text-[32px] lg:text-[64px] font-medium text-black leading-[64px] font-[Degular Demo]">
  Our Clients Say It Best.<br />
  Want an Intro?
</h1>
          {/* <h2 className="text-[32px] lg:text-[64px] font-medium text-black">
           
          </h2> */}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xl">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg overflow-hidden flex flex-col"
            >
              {/* Image with colored background */}
              <div className={`${testimonial.bgColor} aspect-square flex items-end justify-center`}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="bg-white p-8 flex-grow flex flex-col font-[250px] text-[#50515B] text-xl">
                <div className="mb-4">
                  <h3 className="  mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="">
                    {testimonial.title}
                  </p>
                </div>
                
                <p className="  text-[#000000] ">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}