import React from "react";

import HeroSection from "./_components/HeroSection";
import ServicesSection from "./_components/ServicesSection";
import TestimonialsSection from "./_components/TestimonialSection";

import FAQSection from "./_components/FaqSection";
import TeamSection from "./_components/TeamSection";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <TeamSection />
    </div>
  );
}
