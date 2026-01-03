'use client';

import VideoProductionLanding from "@/components/commoncomponent/VideoProductionLanding";
import SocialHeroSection from "@/components/SocialMedia/HeroSection";
import SocialMediaBenefits from "@/components/SocialMedia/SocialMediaBenefits";
import SocialCalendar from "@/components/SocialMedia/SocialCalendar";
import ProcessSection from "@/components/SocialMedia/ProcessSection";
import BrandLandingPage from "@/components/commoncomponent/BrandLandingPage";
import TestimonialsSection from "@/components/commoncomponent/TestimonialsSection";


export default function socialMedia() {
  return (
    <>
      <SocialHeroSection />
      {/* Other sections */}
      <SocialMediaBenefits />
      <SocialCalendar />
      <ProcessSection />
      <VideoProductionLanding />
      <TestimonialsSection />
      <BrandLandingPage/>
    </>
  );
}