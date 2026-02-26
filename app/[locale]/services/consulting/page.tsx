"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft,
  ChevronRight,
  Target,
  Lightbulb,
  BarChart,
  Layers,
  Search,
  Repeat,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// ── same token approach as ServicesSection cyan card ──
const cyan = {
  bg: "from-cyan-50 via-sky-50 to-white",
  iconBg: "bg-cyan-600",
  iconShadow: "shadow-cyan-100",
  check: "text-cyan-600",
  border: "hover:border-cyan-200",
  gradient: "from-cyan-500 to-sky-600",
  hoverShadow: "hover:shadow-cyan-200/60",
  text: "text-cyan-700",
  lightBg: "from-cyan-50 to-sky-50",
  lightBorder: "border-cyan-200/80",
};

const consultingServiceIcons = [
  Target,
  Repeat,
  Search,
  Layers,
  BarChart,
  Lightbulb,
];

// ── Service card ──
function ConsultingServiceCard({
  iconIndex,
  index,
}: {
  iconIndex: number;
  index: number;
}) {
  const t = useTranslations("consulting");
  const Icon = consultingServiceIcons[iconIndex];
  const n = iconIndex + 1;

  return (
    <motion.div
      className={`group relative rounded-[28px] bg-gradient-to-br ${cyan.bg} border border-transparent ${cyan.border} p-6 shadow-sm hover:shadow-xl ${cyan.hoverShadow} transition-all duration-500 overflow-hidden`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-20 blur-2xl bg-cyan-600" />
      <div
        className={`relative z-10 w-11 h-11 p-2.5 ${cyan.iconBg} text-white rounded-xl shadow-lg ${cyan.iconShadow} mb-4 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="relative z-10 text-[16px] font-bold text-gray-900 mb-1.5">
        {t(`service${n}Title`)}
      </h3>
      <p className="relative z-10 text-gray-500 text-sm leading-relaxed">
        {t(`service${n}Desc`)}
      </p>
    </motion.div>
  );
}

// ── Page ──
export default function BusinessConsultingPage() {
  const t = useTranslations("consulting");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const checklist = [
    t("checklist1"),
    t("checklist2"),
    t("checklist3"),
    t("checklist4"),
    t("checklist5"),
    t("checklist6"),
    t("checklist7"),
    t("checklist8"),
  ];

  const outcomes = [
    {
      metric: t("outcome1Metric"),
      value: t("outcome1Value"),
      desc: t("outcome1Desc"),
    },
    {
      metric: t("outcome2Metric"),
      value: t("outcome2Value"),
      desc: t("outcome2Desc"),
    },
    {
      metric: t("outcome3Metric"),
      value: t("outcome3Value"),
      desc: t("outcome3Desc"),
    },
  ];

  const process = [
    {
      number: t("process1Number"),
      title: t("process1Title"),
      desc: t("process1Desc"),
    },
    {
      number: t("process2Number"),
      title: t("process2Title"),
      desc: t("process2Desc"),
    },
    {
      number: t("process3Number"),
      title: t("process3Title"),
      desc: t("process3Desc"),
    },
    {
      number: t("process4Number"),
      title: t("process4Title"),
      desc: t("process4Desc"),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3f5f4] font-sans">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative w-full bg-[#041224] overflow-hidden min-h-[88vh] flex items-center"
      >
        <motion.div
          className="absolute inset-0 z-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url('/Office.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: heroY,
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
          {[200, 350, 500, 650].map((size, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-white/40"
              style={{ width: size, height: size }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-cyan-300/80 hover:text-cyan-200 text-sm font-medium transition-colors mb-10 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              {t("heroBackLink")}
            </Link>
          </motion.div>

          <div className="max-w-2xl">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 text-xs font-bold uppercase tracking-widest mb-6"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Target size={12} /> {t("heroBadge")}
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("heroHeading")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-200">
                {t("heroHeadingHighlight")}
              </span>
            </motion.h1>

            <motion.p
              className="text-cyan-100/60 text-lg leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t("heroBody")}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.03]"
              >
                {t("heroCta")} <ChevronRight size={16} />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all duration-300 backdrop-blur-sm"
              >
                {t("heroExplore")}
              </a>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,80 C360,20 1080,20 1440,80 L1440,80 L0,80 Z"
              fill="#f3f5f4"
            />
          </svg>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              className={`relative rounded-[28px] bg-gradient-to-br ${cyan.bg} border ${cyan.lightBorder} p-8 shadow-sm text-center overflow-hidden`}
              whileHover={{
                y: -4,
                boxShadow: "0 20px 60px rgba(6,182,212,0.12)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-20 blur-2xl bg-cyan-600" />
              <div
                className={`relative z-10 text-5xl font-extrabold ${cyan.text} mb-2`}
              >
                {outcome.value}
              </div>
              <div className="relative z-10 text-base font-bold text-gray-900 mb-2">
                {outcome.metric}
              </div>
              <p className="relative z-10 text-gray-500 text-sm leading-relaxed">
                {outcome.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── PHILOSOPHY + CHECKLIST ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-cyan-600" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                {t("philosophyLabel")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              {t("philosophyHeading")}
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              {t("philosophyBody1")}
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              {t("philosophyBody2")}
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              {t("philosophyBody3")}
            </p>

            <div className="flex items-start gap-4 p-5 bg-cyan-50 border border-cyan-200/60 rounded-2xl">
              <ArrowUpRight className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-cyan-800 mb-1">
                  {t("philosophyAlertTitle")}
                </p>
                <p className="text-sm text-cyan-700">
                  {t("philosophyAlertBody")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className={`relative rounded-[28px] bg-gradient-to-br ${cyan.bg} border ${cyan.lightBorder} p-7 shadow-sm overflow-hidden`}
            >
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full opacity-20 blur-2xl bg-cyan-600" />
              <h3 className="relative z-10 text-[16px] font-bold text-gray-900 mb-5">
                {t("checklistCardTitle")}
              </h3>
              <ul className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {checklist.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2.5 text-gray-700"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                  >
                    <CheckCircle2
                      className={`w-4 h-4 ${cyan.check} shrink-0 mt-0.5`}
                    />
                    <span className="text-[13px] font-medium leading-snug">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-cyan-600" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                {t("servicesLabel")}
              </span>
              <div className="w-8 h-0.5 bg-cyan-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              {t("servicesHeading")}
            </h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto text-sm">
              {t("servicesBody")}
            </p>
          </motion.div>

          {/* Mobile carousel */}
          <div className="block md:hidden">
            <Carousel opts={{ align: "start", loop: false }} className="w-full">
              <CarouselContent className="-ml-0 mr-6">
                {consultingServiceIcons.map((_, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-6 basis-[85%] sm:basis-[70%]"
                  >
                    <ConsultingServiceCard iconIndex={i} index={i} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingServiceIcons.map((_, i) => (
              <ConsultingServiceCard key={i} iconIndex={i} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-[#f3f5f4] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-cyan-600" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                {t("processLabel")}
              </span>
              <div className="w-8 h-0.5 bg-cyan-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              {t("processHeading")}
            </h2>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-200" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  <div className="relative inline-flex items-center justify-center w-[72px] h-[72px] rounded-full bg-cyan-600 text-white font-extrabold text-xl shadow-xl shadow-cyan-200 mb-6 mx-auto">
                    {step.number}
                    <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-md -z-10" />
                  </div>
                  <h3 className="text-[16px] font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 lg:px-12 py-16 md:py-20">
        <motion.div
          className="max-w-7xl mx-auto relative overflow-hidden rounded-[36px] bg-[#041224] p-10 md:p-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
            {[300, 500, 700].map((size, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-white/40"
                style={{ width: size, height: size }}
              />
            ))}
          </div>
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <p className="text-cyan-300/80 text-xs font-bold uppercase tracking-widest mb-3">
              {t("ctaLabel")}
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              {t("ctaHeading")}
            </h2>
            <p className="text-cyan-100/60 max-w-md mx-auto mb-7 text-sm leading-relaxed">
              {t("ctaBody")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/40 hover:scale-[1.03] text-sm"
              >
                {t("ctaBook")} <ChevronRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all duration-300 backdrop-blur-sm text-sm"
              >
                <ArrowLeft size={16} /> {t("ctaAllServices")}
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
