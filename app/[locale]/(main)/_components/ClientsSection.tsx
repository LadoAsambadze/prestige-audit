"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

type Clients = {
  name: string;
  logo?: string;
  type?: "image" | "text";
};

const partnersRow1: Clients[] = [
  { name: "Hilton", logo: "./partners/Hilton-logo.png" },
  { name: "Le Meridien", logo: "./partners/Le-meridien.png" },
  { name: "Sheraton", logo: "./partners/Sheraton.png" },
  { name: "Eclipse", logo: "./partners/Eclipse.png" },
];

const partnersRow2: Clients[] = [
  { name: "Rogo", logo: "./partners/Rogo.jpg" },
  { name: "BAU Hospital", type: "text" },
  { name: "Adjara Textile", type: "text" },
  { name: "BTM Textile", type: "text" },
];

const LogoCard = ({ logo, name, type }: Clients) => {
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

export default function ClientssSection() {
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
    <section className="relative z-10 bg-[#f3f5f4] py-10 md:pt-16 pb-32 overflow-hidden">
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

      {/* CENTERED HEADER SECTION */}
      <motion.div
        className="max-w-7xl mx-auto mb-12 flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headerVariants}
      >
        <div className="flex items-center justify-center w-full gap-3 mb-3">
          <div className="w-8 md:w-10 h-0.5 bg-[#2563eb]" />
          <span className="text-xs md:text-sm font-medium uppercase tracking-[2px] text-gray-500">
            Our Clients
          </span>
          <div className="w-8 md:w-10 h-0.5 bg-[#2563eb]" />
        </div>
      </motion.div>

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
        {/* Row 1 */}
        <motion.div
          className="flex overflow-hidden relative"
          variants={marqueeRowVariants}
        >
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f3f5f4] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f3f5f4] to-transparent z-10" />
          <div className="flex animate-marquee-left whitespace-nowrap">
            {[...partnersRow1, ...partnersRow1, ...partnersRow1].map((p, i) => (
              <LogoCard key={`r1-${i}`} {...p} />
            ))}
          </div>
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="flex overflow-hidden relative"
          variants={marqueeRowVariants}
        >
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f3f5f4] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f3f5f4] to-transparent z-10" />
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
