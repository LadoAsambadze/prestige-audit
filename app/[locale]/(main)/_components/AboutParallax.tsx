"use client";

import { useRef } from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutParallax() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f3f5f4]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── TOP ANGLED CUT ── */}
      <div
        className="absolute top-0 left-0 w-full z-20 pointer-events-none"
        style={{ height: "80px" }}
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <polygon points="0,0 1440,0 1440,0 720,80 0,0" fill="#f0f2f1" />
        </svg>
      </div>

      {/* ── PARALLAX IMAGE WRAPPER ── */}
      <div className="relative overflow-hidden bg-[#f3f5f4] min-h-[600px] md:min-h-[800px]">
        <motion.div
          style={{
            y: bgY,
            backgroundImage: `url('/bg1.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-[-25%] w-[150%] h-[150%] will-change-transform"
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-900/35 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

        {/* ── GRID CONTENT ── */}
        <div className="relative z-10 flex items-center min-h-[600px] md:min-h-[800px] py-28 md:py-36">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* ── LEFT: Copy ── */}
              <div className="text-white">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex items-center gap-3 mb-5"
                >
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span
                    style={{ letterSpacing: "4px" }}
                    className="text-[10px] font-semibold uppercase text-blue-300"
                  >
                    Prestige Audit
                  </span>
                  <span className="flex-1 max-w-[60px] h-px bg-blue-400/40" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                  className="text-4xl md:text-5xl lg:text-[3.8rem] font-bold mb-7 leading-[1.1] tracking-tight"
                >
                  Your <span className="italic text-blue-300">Strategic</span>{" "}
                  Partner.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="text-base md:text-lg text-white/70 mb-10 max-w-[480px] leading-relaxed"
                >
                  Over a decade of trusted financial expertise, delivering
                  precision, clarity, and confidence to businesses across
                  Georgia.
                </motion.p>

                {/* ── LEARN MORE BUTTON ── */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <a
                    href="/about"
                    className="
                      group relative inline-flex items-center gap-4
                      overflow-hidden rounded-full
                      px-8 py-4 md:px-12 md:py-5
                      text-sm md:text-base font-semibold text-white
                      bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700
                      shadow-lg shadow-blue-600/30
                      transition-all duration-300
                      hover:shadow-2xl hover:shadow-blue-500/50
                      hover:-translate-y-1 active:scale-95
                    "
                  >
                    <span
                      className="
                        absolute inset-0
                        bg-gradient-to-r from-transparent via-white/25 to-transparent
                        -translate-x-full group-hover:translate-x-full
                        transition-transform duration-700 ease-in-out
                      "
                    />
                    <span
                      className="
                        absolute inset-0 rounded-full
                        bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      "
                    />
                    <span className="relative z-10">Learn More About Us</span>
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

              {/* ── RIGHT: Company Identity Panel ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:flex justify-center"
              >
                <div className="relative group">
                  <div className="relative px-12 py-14 border border-white/20 rounded-sm bg-white/[0.07] backdrop-blur-lg shadow-2xl shadow-black/50 overflow-hidden">
                    {/* Animated Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    {/* Logo PNG */}
                    <div className="flex justify-center mb-8">
                      <Image
                        src="/PrestigeLogo.png"
                        alt="Prestige Audit Logo"
                        width={200}
                        height={60}
                        style={{ objectFit: "contain" }}
                        priority
                      />
                    </div>

                    <div className="flex items-center gap-3 my-5 justify-center">
                      <span className="h-px w-12 bg-blue-400/30" />
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span className="h-px w-12 bg-blue-400/30" />
                    </div>

                    <div className="text-center text-xs uppercase text-white/60 tracking-[4px] mb-10">
                      Batumi, Georgia
                    </div>

                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                      {[
                        { value: "20+", label: "Years" },
                        { value: "1000+", label: "Clients" },
                        { value: "99%", label: "Accuracy" },
                      ].map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-2xl font-bold text-blue-300 mb-1">
                            {stat.value}
                          </div>
                          <div className="text-[10px] uppercase text-white/40 tracking-widest">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM ANGLED CUT ── */}
      <div
        className="absolute bottom-0 left-0 w-full z-20 pointer-events-none"
        style={{ height: "80px" }}
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <polygon points="0,80 720,0 1440,80 1440,80 0,80" fill="#f0f2f1" />
        </svg>
      </div>
    </section>
  );
}
