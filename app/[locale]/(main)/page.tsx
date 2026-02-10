import HeroSection from "./_components/HeroSection";

import TestimonialsSection from "./_components/TestimonialSection";

import FAQSection from "./_components/FaqSection";
import TeamSection from "./_components/TeamSection";
import OurIdentity from "./_components/OurIdentity";
import ServicesSection from "./_components/ServicesSection";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <OurIdentity />
      <TeamSection />
      <FAQSection />
      <TestimonialsSection />
    </div>
  );
}
