import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className=" max-w-[1440px] mx-auto relative min-h-auto bg-black text-white overflow-hidden">
      
      {/* Desktop Background */}
      <div className="hidden md:block absolute  top-0 left-0 inset-0 z-0">
        <Image 
          src="/home/bg1.png"
          alt="Background"
          fill
          className="object-cover w-full h-full"
          priority
          quality={90}
        />
      </div>

      {/* Mobile Background */}
      <div className="md:hidden">
        <Image 
          src="/home/bgimg.png"
          alt="Background"
          width={400}
          height={400}
          className="object-cover w-full h-[300px]"
      
        />
      </div>

      {/* Content */}
      <div className="relative z-20 px-4 md:px-10 pt-12 md:pt-20 pb-12">
        <div className="max-w-[1440px] mx-auto items-center">

          {/* Left Section */}
          <div className="space-y-8">

            {/* Headline — FIXED */}
            <h1 className="
              font-degular font-medium 
              text-[40px] md:text-[60px] lg:text-[80px]
              leading-[44px] md:leading-[62px] lg:leading-[72px]
              tracking-[-0.02em]
            ">
              We don't just make content.
              <br />
              We make noise.
            </h1>

            <p className="text-base md:text-2xl  leading-relaxed max-w-3xl">
              4REEL is where visuals meet purpose — a creative crew crafting videos,
              social content, and websites that make people stop, feel, and remember.
            </p>

            <Link 
              href="/contact"
              className="w-full md:w-[160px] flex justify-center items-center  bg-white text-black px-8 py-2 rounded-[5px] font-medium hover:bg-gray-200 transition text-base"
            >
              Work with us
            </Link>

          {/* Video Preview */}
<div className=" hidden md:block relative w-[328px] h-[188px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden mt-12">
  
  <Image
    src="/home/vdimg.png"
    alt="Video Preview"
    fill
    className="object-cover"
  />

  {/* Play Button Overlay */}
  <div className="absolute inset-0 flex items-center justify-center">
    <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition">
      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-white border-b-8 border-b-transparent ml-1"></div>
    </button>
  </div>

</div>

          </div>
        </div>
      </div>
    </section>
  );
}
