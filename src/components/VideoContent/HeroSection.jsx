import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="max-w-[1440px] mx-auto relative min-h-[600px] bg-[#171719] text-white overflow-hidden">
      
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image 
          src="/home/socialbg.png"
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
          src="/home/socialbgm.png"
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

           <div className="flex gap-6">
             {/* Headline — FIXED */}
            <h1 className="
              font-degular font-medium 
              text-[40px] md:text-[60px] lg:text-[80px]
              leading-[44px] md:leading-[62px] lg:leading-[72px]
              tracking-[-0.02em]
            ">
             VIDEO CONTENT 
              <br />
             THAT CONNECTS
            </h1>
              <Image
                src="/icon/a.png"
                   alt="Unsplash Image"
                   width={150}
                   height={90}
                   className='hidden md:block'
                 />
           </div>
            <p className="text-base md:text-2xl  leading-relaxed max-w-3xl">
              A good-looking video is not enough. What truly works is a clear story, smart pacing, and a strong emotional hook. That’s why every project starts with strategy—understanding your audience, your brand voice, and the message that moves people.
            </p>

            <Link
                 href="/contact"
                 className="w-full md:w-[213px] flex justify-center items-center bg-white text-black px-8 py-2 rounded-md font-medium hover:bg-gray-200 transition text-base"
             >
                  Let’s talk
         </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
