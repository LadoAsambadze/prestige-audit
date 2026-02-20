"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  if (pathname.includes("admin")) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "Financial Audit", href: "/services/financial-audit" },
    { name: "Tax Services", href: "/services/tax-services" },
    { name: "Accounting", href: "/services/accounting" },
    { name: "Valuation", href: "/services/valuation" },
    { name: "Legal Support", href: "/services/legal" },
    { name: "Consulting", href: "/services/consulting" },
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
          <div className="md:col-span-4 space-y-6">
            <Image
              src="/PrestigeLogo.png"
              alt="Prestige Audit"
              width={300}
              height={300}
              style={{ objectFit: "contain" }}
              className="-ml-10 -mt-20"
            />

            <div className="space-y-4">
              <h4 className="text-white/80 font-semibold uppercase tracking-[0.2em] text-xs">
                Follow Us
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

          <div className="md:col-span-2 space-y-5">
            <h4 className="text-white font-bold text-lg">Pages</h4>
            <ul className="space-y-3 text-blue-100/50 text-sm">
              {navLinks.map((item) => (
                <li key={item.name}>
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

          <div className="md:col-span-3 space-y-5">
            <h4 className="text-white font-bold text-lg">Services</h4>
            <ul className="space-y-3 text-blue-100/50 text-sm">
              {serviceLinks.map((item) => (
                <li key={item.name}>
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

          <div className="md:col-span-3 space-y-5">
            <h4 className="text-white font-bold text-lg">Contact</h4>
            <ul className="space-y-4 text-blue-100/50 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">📍</span>
                <span>Batumi, Adjara, Georgia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">📞</span>
                <Link
                  href="tel:+995000000000"
                  className="hover:text-white transition-colors duration-200"
                >
                  +995 000 000 000
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✉️</span>
                <Link
                  href="mailto:info@prestigeaudit.ge"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@prestigeaudit.ge
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-blue-100/30 text-sm">
            © 2026 Prestige Audit. All Rights Reserved
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
