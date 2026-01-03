import React from 'react';

export default function BrandHeroSection() {
  return (
   <section className="relative w-full min-h-[528px] md:min-h-[804px]  overflow-hidden max-w-[1440px] mx-auto">
      
      {/* Desktop Background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/development/bgd.png')",
        }}
      />

      {/* Mobile Background */}
      <div
        className="md:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/development/bgm.png')",
        }}
      />

     

      {/* Content */}
      <div className="relative z-10 flex flex-col items-end justify-end  md:items-center md:justify-center min-h-auto text-center mt-50 md:mt-0   px-4 md:px-8 lg:px-10 py-6 md:py-10">
        <h1 className="text-[32px] md:text-6xl lg:text-[72px] font-normal text-white leading-tight mb-6 max-w-5xl">
          Where your brand becomes
          <br />
          something you can click.
        </h1>

        <p className="text-base sm:text-base md:text-2xl text-gray-300 max-w-2xl">
          Transforming your identity into a seamless online experience.
        </p>
      </div>
    </section>
  );
}