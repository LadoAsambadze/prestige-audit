"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  Search,
  FileText,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  Award,
  ChevronDown,
  Zap,
  Lock,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import { useRef, useState } from "react";

const auditSteps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description:
      "We begin with a comprehensive intake process to understand your business environment, regulatory obligations, and risk appetite. This phase defines the audit boundaries and objectives.",
    icon: Search,
    duration: "1–2 weeks",
  },
  {
    number: "02",
    title: "Data Collection & Analysis",
    description:
      "Our team gathers documentation, conducts interviews, and analyzes systems. We use industry-leading frameworks (ISO 27001, SOC 2, NIST) to benchmark your current posture.",
    icon: BarChart3,
    duration: "2–4 weeks",
  },
  {
    number: "03",
    title: "Risk Assessment",
    description:
      "Identified findings are classified by severity, likelihood, and business impact. We provide a prioritized risk register with clear ownership and remediation timelines.",
    icon: AlertTriangle,
    duration: "1–2 weeks",
  },
  {
    number: "04",
    title: "Reporting & Recommendations",
    description:
      "You receive an executive summary and a detailed technical report. Recommendations are actionable, cost-aware, and tailored to your team's capacity.",
    icon: FileText,
    duration: "1 week",
  },
  {
    number: "05",
    title: "Remediation Support",
    description:
      "We don't just hand you a report and walk away. Our consultants support your team through remediation, re-testing, and sign-off on resolved findings.",
    icon: CheckCircle2,
    duration: "Ongoing",
  },
];

const auditTypes = [
  {
    icon: Lock,
    title: "Security Audit",
    description:
      "Comprehensive assessment of your information security controls, policies, and infrastructure against recognized frameworks.",
    tags: ["ISO 27001", "SOC 2", "NIST CSF"],
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/10",
  },
  {
    icon: TrendingUp,
    title: "Financial Audit",
    description:
      "Independent review of financial statements, internal controls, and compliance with accounting standards and regulations.",
    tags: ["GAAP", "IFRS", "SOX"],
    color: "from-cyan-500/20 to-teal-500/10",
    border: "border-cyan-500/30",
    glow: "shadow-cyan-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Audit",
    description:
      "Systematic evaluation of adherence to regulatory requirements specific to your industry and operational geography.",
    tags: ["GDPR", "HIPAA", "PCI-DSS"],
    color: "from-indigo-500/20 to-blue-500/10",
    border: "border-indigo-500/30",
    glow: "shadow-indigo-500/10",
  },
  {
    icon: Zap,
    title: "Operational Audit",
    description:
      "Review of processes, workflows, and resource utilization to identify inefficiencies and opportunities for improvement.",
    tags: ["Lean", "Six Sigma", "BPM"],
    color: "from-sky-500/20 to-blue-400/10",
    border: "border-sky-500/30",
    glow: "shadow-sky-500/10",
  },
];

const stats = [
  { value: "500+", label: "Audits Completed", icon: FileText },
  { value: "98%", label: "Client Satisfaction", icon: Award },
  { value: "40+", label: "Industry Verticals", icon: Users },
  { value: "24h", label: "Avg. Response Time", icon: Clock },
];

const faqs = [
  {
    question: "How long does a typical audit take?",
    answer:
      "Timelines vary by scope and organization size. A focused security audit can complete in 3–4 weeks, while a comprehensive enterprise-wide compliance audit may span 8–12 weeks. We provide a detailed project plan during scoping.",
  },
  {
    question: "Will the audit disrupt our day-to-day operations?",
    answer:
      "We design our engagement methodology to minimize disruption. Most interviews and document reviews are scheduled at your convenience, and any active testing is coordinated with your team to avoid peak operational windows.",
  },
  {
    question: "What deliverables can we expect?",
    answer:
      "You'll receive an executive summary, a full technical findings report with severity ratings, a prioritized remediation roadmap, and evidence packages suitable for regulatory submissions or board-level reporting.",
  },
  {
    question: "Do you provide post-audit support?",
    answer:
      "Yes. All engagements include a remediation support window. We offer re-testing services to validate fixes and can provide ongoing advisory retainers for organizations that want continuous audit readiness.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
      >
        <span className="text-white font-semibold text-sm md:text-base pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors"
        >
          <ChevronDown size={16} className="text-blue-300" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <p className="px-6 pb-6 text-blue-100/70 text-sm leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function AuditServicePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="min-h-screen bg-[#050e24] text-white overflow-x-hidden">
      {/* ── HERO ── */}
      <motion.section
        ref={heroRef}
        className="relative w-full bg-[#0a1a3f] pt-40 pb-48 px-5 overflow-hidden text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* BG texture */}
        <motion.div
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url('/background.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: heroY,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none" />

        {/* Animated grid lines */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,179,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          className="mx-auto max-w-7xl relative z-10 px-6"
          style={{ opacity: heroOpacity }}
        >
          {/* Breadcrumb pill */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-blue-200 text-xs font-bold uppercase tracking-widest mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ShieldCheck size={14} />
            Services &nbsp;/&nbsp; Audit
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Audit Services That
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
              Build Real Confidence
            </span>
          </motion.h1>

          <motion.p
            className="text-blue-100/70 max-w-2xl mx-auto text-lg mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Independent, rigorous, and outcome-driven audits across security,
            compliance, financial, and operational domains — so you can make
            decisions with clarity.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-sm overflow-hidden shadow-lg shadow-blue-500/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request an Audit
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full border border-white/20 text-white/80 font-semibold text-sm backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              Download Sample Report
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050e24] to-transparent pointer-events-none" />
      </motion.section>

      {/* ── STATS BAND ── */}
      <section className="relative z-10 -mt-12 px-6 max-w-5xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-6 text-center overflow-hidden hover:border-blue-500/40 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <stat.icon size={20} className="text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-blue-200/60 text-xs font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── AUDIT TYPES ── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-5">
            <ShieldCheck size={12} /> Audit Disciplines
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What We Audit
          </h2>
          <p className="text-blue-100/60 max-w-xl mx-auto">
            From security posture to financial integrity, our specialists cover
            every dimension of organizational risk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {auditTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`relative group rounded-3xl border ${type.border} bg-gradient-to-br ${type.color} backdrop-blur-sm p-8 overflow-hidden shadow-xl ${type.glow} hover:shadow-2xl transition-all duration-300 cursor-pointer`}
            >
              {/* Inner glow on hover */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-blue-500/30 transition-colors">
                  <type.icon size={22} className="text-blue-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {type.title}
                </h3>
                <p className="text-blue-100/65 text-sm leading-relaxed mb-5">
                  {type.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {type.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-blue-200 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ArrowRight
                size={18}
                className="absolute bottom-8 right-8 text-blue-400/40 group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROCESS / STEPS ── */}
      <section className="py-24 px-6 bg-[#07112a] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-5">
              <FileText size={12} /> Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How an Audit Works
            </h2>
            <p className="text-blue-100/60 max-w-xl mx-auto">
              A transparent, structured methodology designed to surface real
              risk — not just paper compliance.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-400/30 to-transparent md:-translate-x-px" />

            <div className="space-y-12">
              {auditSteps.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Step content */}
                    <div
                      className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} pl-16 md:pl-0`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="inline-block bg-white/5 border border-white/10 rounded-2xl p-6 max-w-sm hover:border-blue-500/30 transition-colors"
                      >
                        <div
                          className={`flex items-center gap-3 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <step.icon size={16} className="text-blue-400" />
                          </div>
                          <span className="text-xs text-blue-400/70 font-mono font-bold">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">
                          {step.title}
                        </h3>
                        <p className="text-blue-100/60 text-sm leading-relaxed mb-3">
                          {step.description}
                        </p>
                        <div className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-semibold">
                          <Clock size={12} />
                          {step.duration}
                        </div>
                      </motion.div>
                    </div>

                    {/* Center node */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 md:top-auto flex-shrink-0 w-14 h-14 rounded-full bg-[#07112a] border-2 border-blue-500/40 flex items-center justify-center z-10">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-500/40">
                        {step.number}
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 px-6 max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-5">
            Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Frequently Asked
          </h2>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} {...faq} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a3f] to-[#050e24]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/15 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          className="relative z-10 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-500/30">
            <ShieldCheck size={28} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to strengthen your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
              {" "}
              risk posture?
            </span>
          </h2>
          <p className="text-blue-100/65 mb-10 leading-relaxed">
            Talk to one of our audit specialists. We'll scope an engagement that
            fits your timeline, budget, and compliance objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-sm shadow-lg shadow-blue-500/30"
            >
              <span className="flex items-center justify-center gap-2">
                Schedule a Consultation
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full border border-white/20 text-white/80 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              View Case Studies
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
