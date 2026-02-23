import ContactContentSection from "./_components/ContactContentSection";
import ContactHeroSection from "./_components/ContactHeroSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <ContactHeroSection />
      <div className="relative z-20 -mt-20 bg-[#f3f5f4] rounded-t-[60px] md:rounded-t-[80px] shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)]">
        <ContactContentSection />
      </div>
    </div>
  );
}
