import HeroSection from "./_components/HeroSection";
import FAQSection from "./_components/FaqSection";
import TeamSection from "./_components/TeamSection";
import OurIdentity from "./_components/OurHistory";
import ServicesSection from "./_components/ServicesSection";
import ReviewsSection from "./_components/ReviewsSection";
import PartnersSection from "./_components/PartnersSection";
import BlogSection from "./_components/BlogSection";
import AboutParallax from "./_components/AboutParallax";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutParallax />
      <TeamSection />
      <PartnersSection />
      <OurIdentity />
      <FAQSection />
      <ReviewsSection />
      <BlogSection />
    </div>
  );
}
