"use client";
import { useState, useEffect, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backgroundImages: string[] = [
  "https://wdtbullish.wpengine.com/wp-content/uploads/2025/07/home-01-slider-img-01.jpg",
  "https://wdtbullish.wpengine.com/wp-content/uploads/2025/06/h1-hero-banner-img.jpg",
  "https://wdtbullish.wpengine.com/wp-content/uploads/2025/07/home-01-slider-img-02.jpg",
];

export default function HeroCarousel(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 6000); // Slightly longer for a smoother feel
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#F3F5F4",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background Images with "Ken Burns" Effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {backgroundImages.map(
            (img, index) =>
              index === currentSlide && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.1 }} // Starts slightly zoomed in
                  animate={{ opacity: 1, scale: 1 }} // Zooms out slowly
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("${img}")`,
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  {/* Dark Overlay/Texture */}
                  <div
                    className="absolute inset-0 bg-black/45"
                    style={{
                      backgroundImage:
                        'url("https://wdtbullish.wpengine.com/wp-content/uploads/2025/06/Union.png")',
                      backgroundPosition: "center left",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      mixBlendMode: "multiply",
                    }}
                  />
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>

      {/* Static Content with Fade-In Up Effects */}
      <div className="relative z-20 w-full">
        <div
          className="mx-auto flex flex-col md:flex-row items-center justify-center gap-0"
          style={{
            maxWidth: "min(100%, 1320px)",
            paddingTop: "180px",
            paddingBottom: "110px",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          <div className="w-full md:w-1/2 relative" style={{ zIndex: 1 }}>
            {/* Animated Glow Effect */}
            <motion.div
              animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute pointer-events-none"
              style={{
                top: "0%",
                left: "-17%",
                width: "100%",
                height: "1000px",
                zIndex: 0,
                background:
                  "radial-gradient(at center center, #2563eb4d 0%, #F2295B00 70%)",
              }}
            />

            <div className="relative z-10">
              {/* Subtitle Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="flex items-center">
                  <div className="rounded-full bg-white w-[6px] h-[6px]" />
                  <div className="bg-white/50 w-[32px] h-[1px]" />
                </div>
                <span className="text-white uppercase tracking-[2px] text-[15px] font-medium">
                  Business Consultant
                </span>
                <div className="flex items-center">
                  <div className="bg-white/50 w-[32px] h-[1px]" />
                  <div className="rounded-full bg-white w-[6px] h-[6px]" />
                </div>
              </motion.div>

              {/* Title Animation */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white font-semibold mb-6"
                style={{ fontSize: "clamp(36px, 8vw, 70px)", lineHeight: 1.2 }}
              >
                Trusted <span className="text-[#2563eb]">Finance</span>
                <br />
                Consulting Partner
              </motion.h1>

              {/* Paragraph Animation */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/80 max-w-lg mb-8 text-lg"
              >
                We provide expert financial strategies to help your business
                navigate complex market changes and achieve sustainable growth.
              </motion.p>

              {/* Button with Hover & Entrance Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="#"
                  className="group relative inline-flex items-center gap-3 bg-[#2563eb] text-white font-semibold rounded-xl px-10 py-5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:-translate-y-1 active:scale-95"
                >
                  <span className="z-10">Free Consultation</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27.7 18"
                    className="w-6 h-4 fill-current z-10 transition-transform group-hover:translate-x-1"
                  >
                    <path d="M12.1,18V10.6H0V7.4H12.1V0L27.7,9Z" />
                  </svg>
                  {/* Subtle Background Glow on Button Hover */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-xl" />
                </a>
              </motion.div>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2" />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative h-3 transition-all duration-500"
            style={{ width: currentSlide === index ? "32px" : "12px" }}
          >
            <div
              className={`absolute inset-0 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[#2563eb]"
                  : "bg-white/40 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
