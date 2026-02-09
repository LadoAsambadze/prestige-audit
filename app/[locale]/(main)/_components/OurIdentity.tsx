"use client";

import React from "react";

const OurIdentity: React.FC = () => {
  return (
    <section
      className="py-16  -mt-10 rounded-t-[80px]  lg:py-24"
      style={{ backgroundColor: "#F3F5F4" }}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:gap-20 items-center">
          {/* Left Content Section */}
          <div className="lg:w-[47%] w-full mb-12 lg:mb-0">
            {/* Subtitle */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-0.5"
                style={{ backgroundColor: "#2563eb" }}
              ></div>
              <span
                className="text-sm font-medium uppercase tracking-wider"
                style={{
                  color: "#6B7280",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "2px",
                }}
              >
                Our Identity
              </span>
              <div
                className="w-8 h-0.5"
                style={{ backgroundColor: "#2563eb" }}
              ></div>
            </div>

            {/* Main Title */}
            <h2
              className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
              style={{
                color: "#111827",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
              }}
            >
              Boosting Your Company
            </h2>

            {/* Description */}
            <p
              className="text-lg mb-10 leading-relaxed"
              style={{
                color: "#6B7280",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Velit aliquam imperdiet mollis nullam volutpat vulputate ornare
              sagittis porttitor ullamcorper.
            </p>

            {/* Feature Items */}
            <div className="space-y-6 mb-12">
              {/* Finance Support Online */}
              <div className="flex items-start gap-4 group">
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ backgroundColor: "#2563eb" }}
                >
                  <svg
                    className="w-8 h-8 fill-current text-white"
                    viewBox="0 0 50 50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M32.1,27.9c-1.6-2.5-3.8-4.6-6.5-5.9c-2.1,1.8-4.9,2.8-7.8,2.8c-3,0-5.5-1-7.7-2.7C4.7,25,1,31.1,1,37.8v2.3c0,1.8,1.5,3.3,3.3,3.3H28c-0.7-1.6-1.1-3.4-1.1-5.2C26.9,33.9,28.9,30.1,32.1,27.9L32.1,27.9z" />
                    <path d="M39.3,28.3c-5.4,0-9.7,4.4-9.7,9.9s4.4,9.9,9.7,9.9c5.4,0,9.7-4.4,9.7-9.9S44.6,28.3,39.3,28.3z M38.8,37.1h1c2,0,3.6,1.8,3.4,3.9c-0.2,1.6-1.4,2.8-2.9,3.1v1.4c0,0.2-0.1,0.3-0.3,0.3h-1.6c-0.2,0-0.3-0.1-0.3-0.3v-1.4c-1.5-0.3-2.7-1.5-2.9-3.1c0-0.2,0.1-0.3,0.3-0.3h1.6c0.1,0,0.3,0.1,0.3,0.2c0.1,0.6,0.6,1.1,1.3,1.1h0.9c0.7,0,1.3-0.5,1.4-1.1c0.1-0.8-0.5-1.6-1.3-1.6h-0.8c-1.8,0-3.4-1.3-3.6-3.2c-0.2-1.9,1.1-3.5,2.9-3.8v-1.4c0-0.2,0.1-0.3,0.3-0.3h1.6c0.2,0,0.3,0.1,0.3,0.3v1.4c1.5,0.3,2.7,1.6,2.9,3.2c0,0.2-0.1,0.3-0.3,0.3h-1.6c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.6-0.7-1.1-1.3-1.1h-0.9c-0.7,0-1.3,0.5-1.4,1.1C37.3,36.4,38,37.1,38.8,37.1L38.8,37.1z" />
                    <path d="M17.8,22c5.4,0,9.9-4.5,9.9-10.1c0-5.6-4.4-10.1-9.9-10.1C12.4,1.9,8,6.4,8,11.9C8,17.5,12.4,22,17.8,22L17.8,22z" />
                  </svg>
                </div>
                <div>
                  <h4
                    className="text-xl font-semibold mb-2"
                    style={{
                      color: "#111827",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Finance Support Online
                  </h4>
                  <p
                    className="leading-relaxed"
                    style={{
                      color: "#6B7280",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Commodo augue arcu dignissim velit aliquam imperdiet mollis
                    mattis.
                  </p>
                </div>
              </div>

              {/* Strategic Goal Planning */}
              <div className="flex items-start gap-4 group">
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ backgroundColor: "#2563eb" }}
                >
                  <svg
                    className="w-8 h-8 fill-current text-white"
                    viewBox="0 0 50 50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M35.6,32c5.7,0,10.3-4.6,10.3-10.3c0-5.7-4.6-10.3-10.3-10.3S25.3,16,25.3,21.7C25.3,27.4,29.9,32,35.6,32zM34.4,15.6v-1.4c0-0.2,0.1-0.3,0.3-0.3h1.6c0.2,0,0.3,0.1,0.3,0.3v1.4c1.6,0.3,2.9,1.6,3,3.3c0,0.2-0.1,0.3-0.3,0.3h-1.7c-0.1,0-0.3-0.1-0.3-0.2c-0.1-0.7-0.7-1.2-1.4-1.2h-0.9c-0.7,0-1.3,0.5-1.5,1.2c-0.1,0.9,0.5,1.6,1.4,1.6h1c2.1,0,3.8,1.8,3.6,4c-0.2,1.6-1.5,2.9-3,3.2v1.5c0,0.2-0.1,0.3-0.3,0.3h-1.6c-0.2,0-0.3-0.1-0.3-0.3v-1.4c-1.6-0.3-2.9-1.6-3-3.3c0-0.2,0.1-0.3,0.3-0.3h1.6c0.1,0,0.3,0.1,0.3,0.2c0.1,0.7,0.7,1.2,1.4,1.2H36c0.7,0,1.4-0.5,1.5-1.2c0.2-0.9-0.5-1.6-1.4-1.6h-0.9c-1.9,0-3.6-1.4-3.8-3.3C31.2,17.6,32.6,15.9,34.4,15.6L34.4,15.6z" />
                    <path d="M35.6,9.4c0.7,0,1.3-0.6,1.3-1.3V2.5c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.3,0.6-1.3,1.3v5.6C34.2,8.8,34.8,9.4,35.6,9.4L35.6,9.4z" />
                    <path d="M29.9,10.9c0.7,0,1.3-0.6,1.3-1.3V4c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.3,0.6-1.3,1.3v5.6C28.6,10.3,29.2,10.9,29.9,10.9z" />
                    <path d="M41.2,10.9c0.7,0,1.3-0.6,1.3-1.3V4c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.3,0.6-1.3,1.3v5.6C39.8,10.3,40.4,10.9,41.2,10.9z" />
                    <path d="M48.9,33.7c-0.2-0.7-0.6-1.3-1.2-1.6c-0.6-0.3-1.4-0.4-2-0.1l-9.8,4c0,0.5,0,1.1-0.2,1.6c-0.7,2-2.7,3.2-4.8,2.8l-8.3-1.7c-0.7-0.1-1.1-0.8-1-1.5c0.1-0.7,0.8-1.1,1.5-1l8.2,1.7c0.8,0.2,1.6-0.3,1.9-1.1c0.2-0.8-0.1-1.6-0.8-1.9l-8.4-4.3c-1.6-0.8-3.5-1-5.3-0.4l-7,2.4v12.9l13.6,3.2c2.7,0.7,5.5,0.1,7.8-1.6L48,36.1C48.8,35.6,49.1,34.6,48.9,33.7L48.9,33.7z" />
                    <path d="M2.3,30H8c0.7,0,1.3,0.6,1.3,1.3v15.4C9.3,47.4,8.7,48,8,48H2.3C1.6,48,1,47.4,1,46.7V31.3C1,30.6,1.6,30,2.3,30L2.3,30z" />
                  </svg>
                </div>
                <div>
                  <h4
                    className="text-xl font-semibold mb-2"
                    style={{
                      color: "#111827",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Strategic Goal Planning
                  </h4>
                  <p
                    className="leading-relaxed"
                    style={{
                      color: "#6B7280",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Rutrum gravida cras eleifend turpis fames primis vulputate
                    purus est efficitur.
                  </p>
                </div>
              </div>
            </div>

            {/* Get Started Button */}
            <a
              href="#"
              className="group inline-flex items-center gap-3 text-white hover:text-black font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-xl"
              style={{
                backgroundColor: "#2563eb",
                padding:
                  "clamp(1.125rem, 1.0971rem + 0.1274vw, 1.25rem) clamp(1.5rem, 1.2771rem + 1.0191vw, 2.5rem)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                borderRadius: "12px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb";
              }}
            >
              <span>Get Started</span>
              <svg
                className="w-6 h-4 fill-current group-hover:translate-x-1 transition-transform"
                viewBox="0 0 27.7 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.1,18V10.6H0V7.4H12.1V0L27.7,9Z" />
              </svg>
            </a>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-[53%] w-full flex items-center justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[600px]">
              {/* Decorative background circles with blue gradient */}
              <div
                className="absolute -left-12 top-1/2 -translate-y-1/2 w-64 h-96 opacity-20 rounded-[50%] blur-3xl hidden lg:block"
                style={{
                  background:
                    "radial-gradient(at center center, #2563eb 0%, transparent 70%)",
                }}
              ></div>
              <div
                className="absolute left-8 top-1/2 -translate-y-1/2 w-48 h-80 opacity-30 rounded-[50%] blur-2xl hidden lg:block"
                style={{
                  background:
                    "radial-gradient(at center center, #1d4ed8 0%, transparent 70%)",
                }}
              ></div>

              {/* Main image container with circular design */}
              <div className="relative z-10">
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Circular image cutout effect */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                    }}
                  ></div>
                  <div className="relative rounded-full overflow-hidden w-full h-full border-8 border-white shadow-2xl">
                    {/* Replace with your actual image */}
                    <img
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=800&fit=crop"
                      alt="Business professional"
                      className="w-full h-full object-cover"
                    />
                    {/* If using Next.js Image component, use this instead:
                    <Image
                      src="/your-image.jpg"
                      alt="Business professional"
                      fill
                      className="object-cover"
                      priority
                    />
                    */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurIdentity;
