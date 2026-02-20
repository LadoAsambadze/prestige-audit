"use client";

import React, { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

interface TeamMember {
  name: string;
  title: string;
  department: string;
  image: string;
  id?: string;
  slug?: string;
}

// Department keys used in URL query e.g. ?team=financial-audit
const DEPARTMENTS = [
  { key: "all", label: "All Teams" },
  { key: "financial-audit", label: "Financial Audit" },
  { key: "tax-services", label: "Tax Services" },
  { key: "accounting-services", label: "Accounting Services" },
  { key: "valuation-services", label: "Valuation Services" },
  { key: "legal-support", label: "Legal Support" },
  { key: "business-consulting", label: "Business Consulting" },
] as const;

type DepartmentKey = (typeof DEPARTMENTS)[number]["key"];

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Mitchell",
    title: "Senior Auditor",
    department: "Financial Audit",
    image: "/3.png",
    id: "1",
    slug: "sarah-mitchell",
  },
  {
    name: "James Anderson",
    title: "Tax Planning Specialist",
    department: "Tax Services",
    image: "/4.jpeg",
    id: "2",
    slug: "james-anderson",
  },
  {
    name: "Anna Kovacs",
    title: "Chief Accountant",
    department: "Accounting Services",
    image: "/5.jpeg",
    id: "3",
    slug: "anna-kovacs",
  },
  {
    name: "Emily Rodriguez",
    title: "Business Valuation Expert",
    department: "Valuation Services",
    image: "/6.jpeg",
    id: "4",
    slug: "emily-rodriguez",
  },
  {
    name: "Michael Chen",
    title: "Corporate Lawyer",
    department: "Legal Support",
    image: "/1.png",
    id: "5",
    slug: "michael-chen",
  },
  {
    name: "Sophia Williams",
    title: "Business Strategist",
    department: "Business Consulting",
    image: "/2.png",
    id: "6",
    slug: "sophia-williams",
  },
  {
    name: "David Thompson",
    title: "Tax Consultant",
    department: "Tax Services",
    image: "/3.png",
    id: "7",
    slug: "david-thompson",
  },
  {
    name: "Robert Clarke",
    title: "Audit Manager",
    department: "Financial Audit",
    image: "/4.jpeg",
    id: "8",
    slug: "robert-clarke",
  },
  {
    name: "Nina Patel",
    title: "Management Consultant",
    department: "Business Consulting",
    image: "/5.jpeg",
    id: "9",
    slug: "nina-patel",
  },
  {
    name: "George Bekele",
    title: "Real Estate Appraiser",
    department: "Valuation Services",
    image: "/6.jpeg",
    id: "10",
    slug: "george-bekele",
  },
  {
    name: "Laura Fernandez",
    title: "Bookkeeping Lead",
    department: "Accounting Services",
    image: "/1.png",
    id: "11",
    slug: "laura-fernandez",
  },
  {
    name: "Thomas Müller",
    title: "Legal Risk Manager",
    department: "Legal Support",
    image: "/2.png",
    id: "12",
    slug: "thomas-muller",
  },
  {
    name: "Nino Kvaratskhelia",
    title: "Financial Analyst",
    department: "Financial Audit",
    image: "/3.png",
    id: "13",
    slug: "nino-kvaratskhelia",
  },
];

// "Financial Audit" → "financial-audit"
function deptToKey(dept: string): string {
  return dept.toLowerCase().replace(/\s+/g, "-");
}

// ── TEAM CARD ──────────────────────────────────────────────────────────────
export const TeamCard = React.memo(
  ({ name, title, department, image, slug }: TeamMember) => (
    <div className="group relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-[24px] bg-gray-200">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
        loading="eager"
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-end md:justify-center p-6
                    bg-black/20 md:bg-black/0
                    md:opacity-0 md:group-hover:opacity-100
                    md:backdrop-blur-md
                    transition-all duration-500 ease-in-out"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:hidden" />
        <div className="relative z-10 flex flex-col items-center">
          <span className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
            {department}
          </span>
          <h3 className="text-center text-xl font-bold text-white leading-tight">
            {name}
          </h3>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-widest text-white/90">
            {title}
          </p>
          <Link
            href={`/team/gogita-baramidze`}
            className="mt-4 md:mt-6 w-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity delay-100"
          >
            <div className="flex w-full items-center justify-center gap-2 rounded-full border border-white/50 px-5 py-2 text-xs font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black">
              View Profile
              <ArrowRight className="h-3 w-3" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  ),
);
TeamCard.displayName = "TeamCard";

// ── FILTER BAR ─────────────────────────────────────────────────────────────
function FilterBar({
  active,
  onChange,
}: {
  active: DepartmentKey;
  onChange: (key: DepartmentKey) => void;
}) {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-2 md:gap-3"
      initial={{ opacity: 0, y: -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {DEPARTMENTS.map((dept) => {
        const isActive = active === dept.key;
        return (
          <motion.button
            key={dept.key}
            onClick={() => onChange(dept.key)}
            whileTap={{ scale: 0.95 }}
            className={`
              relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest
              transition-colors duration-200 overflow-hidden
              ${
                isActive
                  ? "text-white shadow-lg shadow-blue-500/20"
                  : "text-gray-500 bg-white border border-gray-200 hover:border-blue-300 hover:text-blue-600"
              }
            `}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full z-0"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{dept.label}</span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}

// ── PAGE ───────────────────────────────────────────────────────────────────
export default function TeamPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const rawTeam = searchParams.get("team") ?? "all";
  const activeFilter: DepartmentKey =
    (DEPARTMENTS.find((d) => d.key === rawTeam)?.key as DepartmentKey) ?? "all";

  const handleFilter = useCallback(
    (key: DepartmentKey) => {
      const params = new URLSearchParams(searchParams.toString());
      if (key === "all") {
        params.delete("team");
      } else {
        params.set("team", key);
      }
      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams],
  );

  const filtered =
    activeFilter === "all"
      ? teamMembers
      : teamMembers.filter((m) => deptToKey(m.department) === activeFilter);

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
    exit: {
      opacity: 0,
      y: -12,
      filter: "blur(4px)",
      transition: { duration: 0.25 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <motion.section
        className="relative w-full bg-[#0a1a3f] pt-40 pb-40 px-5 overflow-hidden text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url('/background.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10 px-6">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-blue-200 text-xs font-bold uppercase tracking-widest mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Users size={14} /> Meet the Experts
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            The Talent Behind <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
              Our Success
            </span>
          </motion.h1>
        </div>
      </motion.section>

      {/* ── TEAM GRID ── */}
      <motion.section
        className="relative z-20 -mt-24 bg-[#f3f5f4] rounded-t-[60px] md:rounded-t-[80px] pt-16 pb-32 px-6 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          {/* ── FILTER BAR ── */}
          <div className="mb-12">
            <FilterBar active={activeFilter} onChange={handleFilter} />
          </div>

          {/* ── HEADER ROW ── */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                className="w-8 h-0.5 bg-[#2563eb]"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">
                {activeFilter === "all"
                  ? "All Teams"
                  : DEPARTMENTS.find((d) => d.key === activeFilter)?.label}
              </h2>
              <motion.div
                className="w-8 h-0.5 bg-[#2563eb]"
                initial={{ scaleX: 0, originX: 1 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeFilter}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.25 }}
                className="text-gray-500 text-sm font-medium"
              >
                Showing {filtered.length} member
                {filtered.length !== 1 ? "s" : ""} · Click to view CV
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* ── GRID ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.05 },
                },
              }}
            >
              {filtered.length > 0 ? (
                filtered.map((member) => (
                  <motion.div key={member.id} variants={itemVariants}>
                    <TeamCard {...member} />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  variants={itemVariants}
                  className="col-span-full flex flex-col items-center justify-center py-24 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Users size={24} className="text-blue-500" />
                  </div>
                  <p className="text-gray-500 text-lg font-semibold">
                    No members found
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Try selecting a different team filter.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  );
}
