"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const services = [
  {
    id: "financial-audit",
    title: "Financial Audit",
    gradient: "from-blue-500 to-cyan-400",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    id: "tax-services",
    title: "Tax Services",
    gradient: "from-emerald-500 to-teal-400",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: "accounting",
    title: "Accounting",
    gradient: "from-orange-500 to-amber-400",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "valuation",
    title: "Valuation",
    gradient: "from-rose-500 to-pink-400",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
        />
      </svg>
    ),
  },
  {
    id: "legal",
    title: "Legal",
    gradient: "from-sky-500 to-blue-400",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
  },
  {
    id: "consulting",
    title: "Consulting",
    gradient: "from-teal-500 to-emerald-400",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

export function ServicesMegaMenu({
  isOpen,
  pathname,
}: {
  isOpen: boolean;
  pathname: string;
}) {
  return (
    <div
      className={cn(
        "absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2 transition-all duration-300 origin-top z-50",
        isOpen
          ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
          : "opacity-0 scale-95 pointer-events-none -translate-y-3",
      )}
      style={{ width: "min(92vw, 640px)" }}
    >
      {/* Arrow pointer matching header glass style */}
      <div
        className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45"
        style={{
          backgroundColor: "rgba(10, 26, 63, 0.95)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderBottom: "none",
          borderRight: "none",
        }}
      />

      {/* Panel — same glass as header */}
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{
          backgroundColor: "rgba(10, 26, 63, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow:
            "0 30px 70px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(74, 159, 245, 0.05)",
        }}
      >
        {/* Subtle glow accent at top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(74,159,245,0.5), transparent)",
          }}
        />

        {/* Header row */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: "rgba(74,159,245,0.7)" }}
          >
            Our Services
          </span>
          <Link
            href="/services"
            className="group flex items-center gap-1.5 text-[11px] font-semibold transition-all duration-200"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            View all
            <ArrowRight
              size={11}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Divider */}
        <div
          className="mx-6 h-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />

        {/* Services grid — 3 columns, icon + label only */}
        <div className="p-4 grid grid-cols-3 gap-1.5">
          {services.map((svc) => {
            const isActive = pathname === `/services/${svc.id}`;
            return (
              <Link
                key={svc.id}
                href={`/services/${svc.id}`}
                className={cn(
                  "group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                  isActive ? "bg-white/10" : "hover:bg-white/[0.06]",
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white bg-gradient-to-br transition-all duration-200 group-hover:scale-105",
                    svc.gradient,
                  )}
                  style={{
                    boxShadow: isActive
                      ? "0 4px 12px rgba(0,0,0,0.3)"
                      : undefined,
                  }}
                >
                  <div className="w-4 h-4">{svc.icon}</div>
                </div>

                {/* Label */}
                <span
                  className="text-sm font-semibold transition-colors duration-200 whitespace-nowrap"
                  style={{
                    color: isActive ? "#fff" : "rgba(255,255,255,0.7)",
                  }}
                >
                  {svc.title}
                </span>

                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#4A9FF5]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div
          className="mx-4 mb-4 px-4 py-3 rounded-xl flex items-center justify-between"
          style={{
            background: "rgba(74,159,245,0.06)",
            border: "1px solid rgba(74,159,245,0.12)",
          }}
        >
          <span
            className="text-[10px] font-medium"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Prestige Professional Advisory
          </span>
          <div className="flex gap-1">
            <div className="h-1 w-1 rounded-full bg-blue-400/60" />
            <div className="h-1 w-1 rounded-full bg-emerald-400/60" />
            <div className="h-1 w-1 rounded-full bg-orange-400/60" />
          </div>
        </div>
      </div>
    </div>
  );
}
