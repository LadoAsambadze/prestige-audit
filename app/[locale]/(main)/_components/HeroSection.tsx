"use client";
import { useState, useEffect, JSX } from "react";

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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#F3F5F4",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: currentSlide === index ? 1 : 0,
              backgroundImage: `url("${img}")`,
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* Dark Overlay/Texture */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#000000",
                backgroundImage:
                  'url("https://wdtbullish.wpengine.com/wp-content/uploads/2025/06/Union.png")',
                backgroundPosition: "center left",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                filter: "brightness(20%)",
                opacity: 0.45,
              }}
            />
          </div>
        ))}
      </div>

      {/* Static Content */}
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
            {/* Glow Effect */}
            <div
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
              <div className="mb-8">
                {/* Subtitle Line */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <div
                      className="rounded-full bg-white"
                      style={{ width: "6px", height: "6px" }}
                    />
                    <div
                      className="bg-white/50"
                      style={{ width: "32px", height: "1px" }}
                    />
                  </div>
                  <span
                    className="text-white uppercase tracking-wider"
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      letterSpacing: "2px",
                    }}
                  >
                    Business Consultant
                  </span>
                  <div className="flex items-center">
                    <div
                      className="bg-white/50"
                      style={{ width: "32px", height: "1px" }}
                    />
                    <div
                      className="rounded-full bg-white"
                      style={{ width: "6px", height: "6px" }}
                    />
                  </div>
                </div>

                {/* Main Heading */}
                <h1
                  className="text-white font-semibold mb-6"
                  style={{
                    fontSize: "clamp(36px, 8vw, 70px)",
                    lineHeight: 1.2,
                  }}
                >
                  Trusted <span style={{ color: "#2563eb" }}>Finance</span>
                  <br />
                  Consulting Partner
                </h1>

                <p className="text-white/80 max-w-lg mb-8 text-lg">
                  We provide expert financial strategies to help your business
                  navigate complex market changes and achieve sustainable
                  growth.
                </p>
              </div>

              <a
                href="#"
                className="group inline-flex items-center gap-3 bg-[#2563eb] hover:bg-white text-white hover:text-black font-semibold rounded-xl transition-all duration-300 ease-linear"
                style={{
                  padding: "1.2rem 2.5rem",
                  fontSize: "16px",
                  borderRadius: "12px",
                }}
              >
                <span>Free Consultation</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 27.7 18"
                  className="w-6 h-4 fill-current"
                >
                  <path d="M12.1,18V10.6H0V7.4H12.1V0L27.7,9Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2" />
        </div>
      </div>

      {/* Background Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="transition-all duration-300"
            style={{
              width: currentSlide === index ? "32px" : "12px",
              height: "12px",
              borderRadius: "6px",
              backgroundColor:
                currentSlide === index ? "#2563eb" : "rgba(255, 255, 255, 0.4)",
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </section>
  );
}
