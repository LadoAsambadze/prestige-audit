"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const OurIdentity: React.FC = () => {
  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Fade up animation for text elements
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
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

  // Slide in from left for feature items
  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Scale and fade for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Decorative elements fade in
  const decorativeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="py-10 md:py-16 " style={{ backgroundColor: "#F3F5F4" }}>
      <div className="max-w-[2000px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 2xl:px-32">
        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-20 items-center">
          {/* Left Content Section */}
          <motion.div
            className="lg:w-[47%] w-full mb-12 lg:mb-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Subtitle */}
            <motion.div
              className="flex items-center gap-3 mb-4"
              variants={fadeUpVariants}
            >
              <motion.div
                className="w-8 md:w-10 h-0.5"
                style={{ backgroundColor: "#2563eb" }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                }}
              />
              <span
                className="text-xs md:text-sm font-medium uppercase tracking-wider"
                style={{
                  color: "#6B7280",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "2px",
                }}
              >
                History
              </span>
              <motion.div
                className="w-8 md:w-10 h-0.5"
                style={{ backgroundColor: "#2563eb" }}
                initial={{ scaleX: 0, originX: 1 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                }}
              />
            </motion.div>

            {/* Subtitle - Experience */}
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6"
              style={{
                color: "#2563eb",
                fontFamily: "'DM Sans', sans-serif",
              }}
              variants={fadeUpVariants}
            >
              with 20 years of experience
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg mb-8 md:mb-10 leading-relaxed"
              style={{
                color: "#6B7280",
                fontFamily: "'DM Sans', sans-serif",
              }}
              variants={fadeUpVariants}
            >
              Prestige Audit company has been a Leader in Batumi and all over
              Georgia audit market for many years. We have all the necessary
              licenses and permits to conduct an audit in Georgia.
            </motion.p>

            {/* Feature Items */}
            <motion.div
              className="space-y-5 md:space-y-6 mb-8 md:mb-12"
              variants={containerVariants}
            >
              {/* Licensed & Certified */}
              <motion.div
                className="flex items-start gap-4 group"
                variants={slideInLeftVariants}
                whileHover={{ x: 8 }}
                transition={{
                  type: "spring" as const,
                  stiffness: 300,
                  damping: 25,
                }}
              >
                <motion.div
                  className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: "#2563eb" }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.4 },
                  }}
                >
                  <svg
                    className="w-7 h-7 md:w-8 md:h-8 fill-current text-white"
                    viewBox="0 0 50 50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M25,2L5,12v11c0,12.4,8.6,24,20,27c11.4-3,20-14.6,20-27V12L25,2z M22,35l-8-8l2.8-2.8L22,29.4l11.2-11.2L36,21L22,35z" />
                  </svg>
                </motion.div>
                <div>
                  <h4
                    className="text-lg md:text-xl font-semibold mb-2"
                    style={{
                      color: "#111827",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Licensed & Certified
                  </h4>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{
                      color: "#6B7280",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    We have all the necessary licenses and permits to conduct an
                    audit in Georgia.
                  </p>
                </div>
              </motion.div>

              {/* Professional Team */}
              <motion.div
                className="flex items-start gap-4 group"
                variants={slideInLeftVariants}
                whileHover={{ x: 8 }}
                transition={{
                  type: "spring" as const,
                  stiffness: 300,
                  damping: 25,
                }}
              >
                <motion.div
                  className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: "#2563eb" }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.4 },
                  }}
                >
                  <svg
                    className="w-7 h-7 md:w-8 md:h-8 fill-current text-white"
                    viewBox="0 0 50 50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17,22c4.4,0,8-3.6,8-8s-3.6-8-8-8s-8,3.6-8,8S12.6,22,17,22z M17,26c-5.3,0-16,2.7-16,8v4h32v-4C33,28.7,22.3,26,17,26z M33,22c4.4,0,8-3.6,8-8s-3.6-8-8-8c-0.6,0-1.1,0.1-1.7,0.2c1.5,2,2.4,4.5,2.4,7.2s-0.9,5.2-2.4,7.2C31.9,21.9,32.4,22,33,22z M35.8,26c2.2,1.2,3.9,2.9,3.9,4.5v4H49v-4C49,28.7,40.4,26.5,35.8,26z" />
                  </svg>
                </motion.div>
                <div>
                  <h4
                    className="text-lg md:text-xl font-semibold mb-2"
                    style={{
                      color: "#111827",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Professional Team
                  </h4>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{
                      color: "#6B7280",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Our employees are real members of Georgian Federation of
                    Professional Accountants and Auditors, certified according
                    to the IAS program.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image Section - ACCA Logo */}
          <motion.div
            className="lg:w-[53%] w-full flex items-center justify-center lg:justify-end relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full max-w-[600px]">
              {/* Decorative background circles with blue gradient */}
              <motion.div
                className="absolute -left-12 top-1/2 -translate-y-1/2 w-64 h-96 opacity-20 rounded-[50%] blur-3xl hidden lg:block"
                style={{
                  background:
                    "radial-gradient(at center center, #2563eb 0%, transparent 70%)",
                }}
                variants={decorativeVariants}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.25, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                }}
              />
              <motion.div
                className="absolute left-8 top-1/2 -translate-y-1/2 w-48 h-80 opacity-30 rounded-[50%] blur-2xl hidden lg:block"
                style={{
                  background:
                    "radial-gradient(at center center, #1d4ed8 0%, transparent 70%)",
                }}
                variants={decorativeVariants}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.35, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                  delay: 0.5,
                }}
              />

              {/* ACCA Logo container */}
              <motion.div className="relative z-10" variants={imageVariants}>
                <div className="relative aspect-square max-w-[280px] sm:max-w-[350px] md:max-w-md mx-auto">
                  {/* Background circle */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "#ffffff",
                    }}
                    animate={{
                      boxShadow: [
                        "0 10px 40px rgba(37, 99, 235, 0.1)",
                        "0 20px 60px rgba(37, 99, 235, 0.2)",
                        "0 10px 40px rgba(37, 99, 235, 0.1)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut" as const,
                    }}
                  />
                  <motion.div
                    className="relative rounded-full overflow-hidden w-full h-full border-4 sm:border-6 md:border-8 border-white md:shadow-2xl bg-white"
                    whileHover={{
                      scale: 1.05,
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.6 },
                    }}
                  >
                    <div
                      className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
                      style={{
                        animation: "oscillateRotation 8s ease-in-out infinite",
                      }}
                    >
                      <Image
                        src="/acca-logo1.png"
                        alt="ACCA - Association of Chartered Certified Accountants"
                        fill
                        className="rounded-full scale-125"
                        style={{
                          objectFit: "cover",
                        }}
                        priority
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add keyframes for oscillating rotation animation */}
      <style jsx>{`
        @keyframes oscillateRotation {
          0% {
            transform: rotate(-45deg);
          }
          50% {
            transform: rotate(45deg);
          }
          100% {
            transform: rotate(-45deg);
          }
        }
      `}</style>
    </section>
  );
};

export default OurIdentity;
