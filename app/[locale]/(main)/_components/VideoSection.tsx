"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative bg-[#f3f5f4] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT — Video */}
          <motion.div
            className="w-full lg:w-[58%]"
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] border-3 border-white">
              {/* Subtle blue glow behind */}
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl -z-10" />

              <video
                ref={videoRef}
                src="/MyVideo.mp4"
                poster="/Video.png"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover aspect-[4/3]"
              />

              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* RIGHT — Text */}
          <motion.div
            className="w-full lg:w-[42%] flex flex-col justify-center"
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Big number badge */}
            <div className="flex items-end gap-4 mb-6">
              <motion.span
                className="text-[7rem] lg:text-[9rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-500 select-none"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                25
              </motion.span>
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-1">
                  Years of
                </p>
                <p className="text-2xl font-black text-slate-800 leading-tight">
                  Excellence
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 mb-6" />

            {/* Headline */}
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-5">
              Prestige Audit has been{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                setting the standard
              </span>{" "}
              for a quarter century.
            </h2>

            {/* Body */}
            <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-md">
              Since our founding, we have helped hundreds of businesses across
              Georgia and beyond navigate complex financial landscapes with
              clarity, integrity, and precision. Twenty-five years of trust —
              built one client at a time.
            </p>

            {/* Stats row */}
            <div className="flex gap-8">
              {[
                { value: "500+", label: "Clients Served" },
                { value: "25", label: "Years Active" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <span className="text-2xl font-black text-blue-600">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
