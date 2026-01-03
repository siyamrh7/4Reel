'use client';

import BrandLandingPage from "@/components/commoncomponent/BrandLandingPage";
import MarqueeSection from "@/components/commoncomponent/MarqueeSection";
import PortfolioShowcase from "@/components/commoncomponent/PortfolioShowcase";
import State from "@/components/home/Stats";
import FitPrepsHero from "@/components/CaseStudis/FitPrepsHero";
import ApproachSection from "@/components/CaseStudis/ApproachSection";
import PortfolioShowcase1 from "@/components/CaseStudis/PortfolioShowcase1";



export default function HomePage() {
  return (
    <>
      <State />
      < FitPrepsHero />
      <ApproachSection />
      <PortfolioShowcase />
      <PortfolioShowcase1 />
      <MarqueeSection />
      <BrandLandingPage/>
    </>
  );
}