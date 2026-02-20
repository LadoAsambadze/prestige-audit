import HeroSection from "./_components/HeroSection";
import ServicesSection from "./_components/ServicesSection";
import AboutParallax from "./_components/AboutParallax";
import ClientssSection from "./_components/ClientsSection";
import PartnersSection from "./_components/PartnersSection";
import TeamSection from "./_components/TeamSection";
import VideoSection from "./_components/VideoSection";
import AcademyPage from "../academy/page";
import AcademySection from "./_components/AcademySection";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <AboutParallax />
      <TeamSection />
      <ClientssSection />
      <AcademySection />
      <VideoSection />
    </main>
  );
}
