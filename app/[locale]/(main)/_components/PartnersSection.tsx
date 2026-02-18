"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// ── Inline SVG logo components for reliability ──────────────────────────────

const BafLogo = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-[#1a2b5e] rounded-full">
    <span className="text-[#f0c040] font-black text-[17px] leading-none tracking-wide">
      BAF
    </span>
    <span className="text-white/70 text-[6px] uppercase tracking-wider mt-0.5 text-center leading-tight px-1">
      Georgia
    </span>
  </div>
);

const AccaLogo = () => (
  <div className="w-full h-full flex items-center justify-center bg-[#c8102e] rounded-full">
    <span className="text-white font-black text-[17px] tracking-wide leading-none">
      ACCA
    </span>
  </div>
);

const IfacLogo = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-[#003087] rounded-full">
    <span className="text-white font-black text-[18px] leading-none tracking-wider">
      IFAC
    </span>
    <div className="w-8 h-[1.5px] bg-white/40 mt-1" />
  </div>
);

const SarasLogo = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-[#0057a8] rounded-full">
    <span className="text-white font-black text-[15px] leading-none tracking-wider">
      SARAS
    </span>
    <span className="text-white/60 text-[5.5px] uppercase tracking-widest mt-1">
      Georgia
    </span>
  </div>
);

const IasbLogo = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-[#00539b] rounded-full">
    <span className="text-white font-black text-[12px] leading-none tracking-wider">
      IAASB
    </span>
    <div className="w-8 h-[1.5px] bg-white/40 mt-1" />
  </div>
);

const logos = [
  { alt: "BAF", label: "BAF", Logo: BafLogo },
  { alt: "ACCA", label: "ACCA", Logo: AccaLogo },
  { alt: "IFAC", label: "IFAC", Logo: IfacLogo },
  { alt: "SARAS", label: "SARAS", Logo: SarasLogo },
  { alt: "IAASB", label: "IAASB", Logo: IasbLogo },
];

const PartnersSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const orbitDuration = 20;
  const angleStep = 360 / logos.length;

  return (
    <section
      className="py-10 md:py-16 overflow-hidden"
      style={{ backgroundColor: "#F3F5F4" }}
    >
      <div className="max-w-[2000px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 2xl:px-32">
        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-20 items-center">
          {/* ── LEFT: Copy ── */}
          <motion.div
            className="lg:w-[47%] w-full mb-12 lg:mb-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-4"
              variants={fadeUpVariants}
            >
              <div className="w-8 md:w-10 h-0.5 bg-blue-600" />
              <span className="text-xs md:text-sm font-medium uppercase tracking-[2px] text-gray-500">
                History
              </span>
              <div className="w-8 md:w-10 h-0.5 bg-blue-600" />
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-blue-600"
              variants={fadeUpVariants}
            >
              With 20 years of experience
            </motion.h2>

            <motion.p
              className="text-base md:text-lg mb-4 text-gray-500 leading-relaxed"
              variants={fadeUpVariants}
            >
              Prestige Audit company has been a Leader in Batumi and all over
              Georgia audit market for many years. We have all the necessary
              licenses and permits to conduct an audit in Georgia.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  title: "Licensed & Certified",
                  desc: "Fully licensed by SARAS with all permits required to conduct statutory and voluntary audits across Georgia.",
                  icon: "M25,2L5,12v11c0,12.4,8.6,24,20,27c11.4-3,20-14.6,20-27V12L25,2z M22,35l-8-8l2.8-2.8L22,29.4l11.2-11.2L36,21L22,35z",
                },
                {
                  title: "Professional Team",
                  desc: "Our specialists are certified members of BAF and ACCA, applying International Auditing Standards (ISA) on every engagement.",
                  icon: "M17,22c4.4,0,8-3.6,8-8s-3.6-8-8-8s-8,3.6-8,8S12.6,22,17,22z M17,26c-5.3,0-16,2.7-16,8v4h32v-4C33,28.7,22.3,26,17,26z",
                },
                {
                  title: "International Standards",
                  desc: "All audits and financial reports conform to IFRS and IAASB standards, keeping our clients fully compliant in global and local markets.",
                  icon: "M25,3C12.9,3,3,12.9,3,25s9.9,22,22,22s22-9.9,22-22S37.1,3,25,3z M25,11c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S23.3,11,25,11z M30,37H20v-2h3V23h-3v-2h7v14h3V37z",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  variants={fadeUpVariants}
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 50 50">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Orbital Animation ── */}
          <div className="lg:w-[53%] w-full flex items-center justify-center relative min-h-[520px]">
            {/* Ambient glow */}
            <div className="absolute w-[440px] h-[440px] bg-blue-400/10 rounded-full blur-[100px]" />

            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
              {/* Orbit ring */}
              <div className="absolute inset-[6%] border border-blue-200/50 rounded-full" />
              <div
                className="absolute rounded-full border border-blue-100/30"
                style={{ inset: "20%" }}
              />

              {/* ── CENTRAL LOGO with blue gradient ── */}
              <motion.div
                className="z-20 w-36 h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center border border-white/20 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #0f1f5c 0%, #1a3a8f 35%, #1d4ed8 65%, #2563eb 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow:
                    "0 0 0 5px rgba(29,78,216,0.18), 0 8px 48px rgba(15,31,92,0.65), 0 2px 16px rgba(37,99,235,0.3), inset 0 1px 0 rgba(255,255,255,0.12)",
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              >
                <div className="relative w-[95%] h-[85%]">
                  <Image
                    src="/PrestigeLogo.png"
                    alt="Prestige Audit"
                    fill
                    className="object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                  />
                </div>
              </motion.div>

              {/* ── ORBITING LOGO BUBBLES ── */}
              {logos.map(({ alt, Logo }, index) => {
                const initialAngle = index * angleStep;
                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{ inset: "6%" }}
                    animate={{ rotate: [initialAngle, initialAngle + 360] }}
                    transition={{
                      duration: orbitDuration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <motion.div
                      className="absolute w-20 h-20 rounded-full overflow-hidden border-2 border-white/80"
                      style={{
                        top: 0,
                        left: "50%",
                        translateX: "-50%",
                        translateY: "-50%",
                      }}
                      animate={{
                        rotate: [-initialAngle, -(initialAngle + 360)],
                      }}
                      transition={{
                        duration: orbitDuration,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Logo />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
