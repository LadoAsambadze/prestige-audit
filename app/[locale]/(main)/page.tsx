import HeroSection from "./_components/HeroSection";
import FAQSection from "./_components/FaqSection";

import ServicesSection from "./_components/ServicesSection";
import BlogSection from "./_components/BlogSection";
import AboutParallax from "./_components/AboutParallax";
import ClientssSection from "./_components/ClientsSection";
import PartnersSection from "./_components/PartnersSection";
import TeamSection from "./_components/TeamSection";
import VideoSection from "./_components/VideoSection";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <AboutParallax />
      <TeamSection />
      <ClientssSection />

      <FAQSection />
      <VideoSection />
    </div>
  );
}
