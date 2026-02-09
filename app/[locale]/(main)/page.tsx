import HeroSection from "./_components/HeroSection";

import TestimonialsSection from "./_components/TestimonialSection";

import FAQSection from "./_components/FaqSection";
import TeamSection from "./_components/TeamSection";
import OurIdentity from "./_components/OurIdentity";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <OurIdentity />

      <TestimonialsSection />
      <FAQSection />
      <TeamSection />
    </div>
  );
}
