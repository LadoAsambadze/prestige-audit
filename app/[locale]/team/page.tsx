"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { TeamCard } from "../(main)/_components/TeamSection";

interface TeamMemberWithId {
  id: string; // URL-friendly ID for routing
  name: string;
  title: string;
  department: string;
  image: string;
}

const teamMembers: TeamMemberWithId[] = [
  {
    id: "gogita-baramidze",
    name: "გოგიტა ბარამიძე",
    title: "Senior Auditor",
    department: "Audit",
    image: "/5.jpeg",
  },
  {
    id: "gogita-baramidze",
    name: "Sarah Mitchell",
    title: "CEO",
    department: "Leadership",
    image: "/3.png",
  },
  {
    id: "gogita-baramidze",
    name: "James Anderson",
    title: "CTO",
    department: "Technology",
    image: "/4.jpeg",
  },
  {
    id: "gogita-baramidze",
    name: "Emily Rodriguez",
    title: "Head of Design",
    department: "Creative",
    image: "/5.jpeg",
  },
  {
    id: "gogita-baramidze",
    name: "Michael Chen",
    title: "VP Engineering",
    department: "Technology",
    image: "/6.jpeg",
  },
  {
    id: "gogita-baramidze",
    name: "Sophia Williams",
    title: "Head of Marketing",
    department: "Marketing",
    image: "/1.png",
  },
  {
    id: "gogita-baramidze",
    name: "David Thompson",
    title: "CFO",
    department: "Finance",
    image: "/2.png",
  },
];

export default function TeamPage() {
  // Section animation - FIXED
  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  // Grid items stagger
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION */}
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

      {/* TEAM GRID SECTION */}
      <motion.section
        className="relative z-20 -mt-24 bg-[#f3f5f4] rounded-t-[60px] md:rounded-t-[80px] pt-24 pb-32 px-6 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          {/* Filter/Header subtle row */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
                Our Leadership
              </h2>
              <motion.div
                className="w-8 h-0.5 bg-[#2563eb]"
                initial={{ scaleX: 0, originX: 1 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </div>
            <p className="text-gray-500 text-sm font-medium">
              Showing all {teamMembers.length} members • Click to view CV
            </p>
          </motion.div>

          {/* 4-Column Grid with clickable cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={gridVariants}
          >
            {teamMembers.map((member) => (
              <motion.div key={member.id} variants={itemVariants}>
                <TeamCard {...member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
