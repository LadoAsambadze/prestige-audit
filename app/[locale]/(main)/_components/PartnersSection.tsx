"use client";

import React from "react";
import { Card } from "@/components/ui/card";

// Using placeholder logo URLs - you can replace these with your actual partner SVGs
const partnersRow1 = [
  {
    name: "Company 1",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Company 2",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Company 3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Company 4",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Company 5",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
  },
];

const partnersRow2 = [
  {
    name: "Company 6",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Company 7",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Company 8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
  },
  {
    name: "Company 9",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_2023.svg",
  },
  {
    name: "Company 10",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
];

const LogoCard = ({ logo, name }: { logo: string; name: string }) => (
  <Card className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-[100px] bg-white border-none rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300 mx-3 p-6 group">
    <img
      src={logo}
      alt={name}
      className="h-8 md:h-10 w-auto opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
    />
  </Card>
);

export default function PartnersSection() {
  return (
    <section className="relative z-10  bg-[#f3f5f4]   pt-24 pb-28 px-6 overflow-hidden  ">
      {/* Animation Styles */}
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
      `}</style>

      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Our <span className="text-blue-600">Partners</span>
        </h2>
      </div>

      <div className="relative space-y-6 pause-on-hover">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden relative">
          {/* Edge Fades for smooth appearance */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f3f5f4] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f3f5f4] to-transparent z-10" />

          <div className="flex animate-marquee-left whitespace-nowrap">
            {[...partnersRow1, ...partnersRow1, ...partnersRow1].map((p, i) => (
              <LogoCard key={`r1-${i}`} {...p} />
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden relative">
          <div className="flex animate-marquee-right whitespace-nowrap">
            {[...partnersRow2, ...partnersRow2, ...partnersRow2].map((p, i) => (
              <LogoCard key={`r2-${i}`} {...p} />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Light Blob (Matching your theme) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-400/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
