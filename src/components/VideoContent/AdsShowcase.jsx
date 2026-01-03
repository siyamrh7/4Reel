import React, { useState, useEffect } from 'react';

export default function AdsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551135049-8a33b5883817?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % images.length;
      visible.push(images[index]);
    }
    return visible;
  };

  return (
    <div className="min-h-auto bg-white py-12 px-4 md:py-20">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-[40px] md:text-[64px] lg:text-[104px] font-medium text-[#171719] font-[Degular Demo] leading-tight mb-8">
            You: need wildly
            <br />
            entertaining ads
          </h1>

          {/* Mobile: Show 3 images */}
          <div className="md:hidden flex gap-3 justify-center overflow-hidden mb-8">
            {getVisibleImages().slice(0, 3).map((img, idx) => (
              <div
                key={idx}
                className="w-64 h-37 flex-shrink-0 rounded overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Ad example ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Desktop: Show 5 images */}
          <div className="hidden md:flex gap-4 justify-center overflow-hidden mb-12">
            {getVisibleImages().map((img, idx) => (
              <div
                key={idx}
                className="w-64 h-37 flex-shrink-0 rounded overflow-hidden transition-transform duration-500 hover:scale-105"
              >
                <img
                  src={img}
                  alt={`Ad example ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <h2 className="text-[40px] md:text-[64px] lg:text-[104px] font-medium text-[#171719] font-[Degular Demo] leading-tight mb-8">
            We: make wildly
            <br />
            entertaining ads.
          </h2>
        </div>
      </div>
    </div>
  );
}