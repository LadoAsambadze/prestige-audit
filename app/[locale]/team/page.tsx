"use client";

import React from "react";
import { ArrowRight, Users } from "lucide-react";
import { TeamCard } from "../(main)/_components/TeamSection";

interface TeamMember {
  name: string;
  title: string;
  department: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Mitchell",
    title: "CEO",
    department: "Leadership",
    image: "/3.png",
  },
  {
    name: "James Anderson",
    title: "CTO",
    department: "Technology",
    image: "/4.jpeg",
  },
  {
    name: "Emily Rodriguez",
    title: "Head of Design",
    department: "Creative",
    image: "/5.jpeg",
  },
  {
    name: "Michael Chen",
    title: "VP Engineering",
    department: "Technology",
    image: "/6.jpeg",
  },
  {
    name: "Sophia Williams",
    title: "Head of Marketing",
    department: "Marketing",
    image: "/1.png",
  },
  {
    name: "David Thompson",
    title: "CFO",
    department: "Finance",
    image: "/2.png",
  },
  {
    name: "David Thompson",
    title: "CFO",
    department: "Finance",
    image: "/7.png",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION - CONSISTENT WITH CONTACT/NEWS */}
      <section className="relative w-full bg-[#0a1a3f] pt-40 pb-40 px-5 overflow-hidden text-center">
        <div
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url('/background.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10 px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-blue-200 text-xs font-bold uppercase tracking-widest mb-8">
            <Users size={14} /> Meet the Experts
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white   leading-[1.1]">
            The Talent Behind <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
              Our Success
            </span>
          </h1>
        </div>
      </section>

      {/* TEAM GRID SECTION */}
      <section className="relative z-20 -mt-24 bg-[#f3f5f4] rounded-t-[60px] md:rounded-t-[80px] pt-24 pb-32 px-6 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto">
          {/* Filter/Header subtle row */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#2563eb]"></div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">
                Our Leadership
              </h2>
            </div>
            <p className="text-gray-500 text-sm font-medium">
              Showing all {teamMembers.length} members
            </p>
          </div>

          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index}>
                <TeamCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
