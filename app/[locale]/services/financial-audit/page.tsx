"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle2,
  ArrowLeft,
  TrendingUp,
  ShieldCheck,
  FileSearch,
  BarChart3,
  ClipboardCheck,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const auditSteps = [
  {
    number: "01",
    title: "Initial Planning",
    description:
      "We begin with a thorough understanding of your business, industry context, and key risk areas. Our team reviews prior reports and engages with management to define the audit scope.",
  },
  {
    number: "02",
    title: "Risk Assessment",
    description:
      "We identify and evaluate potential misstatements and control weaknesses. Our risk-based approach ensures we focus time and resources where it matters most.",
  },
  {
    number: "03",
    title: "Fieldwork & Testing",
    description:
      "Our auditors perform substantive testing of transactions, balances, and controls. We gather sufficient evidence to form an informed, objective opinion.",
  },
  {
    number: "04",
    title: "Reporting & Conclusions",
    description:
      "We deliver a comprehensive audit report with findings, recommendations, and a clear audit opinion — giving stakeholders confidence in your financial statements.",
  },
];

const auditServices = [
  {
    icon: FileSearch,
    title: "Statutory Financial Audit",
    desc: "Full audit of annual financial statements in compliance with local and international accounting standards (IFRS, GAAP).",
  },
  {
    icon: ShieldCheck,
    title: "Internal Control Review",
    desc: "Evaluation of your internal control environment to identify gaps, reduce fraud risk, and improve operational reliability.",
  },
  {
    icon: BarChart3,
    title: "Due Diligence Audit",
    desc: "Pre-transaction financial due diligence for mergers, acquisitions, and investments — uncovering hidden risks before you commit.",
  },
  {
    icon: AlertTriangle,
    title: "Forensic Audit",
    desc: "Investigation of financial irregularities, suspected fraud, and litigation support with detailed, defensible documentation.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Audit",
    desc: "Verification that your business meets all applicable regulatory, tax, and industry-specific compliance requirements.",
  },
  {
    icon: TrendingUp,
    title: "Performance Audit",
    desc: "Assessment of whether financial resources are managed economically and efficiently in pursuit of your strategic objectives.",
  },
];

const stats = [
  { value: "500+", label: "Audits Completed" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "20+", label: "Years of Experience" },
  { value: "40+", label: "Certified Specialists" },
];

const benefits = [
  "Audits conducted in accordance with ISA, IFRS, and local GAAP",
  "Dedicated senior auditor assigned to your engagement",
  "Digital-first workflow with secure client portal access",
  "Timely delivery — we respect your deadlines",
  "Clear, jargon-free reporting for management and boards",
  "Ongoing advisory support beyond the audit itself",
  "Strict confidentiality and data security protocols",
  "Independent, objective opinion you can rely on",
];

export default function FinancialAuditPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen bg-[#f3f5f4] font-sans">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative w-full bg-[#0a1a3f] overflow-hidden min-h-[88vh] flex items-center"
      >
        {/* Background image parallax */}
        <motion.div
          className="absolute inset-0 z-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1800&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: heroY,
          }}
        />

        {/* Gradient orbs */}
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
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-blue-300/80 hover:text-blue-200 text-sm font-medium transition-colors mb-10 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Services
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest mb-6"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <FileSearch size={12} /> Financial Audit
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Professional{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                  Audit
                </span>{" "}
                Services
              </motion.h1>

              <motion.p
                className="text-blue-100/70 text-lg leading-relaxed mb-10 max-w-lg"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                An independent, objective assessment of your financial
                statements. We deliver clarity, compliance, and confidence — so
                your stakeholders can trust the numbers.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.03]"
                >
                  Request an Audit <ChevronRight size={16} />
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all duration-300 backdrop-blur-sm"
                >
                  Explore Services
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom wave */}
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

      {/* ── WHAT IS AN AUDIT ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                What We Do
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              What Is a Financial Audit — and Why Does It Matter?
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-5">
              A financial audit is an independent examination of your company's
              financial records, transactions, and statements. The purpose is
              simple: to provide an objective opinion on whether your financial
              statements present a true and fair view of your financial
              position.
            </p>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-5">
              Beyond regulatory compliance, a well-conducted audit strengthens
              internal controls, builds investor and lender confidence, uncovers
              inefficiencies, and positions your business for sustainable
              growth. It's not just a checkbox — it's a strategic asset.
            </p>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              Our team of certified auditors brings deep industry knowledge and
              strict adherence to International Standards on Auditing (ISA),
              ensuring every engagement is thorough, independent, and
              professionally executed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[40px] bg-blue-600/10 blur-2xl" />
            <div className="relative bg-white rounded-[32px] p-8 shadow-xl border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                What's Included in Every Audit
              </h3>
              <ul className="space-y-3.5">
                {benefits.map((b, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-gray-700"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-[14px] font-medium">{b}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── AUDIT TYPES ── */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                Audit Types
              </span>
              <div className="w-8 h-0.5 bg-blue-600" />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Our Audit Services
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              From statutory obligations to strategic investigations, we cover
              every dimension of financial assurance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditServices.map((svc, i) => (
              <motion.div
                key={i}
                className="group bg-[#f3f5f4] hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 border border-transparent hover:border-blue-100 rounded-[28px] p-7 transition-all duration-400 cursor-default"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 60px rgba(37,99,235,0.1)",
                }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-5 shadow-md shadow-blue-100 group-hover:scale-105 transition-transform duration-300">
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
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-blue-600" />
            <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
              Our Process
            </span>
            <div className="w-8 h-0.5 bg-blue-600" />
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            How We Conduct Your Audit
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            A structured, transparent process designed to minimise disruption
            and maximise insight.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {auditSteps.map((step, i) => (
              <motion.div
                key={i}
                className="relative text-center"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="relative inline-flex items-center justify-center w-[72px] h-[72px] rounded-full bg-blue-600 text-white font-extrabold text-xl shadow-xl shadow-blue-200 mb-6 mx-auto">
                  {step.number}
                  <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-md -z-10" />
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
      </section>

      {/* ── CTA BANNER ── */}
      <section className="px-6 lg:px-12 pb-20">
        <motion.div
          className="max-w-7xl mx-auto relative overflow-hidden rounded-[40px] bg-[#0a1a3f] p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-cyan-400/15 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <p className="text-blue-300/80 text-sm font-bold uppercase tracking-widest mb-4">
              Ready to get started?
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
              Let's Audit Your Business — Together
            </h2>
            <p className="text-blue-100/60 max-w-lg mx-auto mb-8 text-base leading-relaxed">
              Speak with one of our senior auditors today. We'll assess your
              needs and design an engagement that delivers real value — not just
              compliance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40 hover:scale-[1.03] text-sm"
              >
                Book a Free Consultation <ChevronRight size={16} />
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
