'use client';


import HeroSection from "@/components/VideoContent/HeroSection";
import ProcessSection from "@/components/VideoContent/ProcessSection";
import BrandLandingPage from "@/components/commoncomponent/BrandLandingPage";
import TestimonialsSection from "@/components/commoncomponent/TestimonialsSection";
import MediaBenefits from "@/components/VideoContent/MediaBenefits";
import PortfolioShowcase from "@/components/commoncomponent/PortfolioShowcase";
import AdsShowcase from "@/components/VideoContent/AdsShowcase";


export default function VideoContent() {
  return (
    <>
      <HeroSection />
      {/* Other sections */}
      <MediaBenefits />
      <PortfolioShowcase />
      <ProcessSection />
      <AdsShowcase />
      <TestimonialsSection />
      <BrandLandingPage/>
    </>
  );
}