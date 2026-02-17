"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Rocket,
  Target,
  Info,
  Trophy,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    {
      icon: <Users className="w-5 h-5" />,
      label: "Global Clients",
      value: "1,300+",
    },
    {
      icon: <Target className="w-5 h-5" />,
      label: "Projects Done",
      value: "450+",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      label: "Experience",
      value: "12+ Yrs",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* 1. HERO HEADER */}
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
            <Info size={14} /> Get to know us
          </motion.div>
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-white leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Crafting Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
              Excellence Since 2012
            </span>
          </motion.h1>
        </div>
      </motion.section>

      {/* 2. CONTENT SECTION */}
      <section className="relative z-20 -mt-24 bg-[#f3f5f4] rounded-t-[60px] md:rounded-t-[80px] pt-24 pb-32 px-6 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Widened Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-[40px] md:rounded-[50px] overflow-hidden shadow-2xl aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src="/AllMembers.jpeg"
                  alt="Our Workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
              </div>

              {/* Updated Floating Badge: Years of Excellence */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-16 -right-8 hidden xl:flex bg-white p-8 rounded-[32px] shadow-xl items-center gap-5 border border-gray-50"
              >
                <div className="bg-[#2563eb] p-2 rounded-2xl text-white shadow-lg shadow-blue-200">
                  <Trophy size={28} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 leading-none">
                    12+
                  </p>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">
                    Years of Excellence
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Content Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-0.5 bg-[#2563eb]" />
                <span className="text-[#2563eb] font-bold uppercase tracking-widest text-xs">
                  Our Legacy
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Empowering businesses with{" "}
                <span className="text-blue-600">modern solutions</span>.
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We believe that every complex business problem has a simple,
                elegant solution. Our team of dedicated experts works at the
                intersection of strategy, design, and technology to help you
                scale effectively in the digital age.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                {[
                  "Innovation First",
                  "Client Centric",
                  "Result Oriented",
                  "Security Focused",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4 text-[#2563eb]" />
                    </div>
                    <span className="text-slate-700 font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              {/* Horizontal Stats Row */}
              <div className="flex flex-wrap items-center justify-between gap-6 p-8 bg-white rounded-[32px] border border-gray-100 shadow-sm mb-10">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center sm:items-start"
                  >
                    <span className="text-3xl font-bold text-slate-900">
                      {stat.value}
                    </span>
                    <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
