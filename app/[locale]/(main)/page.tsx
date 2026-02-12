import HeroSection from "./_components/HeroSection";
import FAQSection from "./_components/FaqSection";
import TeamSection from "./_components/TeamSection";
import OurIdentity from "./_components/OurHistory";
import ServicesSection from "./_components/ServicesSection";
import ReviewsSection from "./_components/ReviewsSection";
import PartnersSection from "./_components/PartnersSection";
import BlogSection from "./_components/BlogSection";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <OurIdentity />
      <PartnersSection />
      <TeamSection />
      <FAQSection />
      <ReviewsSection />
      <BlogSection />
    </div>
  );
}
