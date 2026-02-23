"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft,
  ChevronRight,
  Scale,
  FileSignature,
  Building,
  ShieldAlert,
  Handshake,
  Globe2,
  CheckCircle2,
  Lock,
} from "lucide-react";
import Link from "next/link";

const legalServices = [
  {
    icon: FileSignature,
    title: "Contract Drafting & Review",
    desc: "Precise drafting and legal review of commercial contracts, service agreements, NDAs, and employment contracts — protecting your interests at every stage.",
  },
  {
    icon: Building,
    title: "Corporate Governance",
    desc: "Structuring of corporate entities, shareholder agreements, board resolutions, and internal governance frameworks for sustainable business operations.",
  },
  {
    icon: ShieldAlert,
    title: "Legal Risk Management",
    desc: "Proactive identification and mitigation of legal exposures — from regulatory compliance gaps to contractual liabilities and operational risks.",
  },
  {
    icon: Handshake,
    title: "M&A Legal Support",
    desc: "End-to-end legal assistance for mergers, acquisitions, and joint ventures — including due diligence, transaction structuring, and deal documentation.",
  },
  {
    icon: Globe2,
    title: "Regulatory & Compliance",
    desc: "Guidance on local and international regulatory requirements, licensing, permits, and ongoing compliance obligations specific to your industry.",
  },
  {
    icon: Scale,
    title: "Dispute Resolution",
    desc: "Representation in commercial disputes, mediation, and arbitration proceedings — with strategic litigation support when court action is required.",
  },
];

const stats = [
  { value: "600+", label: "Legal Matters Handled" },
  { value: "98%", label: "Successful Resolutions" },
  { value: "30+", label: "Practice Areas" },
  { value: "18+", label: "Years of Practice" },
];

const process = [
  {
    number: "01",
    title: "Legal Assessment",
    description:
      "We conduct a thorough review of your situation, identify applicable legal frameworks, and assess risks and opportunities.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "Our lawyers design a tailored legal strategy aligned with your business objectives and risk tolerance.",
  },
  {
    number: "03",
    title: "Execution & Documentation",
    description:
      "We prepare, negotiate, and finalize all necessary legal documents with precision and attention to detail.",
  },
  {
    number: "04",
    title: "Ongoing Legal Support",
    description:
      "Our team remains available for ongoing questions, monitoring legal developments, and adapting your strategy as needed.",
  },
];

const checklistItems = [
  "Qualified lawyers with multi-jurisdictional expertise",
  "Confidential and privileged attorney-client relationship",
  "Plain-language explanations — no unnecessary jargon",
  "Proactive monitoring of legal and regulatory changes",
  "Fixed-fee options available for defined scope work",
  "Rapid response in time-sensitive legal matters",
  "Integrated with your finance and accounting team",
  "Full support from advisory through dispute resolution",
];

const practiceAreas = [
  "Commercial Law",
  "Corporate Law",
  "Employment Law",
  "Real Estate Law",
  "Tax Law",
  "Intellectual Property",
  "Banking & Finance",
  "Regulatory Law",
];

export default function LegalSupportPage() {
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
        className="relative w-full bg-[#0d1f12] overflow-hidden min-h-[88vh] flex items-center"
      >
        <motion.div
          className="absolute inset-0 z-0 opacity-50 mix-blend-overlay"
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
              className="inline-flex items-center gap-2 text-rose-300/80 hover:text-rose-200 text-sm font-medium transition-colors mb-10 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Services
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-200 text-xs font-bold uppercase tracking-widest mb-6"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Scale size={12} /> Legal Support
              </motion.div>
              <motion.h1
                className="text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Full-Service{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-200">
                  Legal Support
                </span>{" "}
                for Business
              </motion.h1>
              <motion.p
                className="text-rose-100/60 text-lg leading-relaxed mb-10 max-w-lg"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Experienced legal professionals protecting your business at
                every stage — from formation and contracts to disputes and
                regulatory compliance. Practical advice, not just theoretical
                law.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/30 hover:scale-[1.03]"
                >
                  Speak to a Lawyer <ChevronRight size={16} />
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all duration-300 backdrop-blur-sm"
                >
                  Practice Areas
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
                  <div className="text-rose-200/60 text-sm font-medium">
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

      {/* WHY LEGAL */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-rose-600" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                Why Legal Matters
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Legal Clarity Is a Competitive Advantage
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-5">
              Businesses that treat legal support as an afterthought — reacting
              only when problems arise — face disproportionate costs, delays,
              and reputational damage. The most resilient companies build legal
              rigour into their operations from the start.
            </p>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-5">
              Our legal team works alongside your business as a trusted partner:
              drafting watertight contracts, structuring transactions correctly,
              and ensuring full regulatory compliance before issues become
              disputes.
            </p>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              When disputes do arise, we bring the same strategic mindset —
              pursuing resolution efficiently and, where necessary, vigorously
              representing your interests before courts and arbitration panels.
            </p>

            <div className="mt-8 flex items-start gap-4 p-5 bg-rose-50 border border-rose-200/60 rounded-2xl">
              <Lock className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-rose-800 mb-1">
                  Attorney-Client Privilege
                </p>
                <p className="text-sm text-rose-700">
                  All communications are fully confidential under
                  attorney-client privilege — your information is always
                  protected.
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
            <div className="absolute -inset-4 rounded-[40px] bg-rose-600/8 blur-2xl" />
            <div className="relative bg-white rounded-[32px] p-8 shadow-xl border border-rose-100">
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
                    <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <span className="text-[14px] font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRACTICE AREAS STRIP */}
      <section className="bg-[#0d1f12] py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-rose-300/60 text-xs font-bold uppercase tracking-widest text-center mb-6">
            Practice Areas
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {practiceAreas.map((area, i) => (
              <motion.span
                key={i}
                className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                {area}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
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
              <div className="w-8 h-0.5 bg-rose-600" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                Legal Services
              </span>
              <div className="w-8 h-0.5 bg-rose-600" />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              How We Support Your Business
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Comprehensive legal coverage across every area that matters to
              growing businesses.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalServices.map((svc, i) => (
              <motion.div
                key={i}
                className="group bg-[#f3f5f4] hover:bg-gradient-to-br hover:from-rose-50 hover:to-pink-50 border border-transparent hover:border-rose-100 rounded-[28px] p-7 transition-all duration-400 cursor-default"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 60px rgba(225,29,72,0.08)",
                }}
              >
                <div className="w-12 h-12 bg-rose-600 rounded-2xl flex items-center justify-center mb-5 shadow-md shadow-rose-100 group-hover:scale-105 transition-transform duration-300">
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
            <div className="w-8 h-0.5 bg-rose-600" />
            <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
              Our Approach
            </span>
            <div className="w-8 h-0.5 bg-rose-600" />
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">How We Work</h2>
        </motion.div>
        <div className="relative">
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200" />
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
                <div className="relative inline-flex items-center justify-center w-[72px] h-[72px] rounded-full bg-rose-600 text-white font-extrabold text-xl shadow-xl shadow-rose-200 mb-6 mx-auto">
                  {step.number}
                  <div className="absolute inset-0 rounded-full bg-rose-400/30 blur-md -z-10" />
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
          className="max-w-7xl mx-auto relative overflow-hidden rounded-[40px] bg-[#0d1f12] p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-rose-400/8 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10">
            <p className="text-rose-300/80 text-sm font-bold uppercase tracking-widest mb-4">
              Get Protected
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
              Legal Support Built for Business
            </h2>
            <p className="text-rose-100/60 max-w-lg mx-auto mb-8 text-base leading-relaxed">
              Don't wait for a legal problem to arise. Speak with our team today
              and build the legal framework your business needs to grow with
              confidence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/40 hover:scale-[1.03] text-sm"
              >
                Speak to a Lawyer <ChevronRight size={16} />
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
