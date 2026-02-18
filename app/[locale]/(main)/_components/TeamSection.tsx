"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  UserSearch,
  Calculator,
  BarChart3,
  Scale,
  Briefcase,
  Lightbulb,
} from "lucide-react";

const departments = [
  {
    label: "Audit Team",
    href: "/team/audit",
    Icon: UserSearch,
    cta: "View Audit Team",
  },
  {
    label: "Tax Team",
    href: "/team/tax",
    Icon: Calculator,
    cta: "View Tax Team",
  },
  {
    label: "Accounting Team",
    href: "/team/accounting",
    Icon: BarChart3,
    cta: "View Accounting Team",
  },
  {
    label: "Valuation Team",
    href: "/team/valuation",
    Icon: Scale,
    cta: "View Valuation Team",
  },
  {
    label: "Legal Team",
    href: "/team/legal",
    Icon: Briefcase,
    cta: "View Legal Team",
  },
  {
    label: "Consulting Team",
    href: "/team/consulting",
    Icon: Lightbulb,
    cta: "View Consulting Team",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#f0f2f5] py-16 md:py-24 overflow-hidden">
      <style>{`
        @keyframes flow {
          from { stroke-dashoffset: 16; }
          to   { stroke-dashoffset: 0; }
        }
        .line-flow {
          stroke-dasharray: 6 4;
          animation: flow 1.2s linear infinite;
        }
        .trunk-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #2563eb;
          border: 3px solid #f0f2f5;
          box-shadow: 0 0 0 2px #2563eb;
          position: relative;
          z-index: 2;
          flex-shrink: 0;
        }
      `}</style>

      <div className="max-w-[1550px] mx-auto px-6 lg:px-16">
        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 md:w-10 h-0.5 bg-[#2563eb]" />
            <span className="text-xs font-semibold uppercase tracking-[3px] text-gray-400">
              Our Team
            </span>
            <div className="w-8 md:w-10 h-0.5 bg-[#2563eb]" />
          </div>
          <Link href="/team" className="hidden md:block">
            <button className="group relative inline-flex items-center gap-2 overflow-hidden px-7 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-semibold text-sm shadow-md transition-all duration-300 hover:scale-[1.03]">
              <span className="relative z-10">View All Members</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {/* ────── LEFT: Director (Bigger) ────── */}
          <div className="flex flex-row lg:flex-row items-center shrink-0">
            <div className="relative group rounded-[32px] overflow-hidden shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 w-[320px] md:w-[380px] lg:w-[440px] border border-white/60 z-10">
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-indigo-600" />
              <div className="aspect-[3/4.2] w-full overflow-hidden bg-gray-200">
                <img
                  src="3.png"
                  alt="Director"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block mb-1 text-[10px] font-black uppercase tracking-[0.25em] text-white/60">
                  Director General
                </span>
                <h3 className="text-2xl font-extrabold text-white leading-tight mb-1">
                  Giorgi Baramidze
                </h3>
                <p className="text-[11px] font-medium uppercase tracking-widest text-white/50 mb-6">
                  Founder & CEO
                </p>
                <Link href="/team/gogita-baramidze">
                  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-slate-900">
                    View Profile
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Horizontal bridge */}
            <div className="hidden lg:flex items-center">
              <svg width="60" height="4" className="overflow-visible">
                <line
                  x1="0"
                  y1="2"
                  x2="60"
                  y2="2"
                  stroke="#2563eb"
                  strokeWidth="2.5"
                  className="line-flow"
                />
              </svg>
              <span className="trunk-dot" />
            </div>
          </div>

          {/* ────── RIGHT: Departments (3 Rows, Bigger) ────── */}
          <div className="relative flex-1 mt-10 lg:mt-0 lg:pl-10">
            <div
              className="hidden lg:block absolute left-0 top-0 bottom-0 pointer-events-none"
              style={{ width: 4 }}
              aria-hidden
            >
              <svg
                width="4"
                height="100%"
                style={{ display: "block", height: "100%" }}
              >
                <line
                  x1="2"
                  y1="0"
                  x2="2"
                  y2="10000"
                  stroke="#2563eb"
                  strokeWidth="2.5"
                  className="line-flow"
                />
              </svg>
            </div>

            {/* 2 columns on mobile/tablet results in 3 rows for 6 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept, i) => (
                <DeptCard key={dept.label} dept={dept} index={i} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center md:hidden">
          <Link href="/team">
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-lg">
              View All Members <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function DeptCard({
  dept,
}: {
  dept: (typeof departments)[number];
  index: number;
}) {
  return (
    <div className="relative flex flex-row items-center">
      <div className="hidden lg:flex items-center shrink-0">
        <svg width="40" height="4" className="overflow-visible">
          <line
            x1="0"
            y1="2"
            x2="40"
            y2="2"
            stroke="#2563eb"
            strokeWidth="2.5"
            className="line-flow"
          />
        </svg>
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#2563eb",
            border: "2.5px solid #f0f2f5",
            boxShadow: "0 0 0 2px #2563eb",
            flexShrink: 0,
          }}
        />
      </div>

      <Link href={dept.href} className="group block w-full min-w-0">
        <div className="relative flex flex-col bg-white rounded-[24px] p-7 shadow-sm border border-transparent transition-all duration-300 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1.5 overflow-hidden h-full">
          <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="p-4 rounded-2xl bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 w-fit mb-5">
            <dept.Icon size={26} strokeWidth={2.5} />
          </div>

          <h4 className="text-base font-bold text-slate-800 leading-tight mb-4">
            {dept.label}
          </h4>

          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-blue-500 border-t border-slate-100 pt-4 mt-auto">
            <span>{dept.cta}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
          </div>
        </div>
      </Link>
    </div>
  );
}
