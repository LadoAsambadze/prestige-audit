"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/i18n/LocaleSwitcher";

const services = [
  {
    id: "financial-audit",
    titleKey: "financialAuditTitle" as const,
    descKey: "financialAuditDescription" as const,
    color: "bg-blue-50 text-blue-600",
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
    titleKey: "taxServicesTitle" as const,
    descKey: "taxServicesDescription" as const,
    color: "bg-emerald-50 text-emerald-600",
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
    titleKey: "accountingTitle" as const,
    descKey: "accountingDescription" as const,
    color: "bg-violet-50 text-violet-600",
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
    titleKey: "valuationTitle" as const,
    descKey: "valuationDescription" as const,
    color: "bg-amber-50 text-amber-600",
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
    titleKey: "legalTitle" as const,
    descKey: "legalDescription" as const,
    color: "bg-rose-50 text-rose-600",
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
    titleKey: "consultingTitle" as const,
    descKey: "consultingDescription" as const,
    color: "bg-cyan-50 text-cyan-600",
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

const mobileServices = services.map((s) => ({
  ...s,
  icon: (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {(s.icon as any).props.children}
    </svg>
  ),
}));

function ServicesMegaMenu({
  isOpen,
  pathname,
}: {
  isOpen: boolean;
  pathname: string;
}) {
  const t = useTranslations("main");

  return (
    <div
      className={cn(
        "absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2 transition-all duration-300 origin-top",
        isOpen
          ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
          : "opacity-0 scale-95 pointer-events-none -translate-y-2",
      )}
      style={{ width: "min(90vw, 840px)" }}
    >
      <div className="bg-white rounded-[2rem] border border-slate-200/50 overflow-hidden shadow-[0_30px_70px_-10px_rgba(0,0,0,0.15)]">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-50">
            <div>
              <h4 className="text-slate-900 font-bold text-lg">
                {t("navOurServices")}
              </h4>
              <p className="text-slate-400 text-xs mt-1">
                {t("navAllServices")}
              </p>
            </div>
            <Link
              href="/services"
              className="text-blue-600 text-xs font-bold flex items-center gap-1.5 hover:gap-2 transition-all"
            >
              {t("navAllServices")} <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-6">
            {services.map((svc) => {
              const isActive = pathname === `/services/${svc.id}`;
              return (
                <Link
                  key={svc.id}
                  href={`/services/${svc.id}`}
                  className="group flex items-start gap-4 p-3 -m-3 rounded-2xl hover:bg-slate-50 transition-all duration-200"
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110",
                      svc.color,
                    )}
                  >
                    {svc.icon}
                  </div>
                  <div className="flex flex-col pt-1">
                    <span
                      className={cn(
                        "text-sm font-bold transition-colors",
                        isActive
                          ? "text-blue-600"
                          : "text-slate-900 group-hover:text-blue-600",
                      )}
                    >
                      {t(svc.titleKey)}
                    </span>
                    <span className="text-[12px] text-slate-500 leading-snug mt-1 line-clamp-2">
                      {t(svc.descKey)}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="bg-slate-50/80 px-8 py-5 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
            Professional Advisory & Solutions
          </span>
          <div className="flex gap-4">
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div className="h-1 w-1 rounded-full bg-slate-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

const navLinkStyle = (isActive: boolean) => ({
  color: isActive ? "#4A9FF5" : "rgba(255, 255, 255, 0.9)",
});

const mobileLinkStyle = (isActive: boolean) => ({
  color: isActive ? "#4A9FF5" : "rgba(255, 255, 255, 0.8)",
  backgroundColor: isActive ? "rgba(74, 159, 245, 0.1)" : "transparent",
});

export default function Header() {
  const pathname = usePathname();
  const t = useTranslations("main");
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
    closeTimer.current = setTimeout(() => setServicesMenuOpen(false), 200);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      )
        setServicesMenuOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (pathname.includes("admin")) return null;

  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");
  const navItems = [
    { name: t("navTeam"), href: "/team" },
    { name: t("navAbout"), href: "/about" },
    { name: t("navContact"), href: "/contact" },
  ];
  const navLinkClass =
    "group relative px-6 py-2 text-sm font-semibold transition-colors duration-300";

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50"
      style={{ padding: "clamp(24px, 2vw, 48px) clamp(24px, 3vw, 64px) 0" }}
    >
      <div className="relative max-w-[2000px] mx-auto">
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
          className="relative flex items-center justify-between px-6 md:px-10 2xl:px-16"
          style={{ height: "clamp(80px, 6vh, 110px)" }}
        >
          {/* LOGO - Wrapped in Link for redirection */}
          <Link
            href="/"
            className="relative z-10 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Image
              src="/PrestigeLogo.png"
              alt="Logo"
              width={280}
              height={280}
              style={{ objectFit: "contain" }}
              className="cursor-pointer mt-2 w-56 -ml-8 md:ml-0 h-56 md:w-72 md:h-72 2xl:w-80 2xl:h-80"
            />
          </Link>

          <nav
            className="hidden lg:flex items-center justify-center gap-1 xl:gap-4"
            style={{ width: "auto" }}
          >
            <Link
              href="/"
              className={navLinkClass}
              style={navLinkStyle(pathname === "/")}
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
                className={cn(
                  navLinkClass,
                  "flex items-center gap-1.5 bg-transparent border-none cursor-pointer",
                )}
                style={navLinkStyle(isServicesActive || servicesMenuOpen)}
                onClick={() => setServicesMenuOpen((v) => !v)}
              >
                <span className="relative z-10 group-hover:text-white transition-colors">
                  {t("navServices")}
                </span>
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-200 opacity-70",
                    servicesMenuOpen && "rotate-180",
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
                  className={navLinkClass}
                  style={navLinkStyle(isActive)}
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

          <div className="hidden lg:flex items-center gap-6">
            <LocaleSwitcher />
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <LocaleSwitcher />
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
                    <Link href="/" onClick={() => setOpen(false)}>
                      <Image
                        src="/PrestigeLogo.png"
                        alt="Logo"
                        width={140}
                        height={40}
                        style={{ objectFit: "contain" }}
                      />
                    </Link>
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
                      className="flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                      style={mobileLinkStyle(pathname === "/")}
                    >
                      {pathname === "/" && (
                        <span className="w-1 h-4 bg-[#4A9FF5] rounded-full mr-3 shrink-0" />
                      )}
                      {t("navHome")}
                    </Link>

                    <div>
                      <button
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                        style={mobileLinkStyle(isServicesActive)}
                      >
                        <span className="flex items-center">
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
                          <span className="font-bold uppercase text-white/40 text-xs tracking-widest">
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
                                  className="text-sm font-semibold"
                                  style={{
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
                          className="flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                          style={mobileLinkStyle(isActive)}
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
                      className="flex items-center justify-center w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors duration-200"
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
