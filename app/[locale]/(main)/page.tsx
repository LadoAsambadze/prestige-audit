import HeroSection from "./_components/HeroSection";
import FAQSection from "./_components/FaqSection";
import TeamSection from "./_components/TeamSection";
import OurIdentity from "./_components/OurHistory";
import ServicesSection from "./_components/ServicesSection";
import ReviewsSection from "./_components/ReviewsSection";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <OurIdentity />
      <TeamSection />
      <FAQSection />
      <ReviewsSection />
    </div>
  );
}
