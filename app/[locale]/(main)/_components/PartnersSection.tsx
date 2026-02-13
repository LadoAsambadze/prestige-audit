"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
    >
      <Card className="flex items-center my-2 justify-center min-w-[180px] md:min-w-[220px] h-[100px] bg-white border-none rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300 mx-3 p-6 group cursor-default">
        {isTextLogo ? (
          <motion.span
            className="text-xl font-bold text-black transition-colors duration-500"
            whileHover={{
              scale: 1.1,
              color: "#2563eb",
              transition: { duration: 0.3 },
            }}
          >
            {name}
          </motion.span>
        ) : (
          <motion.img
            src={logo}
            alt={name}
            className="h-20 w-20 transition-transform duration-500"
            whileHover={{
              scale: 1.15,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.4 },
            }}
          />
        )}
      </Card>
    </motion.div>
  );
};

export default function PartnersSection() {
  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Marquee row variants - fade in and slide
  const marqueeRowVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="relative z-10 bg-[#f3f5f4] py-16 px-6 overflow-hidden">
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

      {/* Header with animations */}
      <motion.div
        className="max-w-7xl mx-auto mb-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headerVariants}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <motion.div
            className="w-8 h-0.5 bg-blue-600"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          />
          <span className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Trusted By
          </span>
          <motion.div
            className="w-8 h-0.5 bg-blue-600"
            initial={{ scaleX: 0, originX: 1 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Our <span className="text-blue-600">Partners</span>
        </h2>
      </motion.div>

      {/* Marquee rows with staggered entrance */}
      <motion.div
        className="relative space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Row 1: Left to Right movement */}
        <motion.div
          className="flex overflow-hidden relative"
          variants={marqueeRowVariants}
        >
          <motion.div
            className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f3f5f4] to-transparent z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f3f5f4] to-transparent z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <div className="flex animate-marquee-left whitespace-nowrap">
            {[...partnersRow1, ...partnersRow1, ...partnersRow1].map((p, i) => (
              <LogoCard key={`r1-${i}`} {...p} />
            ))}
          </div>
        </motion.div>

        {/* Row 2: Right to Left movement */}
        <motion.div
          className="flex overflow-hidden relative"
          variants={marqueeRowVariants}
        >
          <motion.div
            className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f3f5f4] to-transparent z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f3f5f4] to-transparent z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <div className="flex animate-marquee-right whitespace-nowrap">
            {[...partnersRow2, ...partnersRow2, ...partnersRow2].map((p, i) => (
              <LogoCard key={`r2-${i}`} {...p} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
