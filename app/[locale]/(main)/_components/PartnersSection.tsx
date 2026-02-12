"use client";

import React from "react";
import { Card } from "@/components/ui/card";

// Partner type
type Partner = {
  name: string;
  logo?: string;
  type?: "image" | "text";
};

const partnersRow1: Partner[] = [
  { name: "Hilton", logo: "./partners/Hilton-logo.png" },
  { name: "Le Meridien", logo: "./partners/Le-meridien.png" },
  { name: "Sheraton", logo: "./partners/Sheraton.png" },
  { name: "Eclipse", logo: "./partners/Eclipse.png" },
];

const partnersRow2: Partner[] = [
  { name: "Rogo", logo: "./partners/Rogo.jpg" },
  { name: "BAU Hospital", type: "text" },
  { name: "Adjara Textile", type: "text" },
  { name: "BTM Textile", type: "text" },
  
];

const LogoCard = ({ logo, name, type }: Partner) => {
  const isTextLogo = type === "text" || !logo;

  return (
    <Card className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-[100px] bg-white border-none rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300 mx-3 p-6 group cursor-default">
      {isTextLogo ? (
        /* Changed text-gray-800 to text-blue-600 for initial state */
        <span className="text-xl font-bold text-black transition-colors duration-500">
          {name}
        </span>
      ) : (
        <img
          src={logo}
          alt={name}
          className="h-20 w-20  transition-transform duration-500 group-hover:scale-110"
        />
      )}
    </Card>
  );
};

export default function PartnersSection() {
  return (
    <section className="relative z-10 bg-[#f3f5f4] pt-24 pb-28 px-6 overflow-hidden">
      <style jsx global>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          animation: scrollLeft 35s linear infinite;
        }
        .animate-marquee-right {
          animation: scrollRight 35s linear infinite;
        }
        /* Removed the pause-on-hover logic entirely to keep it infinite */
      `}</style>

      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Our <span className="text-blue-600">Partners</span>
        </h2>
      </div>

      {/* Removed 'pause-hover-container' to ensure continuous movement */}
      <div className="relative space-y-6">
        {/* Row 1: Left to Right movement */}
        <div className="flex overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f3f5f4] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f3f5f4] to-transparent z-10" />

          <div className="flex animate-marquee-left whitespace-nowrap">
            {/* Doubling or Tripling items to ensure seamless infinite loop */}
            {[...partnersRow1, ...partnersRow1, ...partnersRow1].map((p, i) => (
              <LogoCard key={`r1-${i}`} {...p} />
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left movement */}
        <div className="flex overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f3f5f4] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f3f5f4] to-transparent z-10" />

          <div className="flex animate-marquee-right whitespace-nowrap">
            {[...partnersRow2, ...partnersRow2, ...partnersRow2].map((p, i) => (
              <LogoCard key={`r2-${i}`} {...p} />
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
}
