"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Trophy } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutContentSection() {
  const t = useTranslations("about");

  const features = [t("feature1"), t("feature2"), t("feature3"), t("feature4")];

  return (
    <section className="relative bg-[#f3f5f4] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="w-full lg:w-[55%] relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" as const }}
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] border-[3px] border-white aspect-[16/10] lg:aspect-[4/3]">
              <img
                src="/AllMembers.jpeg"
                alt={t("imageAlt")}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-10 -right-6 hidden xl:flex bg-white p-6 rounded-[28px] shadow-xl items-center gap-4 border border-gray-50"
            >
              <div className="bg-[#2563eb] p-2 rounded-2xl text-white shadow-lg shadow-blue-200">
                <Trophy size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 leading-none">
                  {t("badgeValue")}
                </p>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">
                  {t("badgeLabel")}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[45%] flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              delay: 0.12,
              ease: "easeOut" as const,
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-[#2563eb]" />
              <span className="text-[#2563eb] font-bold uppercase tracking-widest text-xs">
                {t("sectionLabel")}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-5 leading-tight">
              {t("heading")}{" "}
              <span className="text-blue-600">{t("headingHighlight")}</span>
            </h2>

            <p className="text-slate-500 mb-8 max-w-md text-base md:text-lg leading-relaxed">
              {t("body")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="bg-blue-100 rounded-full p-1">
                    <CheckCircle2 className="w-4 h-4 text-[#2563eb]" />
                  </div>
                  <span className="text-slate-700 font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
