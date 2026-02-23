"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft,
  ChevronRight,
  BookOpen,
  Receipt,
  Users,
  BarChart2,
  RefreshCw,
  Database,
  CheckCircle2,
  Zap,
} from "lucide-react";
import Link from "next/link";

const accountingServices = [
  {
    icon: BookOpen,
    title: "Daily Bookkeeping",
    desc: "Systematic recording of every financial transaction — sales, purchases, payroll, and expenses — keeping your ledger accurate and current.",
  },
  {
    icon: BarChart2,
    title: "Financial Statement Preparation",
    desc: "Professional preparation of income statements, balance sheets, and cash flow reports aligned with IFRS or local GAAP requirements.",
  },
  {
    icon: Users,
    title: "Payroll Management",
    desc: "End-to-end payroll processing including calculations, statutory deductions, payslips, and submissions to tax and social insurance authorities.",
  },
  {
    icon: Receipt,
    title: "Accounts Payable & Receivable",
    desc: "Full management of vendor payments and client invoicing — improving cash flow and reducing the risk of late payments or disputes.",
  },
  {
    icon: Database,
    title: "Cloud Accounting Setup",
    desc: "Implementation and training on cloud-based accounting platforms (QuickBooks, Xero, 1C) tailored to your business processes.",
  },
  {
    icon: RefreshCw,
    title: "Accounting Clean-Up & Migration",
    desc: "Restoration of disorganized records, reconciliation of historical discrepancies, and migration from legacy systems to modern platforms.",
  },
];

const stats = [
  { value: "300+", label: "Active Clients" },
  { value: "99.8%", label: "Accuracy Rate" },
  { value: "48h", label: "Report Turnaround" },
  { value: "12+", label: "Software Platforms" },
];

const process = [
  {
    number: "01",
    title: "Onboarding & Setup",
    description:
      "We review your current records, configure your chart of accounts, and establish workflows tailored to your business structure.",
  },
  {
    number: "02",
    title: "Daily Operations",
    description:
      "Our team handles all transaction recording, reconciliations, and documentation management on a continuous basis.",
  },
  {
    number: "03",
    title: "Monthly Reporting",
    description:
      "You receive clear, timely financial statements each month — with commentary explaining what the numbers mean for your business.",
  },
  {
    number: "04",
    title: "Review & Optimization",
    description:
      "Quarterly reviews identify process improvements, cost savings, and ensure your accounting infrastructure scales with growth.",
  },
];

const checklistItems = [
  "Dedicated accountant assigned to your account",
  "Real-time access to your financial data via client portal",
  "Monthly management accounts with plain-language commentary",
  "Bank reconciliations performed weekly",
  "All statutory filings prepared and submitted on time",
  "Payroll processed accurately with full compliance",
  "Scalable service — grows alongside your business",
  "Seamless handoff to audit or tax teams when needed",
];

export default function AccountingServicesPage() {
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
        className="relative w-full bg-[#1a0f3c] overflow-hidden min-h-[88vh] flex items-center"
      >
        <motion.div
          className="absolute inset-0 z-0 opacity-20 mix-blend-overlay"
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
              className="inline-flex items-center gap-2 text-violet-300/80 hover:text-violet-200 text-sm font-medium transition-colors mb-10 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Services
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-200 text-xs font-bold uppercase tracking-widest mb-6"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <BookOpen size={12} /> Accounting Services
              </motion.div>
              <motion.h1
                className="text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Full-Cycle{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-200">
                  Accounting
                </span>{" "}
                You Can Trust
              </motion.h1>
              <motion.p
                className="text-violet-100/60 text-lg leading-relaxed mb-10 max-w-lg"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                From day-one bookkeeping to month-end close and statutory
                reporting, we handle every aspect of your accounting so you can
                focus entirely on running your business.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:scale-[1.03]"
                >
                  Get Started <ChevronRight size={16} />
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
                  <div className="text-violet-200/60 text-sm font-medium">
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

      {/* WHY ACCOUNTING */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-violet-600" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                The Foundation
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Accurate Accounting Is the Foundation of Every Business Decision
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-5">
              Every strategic decision you make — hiring, investment, expansion
              — relies on having accurate, up-to-date financial data. Poor
              accounting doesn't just create compliance risk; it obscures the
              true health of your business and leads to costly mistakes.
            </p>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-5">
              Our full-cycle accounting service eliminates the guesswork. We
              maintain your books with meticulous accuracy, close your accounts
              on time every month, and deliver reporting that actually helps you
              understand your business.
            </p>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              Whether you're a startup needing to set up from scratch, an SME
              looking to outsource a growing accounting function, or an
              established business migrating to modern cloud systems, we have
              the expertise to deliver.
            </p>

            <div className="mt-8 flex items-start gap-4 p-5 bg-violet-50 border border-violet-200/60 rounded-2xl">
              <Zap className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-violet-800 mb-1">
                  Speed & Accuracy
                </p>
                <p className="text-sm text-violet-700">
                  Our digital-first workflow means your books are always current
                  — no more waiting weeks for month-end figures.
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
            <div className="absolute -inset-4 rounded-[40px] bg-violet-600/8 blur-2xl" />
            <div className="relative bg-white rounded-[32px] p-8 shadow-xl border border-violet-100">
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
                    <CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                    <span className="text-[14px] font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
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
              <div className="w-8 h-0.5 bg-violet-600" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                What We Offer
              </span>
              <div className="w-8 h-0.5 bg-violet-600" />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Accounting Services
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              A complete suite of accounting solutions — from daily transactions
              to strategic financial reporting.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accountingServices.map((svc, i) => (
              <motion.div
                key={i}
                className="group bg-[#f3f5f4] hover:bg-gradient-to-br hover:from-violet-50 hover:to-purple-50 border border-transparent hover:border-violet-100 rounded-[28px] p-7 transition-all duration-400 cursor-default"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 60px rgba(124,58,237,0.1)",
                }}
              >
                <div className="w-12 h-12 bg-violet-600 rounded-2xl flex items-center justify-center mb-5 shadow-md shadow-violet-100 group-hover:scale-105 transition-transform duration-300">
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

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-violet-600" />
            <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
              How It Works
            </span>
            <div className="w-8 h-0.5 bg-violet-600" />
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our Accounting Process
          </h2>
        </motion.div>
        <div className="relative">
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-violet-200 via-violet-400 to-violet-200" />
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
                <div className="relative inline-flex items-center justify-center w-[72px] h-[72px] rounded-full bg-violet-600 text-white font-extrabold text-xl shadow-xl shadow-violet-200 mb-6 mx-auto">
                  {step.number}
                  <div className="absolute inset-0 rounded-full bg-violet-400/30 blur-md -z-10" />
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

      {/* CTA */}
      <section className="px-6 lg:px-12 pb-20">
        <motion.div
          className="max-w-7xl mx-auto relative overflow-hidden rounded-[40px] bg-[#1a0f3c] p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-violet-500/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-purple-400/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10">
            <p className="text-violet-300/80 text-sm font-bold uppercase tracking-widest mb-4">
              Outsource Your Accounting
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
              Focus on Growth, We'll Handle the Books
            </h2>
            <p className="text-violet-100/60 max-w-lg mx-auto mb-8 text-base leading-relaxed">
              Let our experienced accountants take the administrative burden off
              your plate — giving you clarity, compliance, and time back.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/40 hover:scale-[1.03] text-sm"
              >
                Start Today <ChevronRight size={16} />
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
