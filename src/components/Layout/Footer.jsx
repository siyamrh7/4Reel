import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#171719] px-4 md:px-10 lg:px-16 py-16 md:py-20 text-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-12 mb-12">
          {/* Logo and Newsletter */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo/Logof.png" 
                alt="4REEL Logo" 
                width={190} 
                height={58}
                className="h-15 w-auto"
              />
            </Link>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Get your insight</h3>
              <p className="border-[#FAFAFA] text-sm leading-relaxed">
                Sign up for expert tips on launching and scaling your B2B website with ease. Stay ahead with insights from Graft Agency.
              </p>
            </div>

             <div className="flex  bg-[#2A2B2F] py-1.5 rounded border border-[#50515B]">
              <input
                type="email"
                placeholder="Email adress"
                className="flex-1 px-4 py-2 bg-neutral-800   text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
              />
              <button className=" mr-1.5 flex justify-center border border-[#FAFAFA] items-center px-6 md:px-8 py-1.5 bg-white rounded text-black font-medium hover:bg-gray-100 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">
              By subscribing you agree to our{' '}
              <Link href="/privacy-policy" className="text-white underline hover:text-gray-300">
                Privacy Policy
              </Link>{' '}
              and provide consent to receive updates from our company.
            </p>
          </div>

           {/* Follow Section */}
          <div className="grid grid-cols-3 gap-5 lg:gap-10 flex-1 max-w-[511px]">
               {/* Follow Section */}
          <div className=" space-y-4">
            <h4 className="text-lg  mb-6">Follow</h4>
            <div className="space-y-3">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block border-[#FAFAFA] hover:text-white transition">
                Instagram
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block border-[#FAFAFA] hover:text-white transition">
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <div className="space-y-3">
              <Link href="/services/video-content" className="block border-[#FAFAFA] hover:text-white transition">
                Video Content
              </Link>
              <Link href="/services/social-media" className="block border-[#FAFAFA] hover:text-white transition">
                Social Media Content Planner
              </Link>
              <Link href="/services/web-design" className="block border-[#FAFAFA] hover:text-white transition">
                Web Design
              </Link>
              <Link href="/services/development" className="block border-[#FAFAFA] hover:text-white transition">
                Development
              </Link>
            </div>
          </div>

          {/* Case Studies & Additional Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-6">Case studies</h4>
            <div className="space-y-3">
              <Link href="/about" className="block border-[#FAFAFA] hover:text-white transition">
                About
              </Link>
              <Link href="/contact" className="block border-[#FAFAFA] hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between gap-12 lg:gap-16 mb-16">
          {/* Newsletter Section - Takes full width on mobile, 2 columns on desktop */}
          <div className="max-w-[380px] space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo/Logof.png" 
                alt="4REEL Logo" 
                width={125} 
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-white">Get your insight</h3>
              <p className="text-sm font-[300] text-[#D7D8E0]">
                Sign up for expert tips on launching and scaling your B2B website with ease. Stay ahead with insights from Graft Agency.
              </p>
            </div>

            <div className="flex  bg-[#2A2B2F] py-1.5 rounded border border-[#50515B]">
              <input
                type="email"
                placeholder="Email adress"
                className="flex-1 px-4 py-2 bg-neutral-800   text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
              />
              <button className=" mr-1.5 flex justify-center border border-[#FAFAFA] items-center px-6 md:px-8 py-1.5 bg-white rounded text-black font-medium hover:bg-gray-100 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <p className="text-[12px] font-[300] text-[#D7D8E0]">
              By subscribing you agree to our{' '}
              <Link href="/privacy-policy" className="text-white font-medium ">
                Privacy Policy
              </Link>{' '}
              and provide consent to receive updates from our company.
            </p>
          </div>

          {/* Follow Section */}
          <div className="grid grid-cols-3 gap-5 lg:gap-10 flex-1 max-w-[511px]">
               {/* Follow Section */}
          <div className=" space-y-4">
            <h4 className="text-lg  mb-6">Follow</h4>
            <div className="space-y-3">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block border-[#FAFAFA] hover:text-white transition">
                Instagram
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block border-[#FAFAFA] hover:text-white transition">
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <div className="space-y-3">
              <Link href="/services/video-content" className="block border-[#FAFAFA] hover:text-white transition">
                Video Content
              </Link>
              <Link href="/services/social-media" className="block border-[#FAFAFA] hover:text-white transition">
                Social Media Content Planner
              </Link>
              <Link href="/services/web-design" className="block border-[#FAFAFA] hover:text-white transition">
                Web Design
              </Link>
              <Link href="/services/development" className="block border-[#FAFAFA] hover:text-white transition">
                Development
              </Link>
            </div>
          </div>

          {/* Case Studies & Additional Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-6">Case studies</h4>
            <div className="space-y-3">
              <Link href="/about" className="block border-[#FAFAFA] hover:text-white transition">
                About
              </Link>
              <Link href="/contact" className="block border-[#FAFAFA] hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
          </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#CCCCCC]">
          <p className="text-[#ffffff] text-sm">
            4Reel © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}