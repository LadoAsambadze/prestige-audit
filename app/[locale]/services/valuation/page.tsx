"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft,
  ChevronRight,
  Building2,
  Briefcase,
  TrendingUp,
  PieChart,
  Scale,
  Map,
  CheckCircle2,
  Award,
} from "lucide-react";
import Link from "next/link";

const valuationServices = [
  {
    icon: Building2,
    title: "Real Estate Valuation",
    desc: "Market-value appraisals of residential, commercial, and industrial properties for sale, purchase, financing, or insurance purposes.",
  },
  {
    icon: Briefcase,
    title: "Business Valuation",
    desc: "Comprehensive assessment of a company's fair market value — essential for M&A, shareholder disputes, estate planning, or strategic decisions.",
  },
  {
    icon: TrendingUp,
    title: "Investment Project Assessment",
    desc: "Independent feasibility and valuation analysis of investment projects, including DCF modelling, IRR calculation, and risk-adjusted return analysis.",
  },
  {
    icon: PieChart,
    title: "Intangible Asset Valuation",
    desc: "Valuation of brands, patents, software, customer relationships, and other intangible assets for accounting, licensing, or transaction purposes.",
  },
  {
    icon: Scale,
    title: "Litigation & Dispute Support",
    desc: "Expert valuation opinions and witness services for court proceedings, arbitration, and regulatory disputes requiring independent certification.",
  },
  {
    icon: Map,
    title: "Land & Development Valuation",
    desc: "Appraisals of land plots including development potential analysis, zoning assessment, and highest-and-best-use studies.",
  },
];

const stats = [
  { value: "800+", label: "Valuations Completed" },
  { value: "₾4B+", label: "Assets Valued" },
  { value: "25+", label: "Asset Classes Covered" },
  { value: "RICS", label: "Certified Valuers" },
];

const process = [
  {
    number: "01",
    title: "Scope Definition",
    description:
      "We establish the purpose of valuation, standard of value, and effective date — ensuring the assignment is precisely defined.",
  },
  {
    number: "02",
    title: "Data Collection",
    description:
      "Our valuers gather all relevant financial, physical, and market data — conducting site visits and management interviews where required.",
  },
  {
    number: "03",
    title: "Analysis & Modelling",
    description:
      "We apply the most appropriate valuation methodologies (income, market, cost approaches) and reconcile conclusions into a final value opinion.",
  },
  {
    number: "04",
    title: "Certified Report Delivery",
    description:
      "A comprehensive, certified valuation report is delivered — meeting the requirements of banks, courts, regulators, and auditors.",
  },
];

const checklistItems = [
  "Certified valuers with RICS and local professional accreditation",
  "Compliance with IVS (International Valuation Standards)",
  "Independent and objective — free from conflicts of interest",
  "Accepted by banks, tax authorities, and courts",
  "Detailed methodology and assumptions documentation",
  "Site inspection and management interviews included",
  "Fast turnaround without compromising quality",
  "Post-report advisory support available",
];

const approaches = [
  {
    title: "Income Approach",
    desc: "Values assets based on their capacity to generate future economic benefits — using DCF, capitalization of earnings, or dividend discount models.",
    color: "from-amber-500 to-orange-500",
    bg: "from-amber-50 to-orange-50",
    border: "border-amber-100",
  },
  {
    title: "Market Approach",
    desc: "Derives value by comparing to recent transactions involving similar assets — the most market-reflective methodology when comparable data exists.",
    color: "from-amber-600 to-yellow-500",
    bg: "from-yellow-50 to-amber-50",
    border: "border-yellow-100",
  },
  {
    title: "Cost Approach",
    desc: "Establishes value based on the cost to reproduce or replace an asset, adjusted for physical deterioration and functional or economic obsolescence.",
    color: "from-orange-500 to-red-500",
    bg: "from-orange-50 to-red-50",
    border: "border-orange-100",
  },
];

export default function ValuationServicesPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen bg-[#f3f5f4] font-sans">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative w-full bg-[#1c1207] overflow-hidden min-h-[88vh] flex items-center"
      >
        <motion.div
          className="absolute inset-0 z-0 opacity-60 mix-blend-overlay"
          style={{
            backgroundImage: `url('/bg1.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: heroY,
          }}
        />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-400/15 rounded-full blur-[80px] pointer-events-none" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

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
              className="inline-flex items-center gap-2 text-amber-300/80 hover:text-amber-200 text-sm font-medium transition-colors mb-10 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Services
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs font-bold uppercase tracking-widest mb-6"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Scale size={12} /> Valuation Services
              </motion.div>
              <motion.h1
                className="text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Expert{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-200">
                  Asset Valuation
                </span>{" "}
                You Can Certify
              </motion.h1>
              <motion.p
                className="text-amber-100/60 text-lg leading-relaxed mb-10 max-w-lg"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Credible, independent, and internationally certified valuations
                for real estate, businesses, and intangible assets. Accepted by
                financial institutions, courts, and tax authorities.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.03]"
                >
                  Request a Valuation <ChevronRight size={16} />
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all duration-300 backdrop-blur-sm"
                >
                  Our Services
                </a>
              </motion.div>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-5"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-3xl p-7 text-center"
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl font-extrabold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-amber-200/60 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
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

      {/* ABOUT VALUATION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-amber-500" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                Why It Matters
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              A Valuation Is Only as Good as the Expert Behind It
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-5">
              Whether you're buying, selling, financing, or reporting — the
              credibility of a valuation depends entirely on the methodology,
              independence, and certification of the valuer. An incorrect or
              unsupported opinion can have serious financial and legal
              consequences.
            </p>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-5">
              Our certified valuers apply internationally recognized standards
              (IVS, RICS Red Book) and deploy the most appropriate methodology
              for each asset class. Every report is fully documented,
              defensible, and accepted by major financial institutions and
              government bodies.
            </p>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              From a single property appraisal to a full business valuation for
              a complex M&A transaction, our team has the experience to deliver
              a credible, court-ready opinion on time.
            </p>

            <div className="mt-8 flex items-start gap-4 p-5 bg-amber-50 border border-amber-200/60 rounded-2xl">
              <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-amber-800 mb-1">
                  Internationally Certified
                </p>
                <p className="text-sm text-amber-700">
                  All valuations comply with IVS and are performed by
                  RICS-accredited professionals with recognized expertise.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[40px] bg-amber-500/8 blur-2xl" />
            <div className="relative bg-white rounded-[32px] p-8 shadow-xl border border-amber-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                What Every Engagement Includes
              </h3>
              <ul className="space-y-3.5">
                {checklistItems.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-gray-700"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-[14px] font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUATION APPROACHES */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-amber-500" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                Methodology
              </span>
              <div className="w-8 h-0.5 bg-amber-500" />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Three Approaches to Value
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              We select and reconcile the most appropriate methodology for each
              specific assignment.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {approaches.map((approach, i) => (
              <motion.div
                key={i}
                className={`bg-gradient-to-br ${approach.bg} border ${approach.border} rounded-[28px] p-8`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${approach.color} rounded-2xl flex items-center justify-center mb-5 shadow-md text-white text-xl font-extrabold`}
                >
                  {["I", "M", "C"][i]}
                </div>
                <h3 className="text-[18px] font-bold text-gray-900 mb-3">
                  {approach.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {approach.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-amber-500" />
            <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
              Asset Classes
            </span>
            <div className="w-8 h-0.5 bg-amber-500" />
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Valuation Services
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuationServices.map((svc, i) => (
            <motion.div
              key={i}
              className="group bg-white hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50 border border-gray-100 hover:border-amber-100 rounded-[28px] p-7 transition-all duration-400 cursor-default shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{
                y: -4,
                boxShadow: "0 20px 60px rgba(245,158,11,0.1)",
              }}
            >
              <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center mb-5 shadow-md shadow-amber-100 group-hover:scale-105 transition-transform duration-300">
                <svc.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-[17px] font-bold text-gray-900 mb-2">
                {svc.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-amber-500" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                Our Process
              </span>
              <div className="w-8 h-0.5 bg-amber-500" />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              How a Valuation Works
            </h2>
          </motion.div>
          <div className="relative">
            <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200" />
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
                  <div className="relative inline-flex items-center justify-center w-[72px] h-[72px] rounded-full bg-amber-500 text-white font-extrabold text-xl shadow-xl shadow-amber-200 mb-6 mx-auto">
                    {step.number}
                    <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-md -z-10" />
                  </div>
                  <h3 className="text-[17px] font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-20">
        <motion.div
          className="max-w-7xl mx-auto relative overflow-hidden rounded-[40px] bg-[#1c1207] p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-orange-400/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10">
            <p className="text-amber-300/80 text-sm font-bold uppercase tracking-widest mb-4">
              Get Certified
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
              Know the True Value of Your Assets
            </h2>
            <p className="text-amber-100/60 max-w-lg mx-auto mb-8 text-base leading-relaxed">
              Whether for a transaction, financing, litigation, or reporting —
              our certified valuers deliver opinions you can rely on.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/40 hover:scale-[1.03] text-sm"
              >
                Request a Valuation <ChevronRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all duration-300 backdrop-blur-sm text-sm"
              >
                <ArrowLeft size={16} /> All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
