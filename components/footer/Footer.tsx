"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTypography } from "@/hooks/useTypography";

export default function Footer() {
  const pathname = usePathname();
  const t = useTranslations("main");
  const ty = useTypography();

  if (pathname.includes("admin")) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: t("navHome"), href: "/" },
    { name: t("navTeam"), href: "/team" },
    { name: t("navAbout"), href: "/about" },
    { name: t("navContact"), href: "/contact" },
  ];

  const serviceLinks = [
    {
      name: t("footerServiceFinancialAudit"),
      href: "/services/financial-audit",
    },
    { name: t("footerServiceTax"), href: "/services/tax-services" },
    { name: t("footerServiceAccounting"), href: "/services/accounting" },
    { name: t("footerServiceValuation"), href: "/services/valuation" },
    { name: t("footerServiceLegal"), href: "/services/legal" },
    { name: t("footerServiceConsulting"), href: "/services/consulting" },
  ];

  return (
    <footer className="relative w-full z-50 rounded-t-[60px] md:rounded-t-[80px] -mt-10 pb-10 bg-[#0a1a3f] pt-24 px-5 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url('/background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#061232_90%)] z-0" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-10">
          {/* Brand column */}
          <div className="md:col-span-4 space-y-6 hidden md:block">
            <Image
              src="/PrestigeLogo.png"
              alt="Prestige Audit"
              width={300}
              height={300}
              style={{ objectFit: "contain" }}
              className="-ml-10 -mt-20"
            />

            <div className="space-y-4">
              <h4
                className="text-white/80"
                style={{
                  ...ty.label,
                  fontWeight: 600,
                  letterSpacing: ty.label.letterSpacing ?? "0.2em",
                }}
              >
                {t("footerFollowUs")}
              </h4>
              <div className="flex gap-3">
                {[Globe].map((Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Pages + Services combined row */}
          <div className="md:col-span-5 flex gap-10">
            {/* Pages */}
            <div className="space-y-5 flex-1">
              <h4 className="text-white font-bold" style={ty.itemTitle}>
                {t("footerPages")}
              </h4>
              <ul className="space-y-3 text-blue-100/50" style={ty.itemDesc}>
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-5 flex-1">
              <h4 className="text-white font-bold" style={ty.itemTitle}>
                {t("footerServices")}
              </h4>
              <ul className="space-y-3 text-blue-100/50" style={ty.itemDesc}>
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact column */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-white font-bold" style={ty.itemTitle}>
              {t("footerContact")}
            </h4>
            <ul className="space-y-4 text-blue-100/50" style={ty.itemDesc}>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">📍</span>
                <span>{t("footerAddress")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">📞</span>
                <Link
                  href={`tel:${t("footerPhone").replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {t("footerPhone")}
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✉️</span>
                <Link
                  href={`mailto:${t("footerEmail")}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {t("footerEmail")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-blue-100/30" style={ty.itemDesc}>
            {t("footerCopyright")}
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute bottom-10 right-10 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-600/30 hover:bg-blue-500 hover:-translate-y-1 transition-all active:scale-90"
      >
        <ArrowUp size={24} strokeWidth={3} />
      </button>
    </footer>
  );
}
