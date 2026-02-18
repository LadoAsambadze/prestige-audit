"use client";

import { useState, useEffect, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backgroundImages: string[] = ["/bg2.jpg", "/b3.jpg", "/b4.jpg"];

export default function HeroCarousel(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-[100vh] sm:min-h-[110vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#F3F5F4",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          {backgroundImages.map(
            (img, index) =>
              index === currentSlide && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("${img}")`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="absolute inset-0 bg-black/45" />
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-20 w-full px-6 sm:px-10 md:px-16 lg:px-20 2xl:px-32 max-w-[2000px] mx-auto">
        <div className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40">
          <div className="flex flex-col items-start">
            <div className="relative w-full">
              {/* Background Glow */}
              <motion.div
                animate={{ opacity: [0.2, 0.3, 0.2], scale: [1, 1.05, 1] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute pointer-events-none -left-20 -top-20 w-full h-full max-h-[500px]"
                style={{
                  background:
                    "radial-gradient(at center center, #2563eb33 0%, #F2295B00 70%)",
                  zIndex: 0,
                }}
              />

              <div className="relative z-10 space-y-10 md:space-y-12 lg:space-y-16">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center gap-3 lg:mb-4"
                >
                  <div className="flex items-center">
                    <div className="rounded-full bg-white w-1 h-1" />
                    <div className="bg-white/40 w-8 md:w-10 h-[1px]" />
                  </div>
                  <span className="text-white uppercase tracking-[2px] text-xs md:text-sm font-medium">
                    Prestige Audit
                  </span>
                  <div className="flex items-center">
                    <div className="bg-white/40 w-8 md:w-10 h-[1px]" />
                    <div className="rounded-full bg-white w-1 h-1" />
                  </div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white font-semibold leading-[1.1] 
                             text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[68px] 2xl:text-[75px]"
                >
                  <span className="block md:inline whitespace-nowrap">
                    The Best <span className="text-[#2563eb]">Audit</span>
                  </span>
                  <br className="hidden md:block" />
                  <span className="block md:inline whitespace-nowrap">
                    {" "}
                    Company in Batumi
                  </span>
                </motion.h1>

                {/* ── BOOK CONSULTATION BUTTON ── */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <a
                    href="/contact"
                    className="
                      group relative inline-flex items-center gap-4
                      overflow-hidden
                      rounded-full
                      px-9 py-5 md:px-12 md:py-6
                      text-base font-semibold text-white
                      bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700
                      shadow-lg shadow-blue-600/30
                      transition-all duration-300
                      hover:shadow-2xl hover:shadow-blue-500/50
                      hover:-translate-y-1
                      active:scale-95
                    "
                  >
                    {/* Shimmer sweep */}
                    <span
                      className="
                        absolute inset-0
                        bg-gradient-to-r from-transparent via-white/25 to-transparent
                        -translate-x-full group-hover:translate-x-full
                        transition-transform duration-700 ease-in-out
                      "
                    />
                    {/* Brighter gradient on hover */}
                    <span
                      className="
                        absolute inset-0 rounded-full
                        bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                      "
                    />
                    <span className="relative z-10">Book Consultation</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 27.7 18"
                      className="relative z-10 w-5 h-3.5 fill-current transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M12.1,18V10.6H0V7.4H12.1V0L27.7,9Z" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative h-2 transition-all duration-500"
            style={{ width: currentSlide === index ? "40px" : "12px" }}
          >
            <div
              className={`absolute inset-0 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                  : "bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
