"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Users, Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const departments = [
  { label: "Audit", href: "/team/audit", cta: "View Audit Team" },
  { label: "Tax", href: "/team/tax", cta: "View Tax Team" },
  {
    label: "Accounting",
    href: "/team/accounting",
    cta: "View Accounting Team",
  },
  { label: "Valuation", href: "/team/valuation", cta: "View Valuation Team" },
  { label: "Legal", href: "/team/legal", cta: "View Legal Team" },
  {
    label: "Consulting",
    href: "/team/consulting",
    cta: "View Consulting Team",
  },
];

const lineColors = [
  "#2563eb",
  "#0891b2",
  "#059669",
  "#d97706",
  "#dc2626",
  "#7c3aed",
];

const cardThemes = [
  {
    cardBg: "from-blue-50 via-indigo-50 to-white",
    iconBg: "bg-blue-600",
    border: "hover:border-blue-200",
    learnMoreGradient: "from-blue-600 to-indigo-600",
    learnMoreShadow: "hover:shadow-blue-200/60",
    learnMoreText: "text-blue-700",
    learnMoreBg: "from-blue-50 to-indigo-50",
    learnMoreBorder: "border-blue-200/80",
    glowColor: "rgba(37,99,235,0.15)",
    accent: "#2563eb",
  },
  {
    cardBg: "from-cyan-50 via-sky-50 to-white",
    iconBg: "bg-cyan-600",
    border: "hover:border-cyan-200",
    learnMoreGradient: "from-cyan-500 to-sky-600",
    learnMoreShadow: "hover:shadow-cyan-200/60",
    learnMoreText: "text-cyan-700",
    learnMoreBg: "from-cyan-50 to-sky-50",
    learnMoreBorder: "border-cyan-200/80",
    glowColor: "rgba(8,145,178,0.15)",
    accent: "#0891b2",
  },
  {
    cardBg: "from-emerald-50 via-teal-50 to-white",
    iconBg: "bg-emerald-600",
    border: "hover:border-emerald-200",
    learnMoreGradient: "from-emerald-500 to-teal-600",
    learnMoreShadow: "hover:shadow-emerald-200/60",
    learnMoreText: "text-emerald-700",
    learnMoreBg: "from-emerald-50 to-teal-50",
    learnMoreBorder: "border-emerald-200/80",
    glowColor: "rgba(5,150,105,0.15)",
    accent: "#059669",
  },
  {
    cardBg: "from-amber-50 via-yellow-50 to-white",
    iconBg: "bg-amber-500",
    border: "hover:border-amber-200",
    learnMoreGradient: "from-amber-500 to-orange-500",
    learnMoreShadow: "hover:shadow-amber-200/60",
    learnMoreText: "text-amber-700",
    learnMoreBg: "from-amber-50 to-orange-50",
    learnMoreBorder: "border-amber-200/80",
    glowColor: "rgba(217,119,6,0.15)",
    accent: "#d97706",
  },
  {
    cardBg: "from-rose-50 via-pink-50 to-white",
    iconBg: "bg-rose-600",
    border: "hover:border-rose-200",
    learnMoreGradient: "from-rose-500 to-pink-600",
    learnMoreShadow: "hover:shadow-rose-200/60",
    learnMoreText: "text-rose-700",
    learnMoreBg: "from-rose-50 to-pink-50",
    learnMoreBorder: "border-rose-200/80",
    glowColor: "rgba(220,38,38,0.15)",
    accent: "#dc2626",
  },
  {
    cardBg: "from-violet-50 via-purple-50 to-white",
    iconBg: "bg-violet-600",
    border: "hover:border-violet-200",
    learnMoreGradient: "from-violet-600 to-purple-600",
    learnMoreShadow: "hover:shadow-violet-200/60",
    learnMoreText: "text-violet-700",
    learnMoreBg: "from-violet-50 to-purple-50",
    learnMoreBorder: "border-violet-200/80",
    glowColor: "rgba(124,58,237,0.15)",
    accent: "#7c3aed",
  },
];

// ── Mobile-only carousel ───────────────────────────────────────────────────
function MobileCarousel({ isInView }: { isInView: boolean }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <Carousel
        setApi={setApi}
        opts={{ align: "center", loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {departments.map((dept, i) => (
            <CarouselItem key={i} className="pl-4 basis-full">
              <DeptCard
                dept={dept}
                theme={cardThemes[i]}
                cardRef={() => {}}
                index={i}
                isInView={isInView}
                enterFrom="bottom"
                mobileDelay={0.6 + i * 0.08}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-1 bg-white/90 backdrop-blur border-slate-200 hover:bg-white shadow-lg" />
        <CarouselNext className="right-1 bg-white/90 backdrop-blur border-slate-200 hover:bg-white shadow-lg" />
      </Carousel>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-5">
        {departments.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300 rounded-full focus:outline-none"
            style={{
              width: current === i ? "24px" : "8px",
              height: "8px",
              background: current === i ? cardThemes[i].accent : "#cbd5e1",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ── Main section ───────────────────────────────────────────────────────────
export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainDotRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [paths, setPaths] = useState<string[]>([]);
  const [imagePath, setImagePath] = useState<string>("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const computePaths = useCallback(() => {
    const container = containerRef.current;
    const mainDot = mainDotRef.current;
    if (!container || !mainDot) return;

    const cRect = container.getBoundingClientRect();
    const dotRect = mainDot.getBoundingClientRect();
    const startX = dotRect.left + dotRect.width / 2 - cRect.left;
    const startY = dotRect.top + dotRect.height / 2 - cRect.top;

    if (imageRef.current) {
      const imgRect = imageRef.current.getBoundingClientRect();
      const imgBottomY = imgRect.bottom - cRect.top;
      const imgMidX = imgRect.left + imgRect.width / 2 - cRect.left;
      setImagePath(`M ${imgMidX} ${imgBottomY} V ${startY}`);
    }

    const newPaths = cardRefs.current.map((card, i) => {
      if (!card) return "";
      const cardRect = card.getBoundingClientRect();
      const cardMidX = cardRect.left + cardRect.width / 2 - cRect.left;
      const cardTopY = cardRect.top - cRect.top;
      const cardSideY = cardRect.top + cardRect.height / 2 - cRect.top;

      if (i === 0)
        return `M ${startX} ${startY} H ${cardRect.right - cRect.left} V ${cardSideY} H ${cardRect.right - cRect.left}`;
      if (i === 1)
        return `M ${startX} ${startY} H ${cardRect.left - cRect.left} V ${cardSideY} H ${cardRect.left - cRect.left}`;

      const midY = startY + 60;
      return `M ${startX} ${startY} V ${midY} H ${cardMidX} V ${cardTopY}`;
    });

    setPaths(newPaths);
  }, []);

  useEffect(() => {
    computePaths();
    window.addEventListener("resize", computePaths);
    const t = setTimeout(computePaths, 500);
    return () => {
      window.removeEventListener("resize", computePaths);
      clearTimeout(t);
    };
  }, [computePaths]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f3f5f4] py-24 overflow-hidden min-h-screen"
    >
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(37,99,235,0.3), 0 0 0 0 rgba(37,99,235,0.2); }
          50%       { box-shadow: 0 0 30px rgba(37,99,235,0.5), 0 0 20px 8px rgba(37,99,235,0.1); }
        }
        .trunk-dot {
          width: 20px; height: 20px; border-radius: 50%;
          background: #2563eb; border: 4px solid #fff;
          animation: pulseGlow 2s ease-in-out infinite;
          z-index: 30;
        }
      `}</style>

      {/* ══════════ MOBILE ══════════ */}
      <div className="lg:hidden flex flex-col items-center px-6 gap-8">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              className="h-0.5 bg-[#2563eb]"
              initial={{ width: 0 }}
              animate={isInView ? { width: "2rem" } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <span className="text-xs font-medium uppercase tracking-[2px] text-gray-500">
              Our Team
            </span>
            <motion.div
              className="h-0.5 bg-[#2563eb]"
              initial={{ width: 0 }}
              animate={isInView ? { width: "2rem" } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">
            Meet the{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Experts
              </span>
              <motion.span
                className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              />
            </span>
          </h2>
        </motion.div>

        {/* CEO photo */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute -inset-4 rounded-[60px] bg-gradient-to-br from-blue-200/40 via-indigo-100/20 to-transparent blur-xl" />
          <div className="relative rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] w-[240px] border-[10px] border-white bg-white">
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none"
              initial={{ x: "-100%" }}
              animate={isInView ? { x: "220%" } : {}}
              transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
              style={{
                background:
                  "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.7) 50%, transparent 60%)",
              }}
            />
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="4.jpeg"
                alt="CEO"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
              <h3 className="text-lg font-black text-white mb-1">
                Giorgi Baramidze
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">
                Founder & CEO
              </p>
            </div>
          </div>
        </motion.div>

        {/* Carousel */}
        <MobileCarousel isInView={isInView} />
      </div>

      {/* ══════════ DESKTOP ══════════ */}
      <div className="hidden lg:block">
        {/* Header */}
        <motion.div
          className="max-w-7xl mx-auto mb-16 flex flex-col items-center text-center px-6"
          initial={{ opacity: 0, y: -30, filter: "blur(12px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              className="h-0.5 bg-[#2563eb]"
              initial={{ width: 0 }}
              animate={isInView ? { width: "2.5rem" } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.span
              className="text-sm font-medium uppercase tracking-[2px] text-gray-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our Team
            </motion.span>
            <motion.div
              className="h-0.5 bg-[#2563eb]"
              initial={{ width: 0 }}
              animate={isInView ? { width: "2.5rem" } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </div>
          <motion.h2
            className="text-5xl font-black text-slate-800 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Meet the{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Experts
              </span>
              <motion.span
                className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
              />
            </span>
          </motion.h2>
        </motion.div>

        {/* Tree layout */}
        <div
          ref={containerRef}
          className="relative w-full max-w-7xl mx-auto px-6"
        >
          <div className="flex flex-row items-center justify-between gap-4 mb-20">
            <div className="w-[250px] z-20">
              <DeptCard
                dept={departments[0]}
                theme={cardThemes[0]}
                cardRef={(el: any) => (cardRefs.current[0] = el)}
                index={0}
                isInView={isInView}
                enterFrom="left"
              />
            </div>

            <motion.div
              className="relative flex flex-col items-center z-10"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="absolute -inset-4 rounded-[60px] bg-gradient-to-br from-blue-200/40 via-indigo-100/20 to-transparent blur-xl"
                animate={isInView ? { opacity: [0, 0.8, 0.5] } : {}}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <div
                ref={imageRef}
                className="relative group rounded-[50px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] w-[260px] md:w-[380px] border-[12px] border-white bg-white transition-transform duration-500 hover:scale-[1.02]"
              >
                <motion.div
                  className="absolute inset-0 z-10 pointer-events-none"
                  initial={{ x: "-100%", opacity: 1 }}
                  animate={isInView ? { x: "200%", opacity: 0.6 } : {}}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.7) 50%, transparent 60%)",
                  }}
                />
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="4.jpeg"
                    alt="CEO"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <motion.h3
                    className="text-2xl font-black text-white mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    Giorgi Baramidze
                  </motion.h3>
                  <motion.p
                    className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.1 }}
                  >
                    Founder & Chief Executive Officer
                  </motion.p>
                </div>
              </div>
              <div className="h-8" />
              <motion.div
                ref={mainDotRef}
                className="relative"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  delay: 0.8,
                }}
              >
                <div className="trunk-dot" />
                {[0, 1, 2].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute inset-0 rounded-full border-2 border-blue-400"
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 2.5 + ring * 0.8, opacity: 0 }}
                    transition={{
                      duration: 2,
                      delay: 1.2 + ring * 0.4,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            <div className="w-[250px] z-20">
              <DeptCard
                dept={departments[1]}
                theme={cardThemes[1]}
                cardRef={(el: any) => (cardRefs.current[1] = el)}
                index={1}
                isInView={isInView}
                enterFrom="right"
              />
            </div>
          </div>

          {/* SVG lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
          >
            {imagePath && (
              <path
                d={imagePath}
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
                strokeOpacity="0.3"
                strokeLinecap="round"
              />
            )}
            {paths.map(
              (d, i) =>
                d && (
                  <path
                    key={i}
                    d={d}
                    fill="none"
                    stroke={lineColors[i]}
                    strokeWidth="2"
                    strokeOpacity="0.5"
                    strokeLinecap="round"
                  />
                ),
            )}
          </svg>

          {/* Bottom 4 cards */}
          <div className="grid grid-cols-4 gap-6 z-20 relative">
            {departments.slice(2).map((dept, i) => (
              <DeptCard
                key={i}
                dept={dept}
                theme={cardThemes[i + 2]}
                cardRef={(el: any) => (cardRefs.current[i + 2] = el)}
                index={i + 2}
                isInView={isInView}
                enterFrom="bottom"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── DeptCard ───────────────────────────────────────────────────────────────
function DeptCard({
  dept,
  theme,
  cardRef,
  index,
  isInView,
  enterFrom = "bottom",
  mobileDelay,
}: {
  dept: any;
  theme: any;
  cardRef: any;
  index: number;
  isInView: boolean;
  enterFrom?: "left" | "right" | "bottom";
  mobileDelay?: number;
}) {
  const [hovered, setHovered] = useState(false);

  const initialX = enterFrom === "left" ? -80 : enterFrom === "right" ? 80 : 0;
  const initialY = enterFrom === "bottom" ? 60 : 0;
  const delay =
    mobileDelay ??
    (enterFrom === "left"
      ? 0.6
      : enterFrom === "right"
        ? 0.7
        : 0.9 + (index - 2) * 0.12);

  return (
    <motion.div
      ref={cardRef}
      className="w-full"
      initial={{
        opacity: 0,
        x: initialX,
        y: initialY,
        scale: 0.88,
        filter: "blur(8px)",
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
          : {}
      }
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link href={dept.href} className="group block">
        <div
          className={`relative overflow-hidden bg-gradient-to-br ${theme.cardBg} rounded-[2rem] p-6 border border-transparent transition-all duration-500 hover:shadow-2xl ${theme.border} group-hover:-translate-y-2`}
          style={{
            boxShadow: hovered
              ? `0 20px 60px ${theme.glowColor}, 0 0 0 1px ${theme.accent}20`
              : "0 2px 12px rgba(0,0,0,0.05)",
            transition: "box-shadow 0.4s ease, transform 0.3s ease",
          }}
        >
          <motion.div
            className={`absolute -top-8 -right-8 w-28 h-28 rounded-full ${theme.iconBg} blur-2xl`}
            animate={
              hovered
                ? { scale: 1.6, opacity: 0.35 }
                : { scale: 1, opacity: 0.15 }
            }
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: "-100%", opacity: 0 }}
            animate={
              hovered ? { x: "200%", opacity: 0.5 } : { x: "-100%", opacity: 0 }
            }
            transition={{ duration: 0.6 }}
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.7) 50%, transparent 60%)",
            }}
          />
          <motion.div
            className="absolute top-3 right-3"
            initial={{ opacity: 0, scale: 0, rotate: -30 }}
            animate={
              isInView
                ? { opacity: [0, 1, 0.6], scale: [0, 1.2, 1], rotate: 0 }
                : {}
            }
            transition={{ duration: 0.6, delay: delay + 0.3 }}
          >
            <Sparkles size={14} className="text-slate-300" />
          </motion.div>

          <div className="flex flex-col items-center text-center gap-4 relative z-10">
            <motion.div
              className={`p-4 rounded-2xl ${theme.iconBg} text-white shadow-lg`}
              initial={{ scale: 0, rotate: -20 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 14,
                delay: delay + 0.2,
              }}
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <Users size={24} />
            </motion.div>
            <div>
              <motion.h4
                className="text-base font-bold text-slate-800 mb-3"
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: delay + 0.35 }}
              >
                {dept.label}
              </motion.h4>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: delay + 0.45 }}
                className={`inline-flex items-center gap-2 relative overflow-hidden px-4 py-2 rounded-full border ${theme.learnMoreBorder} bg-gradient-to-r ${theme.learnMoreBg} ${theme.learnMoreText} text-[10px] font-bold uppercase tracking-wider shadow-sm transition-all duration-300 group-hover:shadow-lg ${theme.learnMoreShadow} group-hover:border-transparent`}
              >
                <span
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${theme.learnMoreGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {dept.cta}
                </span>
                <motion.div
                  className={`relative z-10 ${theme.learnMoreText} group-hover:text-white`}
                  animate={hovered ? { x: 3 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight size={12} />
                </motion.div>
              </motion.span>
            </div>
          </div>

          <motion.div
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-gradient-to-r ${theme.learnMoreGradient} rounded-full`}
            initial={{ width: 0 }}
            animate={hovered ? { width: "60%" } : { width: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </div>
      </Link>
    </motion.div>
  );
}
