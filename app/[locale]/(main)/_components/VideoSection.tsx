"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function VideoSection() {
  const t = useTranslations("main");
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
          <motion.div
            className="w-full lg:w-[58%]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" as const }}
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] border-3 border-white">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl -z-10" />
              <video
                ref={videoRef}
                src="/Video.mp4"
                poster="/Video.png"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[42%] flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              delay: 0.12,
              ease: "easeOut" as const,
            }}
          >
            <div className="flex items-end gap-4 mb-6">
              <motion.span
                className="text-[7rem] lg:text-[9rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-500 select-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.22,
                  ease: "easeOut" as const,
                }}
              >
                25
              </motion.span>
              <div className="mb-6">
                <p className="text-blue-600 mb-1 text-xs font-semibold uppercase tracking-widest">
                  {t("videoSectionYearsLabel")}
                </p>
                <p className="text-slate-800 text-lg font-bold">
                  {t("videoSectionExcellence")}
                </p>
              </div>
            </div>

            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 mb-6" />

            <motion.h2
              className="text-slate-900 mb-5 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.28,
                ease: "easeOut" as const,
              }}
            >
              {t("videoSectionHeading1")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                {t("videoSectionHeadingHighlight")}
              </span>{" "}
              {t("videoSectionHeading2")}
            </motion.h2>

            <motion.p
              className="text-slate-500 mb-8 max-w-md text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.36,
                ease: "easeOut" as const,
              }}
            >
              {t("videoSectionBody")}
            </motion.p>

            <div className="flex gap-8">
              {(
                [
                  { value: "videoStat1Value", label: "videoStat1Label" },
                  { value: "videoStat2Value", label: "videoStat2Label" },
                ] as const
              ).map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.42 + i * 0.09,
                    ease: "easeOut" as const,
                  }}
                >
                  <span className="text-blue-600 text-2xl md:text-3xl font-black">
                    {t(stat.value)}
                  </span>
                  <span className="text-slate-400 mt-0.5 text-xs uppercase tracking-wider">
                    {t(stat.label)}
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
