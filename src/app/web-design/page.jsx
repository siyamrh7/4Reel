'use client';


import BrandLandingPage from "@/components/commoncomponent/BrandLandingPage";
import PortfolioShowcase from "@/components/commoncomponent/PortfolioShowcase";
import TestimonialSection from "@/components/commoncomponent/TestimonialSection";
import MediaBenefits from "@/components/WebDesign/MediaBenefits";
import HeroSection from "@/components/WebDesign/HeroSection";
import HeroSection2 from "@/components/WebDesign/HeroSection2";


export default function socialMedia() {
  return (
    <>
      <HeroSection />
      {/* Other sections */}
      <MediaBenefits />
      <PortfolioShowcase />
      <TestimonialSection />
      <HeroSection2 />
      <BrandLandingPage/>
    </>
  );
}