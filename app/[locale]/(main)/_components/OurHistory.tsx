"use client";

import Image from "next/image";
import React from "react";

const OurIdentity: React.FC = () => {
  return (
    <section
      className="py-16 -mt-10 rounded-t-[80px] lg:py-24"
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
                History
              </span>
              <div
                className="w-8 h-0.5"
                style={{ backgroundColor: "#2563eb" }}
              ></div>
            </div>

            {/* Subtitle - Experience */}
            <p
              className="text-2xl font-semibold mb-6"
              style={{
                color: "#2563eb",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              with 20 years of experience
            </p>

            {/* Description */}
            <p
              className="text-lg mb-10 leading-relaxed"
              style={{
                color: "#6B7280",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Prestige Audit company has been a Leader in Batumi and all over
              Georgia audit market for many years. We have all the necessary
              licenses and permits to conduct an audit in Georgia.
            </p>

            {/* Feature Items */}
            <div className="space-y-6 mb-12">
              {/* Licensed & Certified */}
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
                    <path d="M25,2L5,12v11c0,12.4,8.6,24,20,27c11.4-3,20-14.6,20-27V12L25,2z M22,35l-8-8l2.8-2.8L22,29.4l11.2-11.2L36,21L22,35z" />
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
                    Licensed & Certified
                  </h4>
                  <p
                    className="leading-relaxed"
                    style={{
                      color: "#6B7280",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    We have all the necessary licenses and permits to conduct an
                    audit in Georgia.
                  </p>
                </div>
              </div>

              {/* Professional Team */}
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
                    <path d="M17,22c4.4,0,8-3.6,8-8s-3.6-8-8-8s-8,3.6-8,8S12.6,22,17,22z M17,26c-5.3,0-16,2.7-16,8v4h32v-4C33,28.7,22.3,26,17,26z M33,22c4.4,0,8-3.6,8-8s-3.6-8-8-8c-0.6,0-1.1,0.1-1.7,0.2c1.5,2,2.4,4.5,2.4,7.2s-0.9,5.2-2.4,7.2C31.9,21.9,32.4,22,33,22z M35.8,26c2.2,1.2,3.9,2.9,3.9,4.5v4H49v-4C49,28.7,40.4,26.5,35.8,26z" />
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
                    Professional Team
                  </h4>
                  <p
                    className="leading-relaxed"
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
              </div>
            </div>
          </div>

          {/* Right Image Section - ACCA Logo */}
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

              {/* ACCA Logo container */}
              <div className="relative z-10">
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Background circle */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "#ffffff",
                    }}
                  ></div>
                  <div className="relative rounded-full overflow-hidden w-full h-full border-8 border-white shadow-2xl bg-white">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
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
