"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useTypography } from "@/hooks/useTypography";

function ServicesMegaMenu({
  isOpen,
  pathname,
}: {
  isOpen: boolean;
  pathname: string;
}) {
  const t = useTranslations("main");
  const [hovered, setHovered] = useState<string | null>(null);

  const services = [
    {
      id: "financial-audit",
      titleKey: "financialAuditTitle" as const,
      descKey: "financialAuditDescription" as const,
      color: "from-blue-500 to-blue-700",
      accentColor: "#3B82F6",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      id: "tax-services",
      titleKey: "taxServicesTitle" as const,
      descKey: "taxServicesDescription" as const,
      color: "from-emerald-500 to-emerald-700",
      accentColor: "#10B981",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "accounting",
      titleKey: "accountingTitle" as const,
      descKey: "accountingDescription" as const,
      color: "from-violet-500 to-violet-700",
      accentColor: "#8B5CF6",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "valuation",
      titleKey: "valuationTitle" as const,
      descKey: "valuationDescription" as const,
      color: "from-amber-400 to-amber-600",
      accentColor: "#F59E0B",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
      ),
    },
    {
      id: "legal",
      titleKey: "legalTitle" as const,
      descKey: "legalDescription" as const,
      color: "from-rose-500 to-rose-700",
      accentColor: "#F43F5E",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
    },
    {
      id: "consulting",
      titleKey: "consultingTitle" as const,
      descKey: "consultingDescription" as const,
      color: "from-cyan-500 to-cyan-700",
      accentColor: "#06B6D4",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  const activeId = hovered ?? services[0].id;
  const active = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <div
      className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 mt-3 transition-all duration-200 origin-top",
        isOpen
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-95 pointer-events-none",
      )}
      style={{ width: 680 }}
    >
      {/* Arrow */}
      <div className="flex justify-center mb-[-1px] relative z-10">
        <div className="w-3 h-3 bg-white border-l border-t border-slate-200/80 rotate-45 shadow-sm" />
      </div>

      <div
        className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden"
        style={{
          boxShadow:
            "0 20px 60px -10px rgba(10,26,63,0.22), 0 4px 16px -4px rgba(10,26,63,0.10)",
        }}
      >
        <div className="flex">
          {/* LEFT: preview panel */}
          <div className="w-[45%] flex flex-col border-r border-slate-100 bg-[#f8faff]">
            <div className="flex-1 p-5 flex flex-col">
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-4 transition-all duration-200",
                  `bg-gradient-to-br ${active.color}`,
                )}
                style={{ boxShadow: `0 8px 24px ${active.accentColor}44` }}
              >
                <span className="scale-[1.4] block">{active.icon}</span>
              </div>
              <h3 className="text-[15px] font-bold text-[#0a1a3f] mb-2 leading-tight">
                {t(active.titleKey)}
              </h3>
              <p className="text-[12.5px] text-slate-500 leading-relaxed flex-1">
                {t(active.descKey)}
              </p>
            </div>
          </div>

          {/* RIGHT: service list */}
          <div className="w-[55%] p-3 flex flex-col">
            <p className="px-3 pt-1 pb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              {t("navOurServices")}
            </p>
            <div className="flex flex-col gap-0.5 flex-1">
              {services.map((svc) => {
                const isActive = pathname === `/services/${svc.id}`;
                const isHovered = hovered === svc.id;
                return (
                  <Link
                    key={svc.id}
                    href={`/services/${svc.id}`}
                    onMouseEnter={() => setHovered(svc.id)}
                    onMouseLeave={() => setHovered(null)}
                    className={cn(
                      "group flex items-center gap-0 rounded-xl transition-all duration-150 relative overflow-hidden",
                      isActive ? "bg-blue-50" : isHovered ? "bg-slate-50" : "",
                    )}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-[#2563eb]" />
                    )}
                    <div
                      className={cn(
                        "self-stretch aspect-square flex items-center justify-center shrink-0 text-white transition-all duration-200 rounded-xl",
                        `bg-gradient-to-br ${svc.color}`,
                      )}
                      style={{
                        width: "48px",
                        margin: "4px",
                        boxShadow: isHovered
                          ? `0 4px 14px ${svc.accentColor}55`
                          : "none",
                      }}
                    >
                      {svc.icon}
                    </div>
                    <div className="flex-1 min-w-0 px-3 py-2.5">
                      <p
                        className="text-[13px] font-semibold leading-tight truncate"
                        style={{
                          color: isActive
                            ? "#1d4ed8"
                            : isHovered
                              ? "#0f172a"
                              : "#334155",
                        }}
                      >
                        {t(svc.titleKey)}
                      </p>
                    </div>
                    <ChevronRight
                      size={13}
                      className={cn(
                        "shrink-0 mr-3 transition-all duration-150",
                        isHovered
                          ? "text-slate-500 translate-x-0.5"
                          : "text-slate-300",
                      )}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Header ─────────────────────────────────────────────── */
export default function Header() {
  const pathname = usePathname();
  const t = useTranslations("main");
  const ty = useTypography();

  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleServicesMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesMenuOpen(true);
  };

  const handleServicesMouseLeave = () => {
    closeTimer.current = setTimeout(() => setServicesMenuOpen(false), 150);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  if (pathname.includes("admin")) return null;

  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  const navItems = [
    { name: t("navTeam"), href: "/team" },
    { name: t("navAbout"), href: "/about" },
    { name: t("navContact"), href: "/contact" },
  ];

  const mobileServices = [
    {
      id: "financial-audit",
      titleKey: "financialAuditTitle" as const,
      color: "from-blue-500 to-blue-700",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      id: "tax-services",
      titleKey: "taxServicesTitle" as const,
      color: "from-emerald-500 to-emerald-700",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "accounting",
      titleKey: "accountingTitle" as const,
      color: "from-violet-500 to-violet-700",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "valuation",
      titleKey: "valuationTitle" as const,
      color: "from-amber-400 to-amber-600",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
      ),
    },
    {
      id: "legal",
      titleKey: "legalTitle" as const,
      color: "from-rose-500 to-rose-700",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
    },
    {
      id: "consulting",
      titleKey: "consultingTitle" as const,
      color: "from-cyan-500 to-cyan-700",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50"
      style={{ padding: "24px 24px 0" }}
    >
      <div className="relative max-w-[1420px] mx-auto">
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(10, 26, 63, 0.15)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "24px",
          }}
        />

        <div
          className="relative flex items-center justify-between px-6 md:px-10"
          style={{ height: "80px" }}
        >
          <Image
            src="/PrestigeLogo.png"
            alt="Logo"
            width={280}
            height={280}
            style={{ objectFit: "contain" }}
            className="cursor-pointer mt-2 w-56 -ml-8 md:ml-0 h-56 md:w-72 md:h-72"
          />

          <nav
            className="hidden lg:flex items-center justify-center gap-1"
            style={{ width: "50%" }}
          >
            <Link
              href="/"
              className="group relative px-6 py-2 transition-colors duration-300"
              style={{
                ...ty.btn,
                color:
                  pathname === "/" ? "#4A9FF5" : "rgba(255, 255, 255, 0.9)",
                fontFamily: "'DM Sans', sans-serif",
                textTransform: "none",
                letterSpacing: "normal",
              }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors">
                {t("navHome")}
              </span>
              {pathname === "/" && (
                <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#4A9FF5] rounded-full" />
              )}
            </Link>

            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className="group relative flex items-center gap-1.5 px-6 py-2 transition-colors duration-300"
                style={{
                  ...ty.btn,
                  color:
                    isServicesActive || servicesMenuOpen
                      ? "#4A9FF5"
                      : "rgba(255, 255, 255, 0.9)",
                  fontFamily: "'DM Sans', sans-serif",
                  textTransform: "none",
                  letterSpacing: "normal",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => setServicesMenuOpen((v) => !v)}
              >
                <span className="relative z-10 group-hover:text-white transition-colors">
                  {t("navServices")}
                </span>
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-200 opacity-70",
                    servicesMenuOpen ? "rotate-180" : "",
                  )}
                />
                {isServicesActive && (
                  <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#4A9FF5] rounded-full" />
                )}
              </button>

              <ServicesMegaMenu isOpen={servicesMenuOpen} pathname={pathname} />
            </div>

            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative px-6 py-2 transition-colors duration-300"
                  style={{
                    ...ty.btn,
                    color: isActive ? "#4A9FF5" : "rgba(255, 255, 255, 0.9)",
                    fontFamily: "'DM Sans', sans-serif",
                    textTransform: "none",
                    letterSpacing: "normal",
                  }}
                >
                  <span className="relative z-10 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#4A9FF5] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Open menu"
                >
                  <Menu size={20} />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[300px] bg-[#0a1a3f] border-l border-white/10 p-0 overflow-y-auto"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                    <Image
                      src="/PrestigeLogo.png"
                      alt="Logo"
                      width={140}
                      height={40}
                      style={{ objectFit: "contain" }}
                    />
                    <button
                      onClick={() => setOpen(false)}
                      className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/20 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <nav className="flex flex-col px-4 py-6 gap-1">
                    <Link
                      href="/"
                      onClick={() => setOpen(false)}
                      className="flex items-center px-4 py-3 rounded-xl transition-all duration-200"
                      style={{
                        ...ty.btn,
                        fontFamily: "'DM Sans', sans-serif",
                        textTransform: "none",
                        letterSpacing: "normal",
                        color:
                          pathname === "/"
                            ? "#4A9FF5"
                            : "rgba(255, 255, 255, 0.8)",
                        backgroundColor:
                          pathname === "/"
                            ? "rgba(74, 159, 245, 0.1)"
                            : "transparent",
                      }}
                    >
                      {pathname === "/" && (
                        <span className="w-1 h-4 bg-[#4A9FF5] rounded-full mr-3 shrink-0" />
                      )}
                      {t("navHome")}
                    </Link>

                    <div>
                      <button
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200"
                        style={{
                          ...ty.btn,
                          fontFamily: "'DM Sans', sans-serif",
                          textTransform: "none",
                          letterSpacing: "normal",
                          color: isServicesActive
                            ? "#4A9FF5"
                            : "rgba(255, 255, 255, 0.8)",
                          backgroundColor: isServicesActive
                            ? "rgba(74, 159, 245, 0.1)"
                            : "transparent",
                        }}
                      >
                        <span className="flex items-center gap-0">
                          {isServicesActive && (
                            <span className="w-1 h-4 bg-[#4A9FF5] rounded-full mr-3 shrink-0" />
                          )}
                          {t("navServices")}
                        </span>
                        <ChevronDown
                          size={16}
                          className={cn(
                            "text-white/40 transition-transform duration-300",
                            mobileServicesOpen && "rotate-180",
                          )}
                        />
                      </button>

                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300",
                          mobileServicesOpen
                            ? "max-h-[600px] opacity-100"
                            : "max-h-0 opacity-0",
                        )}
                      >
                        <Link
                          href="/services"
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 mx-2 px-4 py-2.5 mt-1 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                        >
                          <span
                            className="font-bold uppercase text-white/40"
                            style={{ fontSize: "12px", letterSpacing: "0.1em" }}
                          >
                            {t("navAllServices")}
                          </span>
                          <ChevronRight
                            size={12}
                            className="text-white/30 ml-auto"
                          />
                        </Link>

                        <div className="mt-1 flex flex-col gap-0.5 pb-2">
                          {mobileServices.map((svc) => {
                            const isActive = pathname === `/services/${svc.id}`;
                            return (
                              <Link
                                key={svc.id}
                                href={`/services/${svc.id}`}
                                onClick={() => setOpen(false)}
                                className={cn(
                                  "flex items-center gap-3 mx-2 px-4 py-2.5 rounded-xl transition-all duration-200",
                                  isActive
                                    ? "bg-white/[0.08]"
                                    : "hover:bg-white/[0.05]",
                                )}
                              >
                                <div
                                  className={cn(
                                    "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-white bg-gradient-to-br",
                                    svc.color,
                                  )}
                                >
                                  {svc.icon}
                                </div>
                                <span
                                  style={{
                                    ...ty.itemDesc,
                                    fontWeight: 600,
                                    color: isActive
                                      ? "#fff"
                                      : "rgba(255,255,255,0.7)",
                                  }}
                                >
                                  {t(svc.titleKey)}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {navItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center px-4 py-3 rounded-xl transition-all duration-200"
                          style={{
                            ...ty.btn,
                            fontFamily: "'DM Sans', sans-serif",
                            textTransform: "none",
                            letterSpacing: "normal",
                            color: isActive
                              ? "#4A9FF5"
                              : "rgba(255, 255, 255, 0.8)",
                            backgroundColor: isActive
                              ? "rgba(74, 159, 245, 0.1)"
                              : "transparent",
                          }}
                        >
                          {isActive && (
                            <span className="w-1 h-4 bg-[#4A9FF5] rounded-full mr-3 shrink-0" />
                          )}
                          {item.name}
                        </Link>
                      );
                    })}
                  </nav>

                  <div className="mt-auto px-4 pb-8">
                    <div className="h-px bg-white/10 mb-6" />
                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors duration-200"
                      style={ty.btn}
                    >
                      {t("navBookConsultation")}
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
