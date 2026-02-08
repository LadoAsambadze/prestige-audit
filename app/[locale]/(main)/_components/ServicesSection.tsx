"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Boosted Efficiency",
    description:
      "Et tempore ipsam non voluptatum molestiae et beatae incidunt.",
    image:
      "https://wdtbullish.wpengine.com/wp-content/uploads/2025/06/Service-img-05.jpg",
    hasImage: true,
    icon: (
      <svg
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path d="M16.72,0H13.28a2,2,0,0,0-2,2V5.4a2,2,0,0,0,2,2H14v6.83a8.26,8.26,0,0,1,1-.06c.28,0,.56,0,.84,0V7.36h.88a2,2,0,0,0,2-2V2A2,2,0,0,0,16.72,0Z"></path>
        <path d="M5.4,7.36H2a2,2,0,0,0-2,2v3.44a2,2,0,0,0,2,2h.8v8a1.57,1.57,0,0,0,1.57,1.57H6.18a8.42,8.42,0,0,1-.09-1.24,5.91,5.91,0,0,1,0-.6H4.6V14.72h.8a2,2,0,0,0,2-2V9.32a2,2,0,0,0-2-2Z"></path>
        <path d="M28,7.36H24.6a2,2,0,0,0-2,2v3.44a2,2,0,0,0,2,2h.8v7.73H23.89c0,.2,0,.4,0,.6a8.66,8.66,0,0,1-.09,1.25h1.85a1.57,1.57,0,0,0,1.57-1.58v-8H28a2,2,0,0,0,2-2V9.32a2,2,0,0,0-2-2Z"></path>
        <path d="M15,16.09a7,7,0,1,0,7,7A7,7,0,0,0,15,16.09Zm-.76,5.79a3.4,3.4,0,0,0,1.08.52c.27.1.55.21.84.34A2.07,2.07,0,0,1,17.25,24a2.3,2.3,0,0,1-.15,1.78,2.1,2.1,0,0,1-1.45,1.06v.63a.65.65,0,1,1-1.3,0v-.65a2.1,2.1,0,0,1-1.74-1.91.66.66,0,0,1,.66-.65.65.65,0,0,1,.65.65c0,.36.52.7,1.06.7a1,1,0,0,0,1-.44.94.94,0,0,0,.07-.75.75.75,0,0,0-.41-.45c-.24-.11-.49-.2-.73-.29a4.66,4.66,0,0,1-1.47-.75,2,2,0,0,1-.54-2.42,2.07,2.07,0,0,1,1.49-1.16v-.62a.66.66,0,1,1,1.31,0v.64a2.11,2.11,0,0,1,1.73,1.91.66.66,0,0,1-.66.65.65.65,0,0,1-.65-.65c0-.36-.52-.69-1.06-.69-.76,0-.93.36-1,.47a.74.74,0,0,0,.2.87Z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Recruitment Support",
    description:
      "Et tempore ipsam non voluptatum molestiae et beatae incidunt.",
    image:
      "https://wdtbullish.wpengine.com/wp-content/uploads/2025/06/Service-img-04.jpg",
    hasImage: false, // Middle card - text only
    icon: (
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path d="M73.1,51.4c13.5,0,24.4-10.9,24.4-24.4c0-13.5-10.9-24.4-24.4-24.4C59.6,2.5,48.6,13.5,48.6,27 C48.6,40.5,59.6,51.4,73.1,51.4z M70.4,12.5V9.1c0-0.4,0.3-0.7,0.7-0.7H75c0.4,0,0.7,0.3,0.7,0.7v3.4c3.9,0.7,6.9,3.8,7.2,7.8 c0,0.4-0.3,0.7-0.7,0.7h-3.9c-0.3,0-0.6-0.2-0.7-0.5c-0.3-1.6-1.7-2.8-3.3-2.8H72c-1.7,0-3.2,1.1-3.5,2.8c-0.3,2.1,1.3,3.9,3.3,3.9 h2.4c5.1,0,9.1,4.4,8.6,9.5c-0.4,3.9-3.5,6.9-7.2,7.6v3.5c0,0.4-0.3,0.7-0.7,0.7h-3.9c-0.4,0-0.7-0.3-0.7-0.7v-3.4 c-3.8-0.6-6.8-3.8-7.2-7.8c0-0.4,0.3-0.8,0.7-0.8h3.9c0.3,0,0.6,0.2,0.7,0.6c0.3,1.6,1.6,2.8,3.3,2.8h2.3c1.7,0,3.2-1.1,3.5-2.8 c0.4-2.1-1.2-3.9-3.3-3.9h-2c-4.5,0-8.6-3.3-9-7.8C62.8,17.2,66,13.2,70.4,12.5L70.4,12.5z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Budget Supervision",
    description:
      "Et tempore ipsam non voluptatum molestiae et beatae incidunt.",
    image:
      "https://wdtbullish.wpengine.com/wp-content/uploads/2025/06/Service-img-03.jpg",
    hasImage: true,
    icon: (
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path d="M86.7,56.2c-1.9,7-5.6,13.1-10.8,17.9c0.1,1.1,0.2,2.2,0.2,3.4c0,1.5-0.1,2.9-0.4,4.3c8.4-6.1,14.5-15.1,16.9-25.6H86.7z"></path>
        <path d="M50,57.5c-11.1,0-20,9-20,20c0,11.1,9,20,20,20c11.1,0,20-9,20-20C70,66.4,61.1,57.5,50,57.5z"></path>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        backgroundColor: "#0a0a0a",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Wavy Line Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 2px, #79EB93 2px, #79EB93 3px), repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(121, 235, 147, 0.1) 50px, rgba(121, 235, 147, 0.1) 51px)",
          backgroundSize: "100px 100px",
        }}
      >
        {/* Curved wavy lines overlay */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="wave"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0,50 Q25,30 50,50 T100,50"
                fill="none"
                stroke="rgba(121, 235, 147, 0.15)"
                strokeWidth="1"
              />
              <path
                d="M0,60 Q25,40 50,60 T100,60"
                fill="none"
                stroke="rgba(121, 235, 147, 0.1)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Decorative Subtitle with dots and lines */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full bg-white"
                style={{ opacity: 0.8 }}
              ></div>
              <div
                className="w-12 h-[2px] bg-white"
                style={{ opacity: 0.5 }}
              ></div>
            </div>
            <span
              className="text-white uppercase tracking-wider"
              style={{
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "2px",
              }}
            >
              Consulting Services
            </span>
            <div className="flex items-center gap-2">
              <div
                className="w-12 h-[2px] bg-white"
                style={{ opacity: 0.5 }}
              ></div>
              <div
                className="w-2 h-2 rounded-full bg-white"
                style={{ opacity: 0.8 }}
              ></div>
            </div>
          </div>

          {/* Main Title */}
          <h2
            className="mb-6"
            style={{
              fontSize: "clamp(32px, 5vw, 50px)",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#ffffff",
            }}
          >
            Trusted{" "}
            <span style={{ color: "#79EB93" }}>Guidance</span> Built For You
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Euismod quam justo lectus commodo augue arcu dignissim.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-3xl transition-all duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Card Content */}
              <div className="p-8">
                {/* Header with Title and Icon */}
                <div className="flex items-start justify-between mb-6">
                  <h5
                    className="flex-1 transition-colors duration-300"
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      lineHeight: 1.3,
                      color: "#ffffff",
                    }}
                  >
                    {service.title}
                  </h5>

                  {/* Icon */}
                  <div
                    className="flex-shrink-0 ml-4"
                    style={{
                      width: "48px",
                      height: "48px",
                      fill: index === 1 ? "#79EB93" : "#ffffff",
                      opacity: index === 1 ? 1 : 0.8,
                    }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Divider line (only for middle card) */}
                {!service.hasImage && (
                  <div
                    className="w-full h-[1px] mb-6"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
                    }}
                  ></div>
                )}

                {/* Description */}
                <p
                  className="mb-6"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Image at bottom (only for cards with images) */}
              {service.hasImage && (
                <div className="relative overflow-hidden rounded-b-3xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
            }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}