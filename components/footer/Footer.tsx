"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Added this
import { Twitter, Youtube, Instagram, Globe, ArrowUp } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";

export default function Footer() {
  const pathname = usePathname();

  // Logic to hide the footer if the URL contains 'admin'
  const isAdmin = pathname.includes("admin");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // If we are on an admin page, return null so nothing renders
  if (isAdmin) {
    return null;
  }

  return (
    <footer className="relative w-full z-50 rounded-t-[60px] md:rounded-t-[80px] -mt-10 pb-10 bg-[#0a1a3f] pt-24 px-5 overflow-hidden">
      {/* 1. BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url('/background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 2. LIGHT GRADIENTS */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* 3. VIGNETTE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#061232_90%)] z-0" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Left Column: Branding */}
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center gap-2"></div>
            <p className="text-blue-100/60 leading-relaxed max-w-sm text-lg">
              Empowering your financial future through expert analysis and
              strategic market insights.
            </p>
            <div className="space-y-4">
              <h4 className="text-white/80 font-semibold uppercase tracking-[0.2em] text-xs">
                Stay Tuned
              </h4>
              <div className="flex gap-4">
                {[Twitter, Youtube, Instagram, Globe].map((Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:bg-green-400 hover:text-black hover:border-green-400 transition-all duration-300"
                  >
                    <Icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column: Newsletter */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Register For Our Updates!
            </h3>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="terms"
                className="border-white/20 data-[state=checked]:bg-green-400 data-[state=checked]:border-green-400"
              />
              <label
                htmlFor="terms"
                className="text-sm text-blue-100/40 leading-none cursor-pointer hover:text-blue-100/60 transition-colors"
              >
                I acknowledge all the Terms & Conditions
              </label>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-5">
              <h4 className="text-white font-bold text-lg">Support</h4>
              <ul className="space-y-3 text-blue-100/50 text-base">
                {["About", "Live Chat", "Guide", "Terms", "Privacy"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-green-400 transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-white font-bold text-lg">Quick Links</h4>
              <ul className="space-y-3 text-blue-100/50 text-base">
                {["FAQ", "Pricing", "Contact", "Market", "Deposit"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-green-400 transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-100/30 text-sm">
            © 2026 Bullish. All Rights Reserved
          </p>
          <div className="flex gap-8 text-sm text-blue-100/30">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Back to Top */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-10 right-10 w-12 h-12 bg-green-400 rounded-2xl flex items-center justify-center text-black shadow-xl shadow-green-400/20 hover:bg-green-500 hover:-translate-y-1 transition-all active:scale-90"
      >
        <ArrowUp size={24} strokeWidth={3} />
      </button>
    </footer>
  );
}
