"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft,
  ChevronRight,
  Calculator,
  FileText,
  Globe,
  Shield,
  TrendingDown,
  Users,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

const taxServices = [
  {
    icon: FileText,
    title: "Individual Tax Returns",
    desc: "Accurate preparation and filing of personal income tax returns, including complex cases with foreign income, investments, and multiple sources.",
  },
  {
    icon: Calculator,
    title: "Corporate Tax Compliance",
    desc: "End-to-end corporate tax return preparation, ensuring full compliance with current legislation while identifying every legitimate deduction.",
  },
  {
    icon: TrendingDown,
    title: "Tax Planning & Optimization",
    desc: "Proactive strategies to legally minimize your tax burden — from entity structuring to timing of income and deductions.",
  },
  {
    icon: Globe,
    title: "International Tax Advisory",
    desc: "Guidance on cross-border taxation, transfer pricing, tax treaties, and obligations for businesses operating in multiple jurisdictions.",
  },
  {
    icon: Shield,
    title: "Tax Dispute Resolution",
    desc: "Expert representation during tax authority audits, appeals, and disputes — protecting your interests with documented, defensible positions.",
  },
  {
    icon: Users,
    title: "VAT & Indirect Taxes",
    desc: "Registration, reporting, and compliance for VAT, GST, excise duties, and other indirect taxes across local and international operations.",
  },
];

const stats = [
  { value: "₾2.4B+", label: "Tax Savings Achieved" },
  { value: "1,200+", label: "Tax Returns Filed" },
  { value: "100%", label: "On-Time Filing Rate" },
  { value: "15+", label: "Certified Tax Advisors" },
];

const process = [
  {
    number: "01",
    title: "Financial Review",
    description:
      "We gather and review all relevant financial data, income sources, expenses, and prior filings to build a complete picture.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "Our advisors identify optimization opportunities and design a tax strategy aligned with your goals and risk appetite.",
  },
  {
    number: "03",
    title: "Preparation & Filing",
    description:
      "We prepare all returns with precision, apply every eligible relief, and file on time — every time.",
  },
  {
    number: "04",
    title: "Ongoing Advisory",
    description:
      "Tax doesn't end at filing. We monitor legislative changes and advise year-round to keep you ahead.",
  },
];

const checklistItems = [
  "Compliance with local and international tax law",
  "Proactive identification of tax-saving opportunities",
  "Year-round advisory — not just at filing season",
  "Secure document management and digital filing",
  "Representation before tax authorities if needed",
  "Transparent fixed-fee or retainer pricing",
  "Multi-jurisdiction expertise for global businesses",
  "Fast turnaround with guaranteed accuracy",
];

export default function TaxServicesPage() {
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
        className="relative w-full bg-[#0c2340] overflow-hidden min-h-[88vh] flex items-center"
      >
        <motion.div
          className="absolute inset-0 z-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1800&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: heroY,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[80px] pointer-events-none" />
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
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
              className="inline-flex items-center gap-2 text-emerald-300/80 hover:text-emerald-200 text-sm font-medium transition-colors mb-10 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Services
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-bold uppercase tracking-widest mb-6"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Calculator size={12} /> Tax Services
              </motion.div>
              <motion.h1
                className="text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Smart{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
                  Tax Planning
                </span>{" "}
                & Compliance
              </motion.h1>
              <motion.p
                className="text-emerald-100/60 text-lg leading-relaxed mb-10 max-w-lg"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We navigate the complexity of tax legislation so you don't have
                to. From filing to long-term planning, our advisors ensure
                you're always compliant — and never paying more than necessary.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.03]"
                >
                  Get Tax Advice <ChevronRight size={16} />
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all duration-300 backdrop-blur-sm"
                >
                  Our Tax Services
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
                  <div className="text-emerald-200/60 text-sm font-medium">
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

      {/* WHY TAX MATTERS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                Why It Matters
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Tax Planning Is More Than Filing Returns
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-5">
              Effective tax management is one of the most powerful levers for
              improving your bottom line. Yet most businesses leave significant
              savings on the table by treating tax as an afterthought —
              something to handle at year-end rather than a strategic priority.
            </p>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-5">
              Our advisors take a proactive approach: understanding your
              business model, identifying structuring opportunities, and
              building a tax strategy that grows with you. Whether you're an
              individual, SME, or multinational, the right advice at the right
              time makes a measurable difference.
            </p>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              We also provide peace of mind — knowing that every return is
              accurate, every deadline is met, and every position is defensible
              if ever challenged.
            </p>

            <div className="mt-8 flex items-start gap-4 p-5 bg-amber-50 border border-amber-200/60 rounded-2xl">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-amber-800 mb-1">
                  Did you know?
                </p>
                <p className="text-sm text-amber-700">
                  Businesses that engage tax advisors proactively save an
                  average of 18–24% more in taxes than those who only file
                  reactively.
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
            <div className="absolute -inset-4 rounded-[40px] bg-emerald-600/8 blur-2xl" />
            <div className="relative bg-white rounded-[32px] p-8 shadow-xl border border-emerald-100">
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
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-[14px] font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TAX SERVICE TYPES */}
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
              <div className="w-8 h-0.5 bg-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                Tax Solutions
              </span>
              <div className="w-8 h-0.5 bg-emerald-600" />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Our Tax Services
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              From individuals to corporations, from local to cross-border — we
              handle every tax challenge.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taxServices.map((svc, i) => (
              <motion.div
                key={i}
                className="group bg-[#f3f5f4] hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 border border-transparent hover:border-emerald-100 rounded-[28px] p-7 transition-all duration-400 cursor-default"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 60px rgba(16,185,129,0.1)",
                }}
              >
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center mb-5 shadow-md shadow-emerald-100 group-hover:scale-105 transition-transform duration-300">
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
            <div className="w-8 h-0.5 bg-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
              Our Process
            </span>
            <div className="w-8 h-0.5 bg-emerald-600" />
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            How We Work With You
          </h2>
        </motion.div>
        <div className="relative">
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200" />
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
                <div className="relative inline-flex items-center justify-center w-[72px] h-[72px] rounded-full bg-emerald-600 text-white font-extrabold text-xl shadow-xl shadow-emerald-200 mb-6 mx-auto">
                  {step.number}
                  <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-md -z-10" />
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
          className="max-w-7xl mx-auto relative overflow-hidden rounded-[40px] bg-[#0c2340] p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-teal-400/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-emerald-300" />
              <p className="text-emerald-300/80 text-sm font-bold uppercase tracking-widest">
                Don't Wait Until Filing Season
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
              Start Saving on Taxes Today
            </h2>
            <p className="text-emerald-100/60 max-w-lg mx-auto mb-8 text-base leading-relaxed">
              The best time to start tax planning is now. Speak with our
              advisors and discover how much you could be saving.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/40 hover:scale-[1.03] text-sm"
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
