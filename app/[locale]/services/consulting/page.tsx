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

const consultingServices = [
  {
    icon: Target,
    title: "Business Strategy",
    desc: "Development of long-term growth strategies, competitive positioning, and roadmaps that align your organization's resources with market opportunities.",
  },
  {
    icon: Repeat,
    title: "Process Optimization",
    desc: "Systematic analysis and redesign of core business processes to eliminate inefficiencies, reduce costs, and improve operational performance.",
  },
  {
    icon: Search,
    title: "Market Analysis",
    desc: "In-depth research into market dynamics, competitor landscapes, customer segments, and demand drivers to inform strategic decision-making.",
  },
  {
    icon: Layers,
    title: "Organizational Design",
    desc: "Redesign of organizational structures, roles, and governance frameworks to improve accountability, agility, and alignment with strategy.",
  },
  {
    icon: BarChart,
    title: "Performance Management",
    desc: "Development of KPI frameworks, dashboards, and management reporting systems that keep leadership informed and teams accountable.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Transformation",
    desc: "Facilitation of digital transformation, business model innovation, and change management programs that future-proof your organization.",
  },
];

const stats = [
  { value: "150+", label: "Strategy Projects" },
  { value: "32%", label: "Avg. Efficiency Gain" },
  { value: "90+", label: "Industries Served" },
  { value: "4.9★", label: "Client Satisfaction" },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We immerse ourselves in your business — conducting interviews, reviewing data, and mapping current-state operations to identify root issues.",
  },
  {
    number: "02",
    title: "Diagnosis",
    description:
      "Our consultants synthesize findings into a clear diagnosis: where you are, where the gaps are, and where the biggest opportunities lie.",
  },
  {
    number: "03",
    title: "Solution Design",
    description:
      "We develop practical, actionable recommendations tailored to your context — not generic frameworks copy-pasted from textbooks.",
  },
  {
    number: "04",
    title: "Implementation Support",
    description:
      "We don't just deliver reports. We stay alongside you during implementation to ensure recommendations translate into real results.",
  },
];

const checklistItems = [
  "Experienced consultants with P&L accountability backgrounds",
  "Data-driven analysis — every recommendation is evidence-based",
  "Customized solutions — no one-size-fits-all frameworks",
  "Clear deliverables and measurable success metrics defined upfront",
  "Hands-on implementation support, not just slide decks",
  "Knowledge transfer — building your team's internal capability",
  "Flexible engagement models: project, retainer, or embedded",
  "Confidential and conflict-free advisory",
];

const outcomes = [
  {
    metric: "Revenue Growth",
    value: "+28%",
    desc: "average client revenue growth in year one post-engagement",
  },
  {
    metric: "Cost Reduction",
    value: "-22%",
    desc: "average operational cost reduction through process optimization",
  },
  {
    metric: "Time-to-Decision",
    value: "-40%",
    desc: "faster management decision-making with improved reporting frameworks",
  },
];

export default function BusinessConsultingPage() {
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
        {/* Concentric rings effect */}
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
              Back to Services
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 text-xs font-bold uppercase tracking-widest mb-6"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Target size={12} /> Business Consulting
              </motion.div>
              <motion.h1
                className="text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Strategic Advice That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-200">
                  Drives Growth
                </span>
              </motion.h1>
              <motion.p
                className="text-cyan-100/60 text-lg leading-relaxed mb-10 max-w-lg"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We work with ambitious businesses to sharpen strategy, unlock
                operational efficiency, and build the management systems needed
                to scale. Practical consulting that delivers measurable results
                — not just recommendations.
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
                  Start a Conversation <ChevronRight size={16} />
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
                  <div className="text-cyan-200/60 text-sm font-medium">
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

      {/* OUTCOMES */}
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
              className="bg-white rounded-[28px] p-8 border border-gray-100 shadow-sm text-center"
              whileHover={{
                y: -4,
                boxShadow: "0 20px 60px rgba(6,182,212,0.1)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-5xl font-extrabold text-cyan-600 mb-2">
                {outcome.value}
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">
                {outcome.metric}
              </div>
              <p className="text-gray-500 text-sm">{outcome.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-cyan-600" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                Our Philosophy
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Good Strategy Is Nothing Without Execution
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-5">
              Most consulting engagements produce impressive documents that
              gather dust. We operate differently. From the first conversation,
              our focus is on the changes that will actually be implemented —
              and the measurable results they deliver.
            </p>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-5">
              Our consultants have led businesses themselves. They understand
              the constraints of real organizations — limited resources,
              competing priorities, and the complexity of change. That
              operational experience shapes every recommendation we make.
            </p>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              We engage as partners, not vendors: aligning our incentives with
              your outcomes, staying involved through implementation, and
              measuring success by the results your business achieves — not the
              thickness of our final report.
            </p>

            <div className="mt-8 flex items-start gap-4 p-5 bg-cyan-50 border border-cyan-200/60 rounded-2xl">
              <ArrowUpRight className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-cyan-800 mb-1">
                  Results-Oriented
                </p>
                <p className="text-sm text-cyan-700">
                  We define measurable success criteria before every engagement
                  begins — so you always know exactly what you're getting.
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
            <div className="absolute -inset-4 rounded-[40px] bg-cyan-600/8 blur-2xl" />
            <div className="relative bg-white rounded-[32px] p-8 shadow-xl border border-cyan-100">
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
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                    <span className="text-[14px] font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
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
              <div className="w-8 h-0.5 bg-cyan-600" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
                What We Do
              </span>
              <div className="w-8 h-0.5 bg-cyan-600" />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Consulting Services
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Across strategy, operations, and performance — we help businesses
              reach the next level.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingServices.map((svc, i) => (
              <motion.div
                key={i}
                className="group bg-[#f3f5f4] hover:bg-gradient-to-br hover:from-cyan-50 hover:to-sky-50 border border-transparent hover:border-cyan-100 rounded-[28px] p-7 transition-all duration-400 cursor-default"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 60px rgba(6,182,212,0.1)",
                }}
              >
                <div className="w-12 h-12 bg-cyan-600 rounded-2xl flex items-center justify-center mb-5 shadow-md shadow-cyan-100 group-hover:scale-105 transition-transform duration-300">
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
            <div className="w-8 h-0.5 bg-cyan-600" />
            <span className="text-xs font-bold uppercase tracking-[2px] text-gray-500">
              How We Engage
            </span>
            <div className="w-8 h-0.5 bg-cyan-600" />
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our Consulting Process
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
          className="max-w-7xl mx-auto relative overflow-hidden rounded-[40px] bg-[#041224] p-12 md:p-16 text-center"
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
            <p className="text-cyan-300/80 text-sm font-bold uppercase tracking-widest mb-4">
              Let's Grow Together
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
              Ready to Transform Your Business?
            </h2>
            <p className="text-cyan-100/60 max-w-lg mx-auto mb-8 text-base leading-relaxed">
              Tell us about your challenges and ambitions. In a 45-minute
              conversation, we can identify the highest-impact opportunities for
              your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/40 hover:scale-[1.03] text-sm"
              >
                Book a Strategy Call <ChevronRight size={16} />
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
