'use client';

import BrandLandingPage from "@/components/commoncomponent/BrandLandingPage";
import MarqueeSection from "@/components/commoncomponent/MarqueeSection";
import Approach from "@/components/home/Approach";
import ClientLogos from "@/components/home/ClientLogos";
import HeroSection from "@/components/home/HeroSection";
import PortfolioShowcase from "@/components/commoncomponent/PortfolioShowcase";
import ProcessSection from "@/components/home/ProcessSection";
import Service from "@/components/home/Service";
import State from "@/components/home/Stats";
import TestimonialSection from "@/components/commoncomponent/TestimonialSection";
import VideoProductionLanding from "@/components/commoncomponent/VideoProductionLanding";



export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Other sections */}
      <ClientLogos />
      <Service />
      <State />
      <PortfolioShowcase />
      <TestimonialSection />
      <VideoProductionLanding />
      <ProcessSection />
      <Approach />
      <MarqueeSection />
      <BrandLandingPage/>
    </>
  );
}