'use client';

import BrandLandingPage from "@/components/commoncomponent/BrandLandingPage";
import PortfolioShowcase from "@/components/commoncomponent/PortfolioShowcase";
import TestimonialSection from "@/components/commoncomponent/TestimonialSection";
import BrandHeroSection from "@/components/Development/BrandHeroSection";
import HeroSection from "@/components/Development/HeroSection";
import MediaBenefits from "@/components/Development/MediaBenefits";


export default function socialMedia() {
  return (
    <>
      <HeroSection />
      {/* Other sections */}
      <MediaBenefits />
      <PortfolioShowcase />
      <TestimonialSection />
      <BrandHeroSection />
       <BrandLandingPage/>
    </>
  );
}