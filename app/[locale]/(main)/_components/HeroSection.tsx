"use client";
import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    subtitle: "Business Consultant",
    title: "Trusted",
    titleHighlight: "Finance",
    titleEnd: "Consulting Partner",
    description:
      "Nisl malesuada etiam dignissim diam quis enim. Euismod in pellentesque massa placerat duis ut venenatis. Odio pellentesque diam volutpat commodo sed egestas. Massa sapien faucibus et molestie ac feugiat sed lectus.",
    buttonText: "Free Consultation",
    backgroundImage:
      "https://wdtbullish.wpengine.com/wp-content/uploads/2025/07/home-01-slider-img-01.jpg",
  },
  {
    id: 2,
    subtitle: "Financial Strategist",
    title: "Executive",
    titleHighlight: "Leader",
    titleEnd: "Through Change",
    description:
      "Dictum risus blandit quis suspendisse aliquet enim. Euismod in pellentesque massa placerat duis ut venenatis. Odio pellentesque diam volutpat commodo sed egestas. Massa sapien faucibus et egestas iaculis massa nisl malesuada.",
    buttonText: "Schedule a call",
    backgroundImage:
      "https://wdtbullish.wpengine.com/wp-content/uploads/2025/06/h1-hero-banner-img.jpg",
  },
  {
    id: 3,
    subtitle: "Expert Advisor",
    title: "Business",
    titleHighlight: "Growth",
    titleEnd: "Through Finance",
    description:
      "Primis vulputate ornare sagittis vehicula praesent dui felis. Accumsan maecenas potenti ultricies habitant morbi senectus netus. Hac habitasse platea dictumst lorem ipsum dolor sit. Ex sapien vitae sem placerat in id.",
    buttonText: "Get Started Now",
    backgroundImage:
      "https://wdtbullish.wpengine.com/wp-content/uploads/2025/07/home-01-slider-img-02.jpg",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#F3F5F4",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background Slides Container */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: currentSlide === index && !isTransitioning ? 1 : 0,
              pointerEvents: currentSlide === index ? "auto" : "none",
            }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("${slide.backgroundImage}")`,
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                transform: "scale(1)",
                transformOrigin: "top center",
              }}
            >
              {/* Dark Overlay with Union Pattern */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: "#000000",
                  backgroundImage:
                    'url("https://wdtbullish.wpengine.com/wp-content/uploads/2025/06/Union.png")',
                  backgroundPosition: "center left",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  filter:
                    "brightness(20%) contrast(100%) saturate(100%) blur(0px) hue-rotate(0deg)",
                  opacity: 0.45,
                  mixBlendMode: "normal",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Container */}
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
          {/* Left Column - Content (50% on desktop) */}
          <div
            className="w-full md:w-1/2 relative"
            style={{
              paddingTop: "90px",
              paddingBottom: "70px",
              zIndex: 1,
            }}
          >
            {/* Radial Glow Background Top Left */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "0%",
                left: "-17%",
                width: "100%",
                height: "1000px",
                zIndex: 0,
                background:
                  "radial-gradient(at center center, #4A9FF563 0%, #F2295B00 70%)",
              }}
            ></div>

            {/* Content with fade transition */}
            <div
              className="relative z-10 transition-opacity duration-300"
              style={{
                opacity: !isTransitioning ? 1 : 0,
              }}
            >
              {/* Heading Section */}
              <div
                className="mb-8"
                style={{
                  paddingBottom: "60px",
                }}
              >
                {/* Subtitle with Decorative Lines */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Left decorative elements */}
                  <div className="flex items-center">
                    <div
                      className="rounded-full bg-white"
                      style={{ width: "6px", height: "6px" }}
                    ></div>
                    <div
                      className="bg-white/50"
                      style={{ width: "32px", height: "1px" }}
                    ></div>
                  </div>

                  {/* Subtitle text */}
                  <span
                    className="text-white uppercase tracking-wider whitespace-nowrap"
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      lineHeight: 1.55,
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: "2px",
                    }}
                  >
                    {slides[currentSlide].subtitle}
                  </span>

                  {/* Right decorative elements */}
                  <div className="flex items-center">
                    <div
                      className="bg-white/50"
                      style={{ width: "32px", height: "1px" }}
                    ></div>
                    <div
                      className="rounded-full bg-white"
                      style={{ width: "6px", height: "6px" }}
                    ></div>
                  </div>
                </div>

                {/* Main Title */}
                <h1
                  className="text-white font-semibold mb-6"
                  style={{
                    fontSize: "clamp(36px, 8vw, 70px)",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    fontFamily: "'DM Sans', sans-serif",
                    textAlign: "start",
                  }}
                >
                  {slides[currentSlide].title}{" "}
                  <span style={{ color: "#4A9FF5" }}>
                    {slides[currentSlide].titleHighlight}
                  </span>
                  <br />
                  {slides[currentSlide].titleEnd}
                </h1>

                {/* Description */}
                <div
                  className="text-white/80 max-w-2xl"
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    fontFamily: "'DM Sans', sans-serif",
                    paddingRight: "10%",
                  }}
                >
                  {slides[currentSlide].description}
                </div>
              </div>

              {/* Button */}
              <div
                className="inline-block"
                style={{
                  textAlign: "start",
                }}
              >
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 bg-[#4A9FF5] hover:bg-white text-white hover:text-black font-semibold rounded-xl transition-all duration-300 ease-linear"
                  style={{
                    padding:
                      "clamp(1.125rem, 1.0971rem + 0.1274vw, 1.25rem) clamp(1.5rem, 1.2771rem + 1.0191vw, 2.5rem)",
                    fontSize: "16px",
                    fontWeight: 600,
                    fontFamily: "'DM Sans', sans-serif",
                    borderRadius: "12px",
                  }}
                >
                  <span>{slides[currentSlide].buttonText}</span>
                  <span className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 27.7 18"
                      className="w-6 h-4 fill-current"
                    >
                      <path d="M12.1,18V10.6H0V7.4H12.1V0L27.7,9Z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Empty Spacer (50% on desktop) */}
          <div className="hidden md:block md:w-1/2 relative">
            {/* Bottom Right Radial Glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: "10%",
                right: "-40%",
                width: "100%",
                height: "550px",
                zIndex: 0,
                background:
                  "radial-gradient(at center center, #5BA8F557 0%, #F2295B00 70%)",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="transition-all duration-300"
            style={{
              width: currentSlide === index ? "32px" : "12px",
              height: "12px",
              borderRadius: "6px",
              backgroundColor:
                currentSlide === index ? "#4A9FF5" : "rgba(255, 255, 255, 0.4)",
              border: "none",
              cursor: "pointer",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}