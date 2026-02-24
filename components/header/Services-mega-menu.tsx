"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const services = [
  {
    id: "financial-audit",
    title: "Financial Audit",
    description: "Comprehensive audit services for businesses of all sizes",
    gradient: "from-blue-500 to-cyan-400",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-100",
    hoverBg: "hover:bg-blue-50/80",
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
    description: "Strategic tax planning and compliance solutions",
    gradient: "from-emerald-500 to-teal-400",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-100",
    hoverBg: "hover:bg-emerald-50/80",
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
    description: "Full-service bookkeeping and financial reporting",
    gradient: "from-orange-500 to-amber-400",
    bgLight: "bg-orange-50",
    textColor: "text-orange-600",
    borderColor: "border-orange-100",
    hoverBg: "hover:bg-orange-50/80",
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
    description: "Business valuation and financial advisory services",
    gradient: "from-rose-500 to-pink-400",
    bgLight: "bg-rose-50",
    textColor: "text-rose-600",
    borderColor: "border-rose-100",
    hoverBg: "hover:bg-rose-50/80",
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
    description: "Expert legal consultation and compliance guidance",
    gradient: "from-sky-500 to-blue-400",
    bgLight: "bg-sky-50",
    textColor: "text-sky-600",
    borderColor: "border-sky-100",
    hoverBg: "hover:bg-sky-50/80",
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
    description: "Strategic business consulting and growth advisory",
    gradient: "from-teal-500 to-emerald-400",
    bgLight: "bg-teal-50",
    textColor: "text-teal-600",
    borderColor: "border-teal-100",
    hoverBg: "hover:bg-teal-50/80",
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
        "absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 transition-all duration-300 origin-top z-50",
        isOpen
          ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
          : "opacity-0 scale-95 pointer-events-none -translate-y-3",
      )}
      style={{ width: "min(92vw, 780px)" }}
    >
      {/* Arrow pointer */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-card border-l border-t border-slate-200/60" />

      <div className="relative bg-card rounded-2xl border border-slate-200/60 overflow-hidden shadow-[0_25px_60px_-12px_rgba(0,0,0,0.2)]">
        {/* Header */}
        <div className="px-7 pt-6 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-card-foreground font-bold text-base">
                Our Services
              </h3>
              <p className="text-slate-400 text-xs mt-0.5">
                Professional advisory & solutions
              </p>
            </div>
            <Link
              href="/services"
              className="group flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0a1a3f] text-[#fff] text-xs font-bold transition-all hover:gap-2.5 hover:shadow-lg hover:shadow-blue-500/20"
            >
              All Services
              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="px-5 pb-5">
          <div className="grid grid-cols-2 gap-2">
            {services.map((svc) => {
              const isActive = pathname === `/services/${svc.id}`;
              return (
                <Link
                  key={svc.id}
                  href={`/services/${svc.id}`}
                  className={cn(
                    "group relative flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200",
                    svc.hoverBg,
                    isActive && svc.bgLight,
                  )}
                >
                  {/* Color accent line */}
                  <div
                    className={cn(
                      "absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 rounded-full bg-gradient-to-b transition-all duration-300 group-hover:h-8",
                      svc.gradient,
                      isActive && "h-8",
                    )}
                  />

                  {/* Icon */}
                  <div
                    className={cn(
                      "relative w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-white bg-gradient-to-br shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md",
                      svc.gradient,
                    )}
                  >
                    {svc.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <span
                      className={cn(
                        "block text-sm font-bold transition-colors duration-200",
                        isActive
                          ? svc.textColor
                          : "text-card-foreground group-hover:" +
                              svc.textColor.replace("text-", "text-"),
                      )}
                    >
                      {svc.title}
                    </span>
                    <span className="block text-[11px] text-slate-400 leading-snug mt-0.5 line-clamp-1">
                      {svc.description}
                    </span>
                  </div>

                  {/* Arrow on hover */}
                  <ArrowRight
                    size={14}
                    className={cn(
                      "shrink-0 transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0",
                      svc.textColor,
                    )}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-7 py-3.5 flex items-center justify-between border-t border-slate-100">
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.15em]">
            Prestige Professional Advisory
          </span>
          <div className="flex gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
