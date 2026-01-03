'use client';

import AboutHero from "@/components/AboutUS/AboutHero";
import TeamSection from "@/components/AboutUS/TeamSection";
import TeamSection1 from "@/components/AboutUS/TeamSection1";
import TestimonialsSection from "@/components/commoncomponent/TestimonialsSection";
import BrandLandingPage from "@/components/commoncomponent/BrandLandingPage";
import MarqueeSection from "@/components/commoncomponent/MarqueeSection";


export default function AboutUs() {
  return (
    <>
      <AboutHero/>
      {/* Other sections */}
      <TeamSection />
      <TeamSection1 />
      <MarqueeSection />
      <TestimonialsSection />
      <BrandLandingPage/>
     
    </>
  );
}