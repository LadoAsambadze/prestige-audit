"use client";

import Link from "next/link";
import {
  Send,
  Twitter,
  Youtube,
  Instagram,
  Globe,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Added -mt-10 and rounded-t-[60px] to match the FAQ overlap style
    <footer className="relative w-full z-50 rounded-t-[60px] md:rounded-t-[80px] -mt-10  pb-10  bg-[#0a1a3f] pt-24  px-5 overflow-hidden">
      {/* 1. BACKGROUND IMAGE: Increased opacity and changed blend mode to make it visible */}
      <div
        className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url('./background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 2. LIGHT GRADIENTS: Matching the "Light spot" effect */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* 3. VIGNETTE: Ensures text remains readable while keeping the background "deep" */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#061232_90%)] z-0" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Left Column: Branding */}
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-2xl shadow-lg shadow-green-500/20">
                B
              </div>
              <span className="text-3xl font-bold text-white tracking-tight">
                Bullish
              </span>
            </div>
            <p className="text-blue-100/60 leading-relaxed max-w-sm text-lg">
              Sed quaerat cupiditate ut aspernatur pariatur quo facere dolores
              et natus quisqua.
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
            <div className="relative flex items-center group">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-16 rounded-2xl pr-16 focus:border-green-400/50 transition-all"
              />
              <Button className="absolute right-1.5 top-1.5 bottom-1.5 bg-green-400 hover:bg-green-500 text-black rounded-xl px-5 transition-transform active:scale-95">
                <Send size={22} />
              </Button>
            </div>
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
              <h4 className="text-white font-bold text-lg">Support Pages</h4>
              <ul className="space-y-3 text-blue-100/50 text-base">
                {[
                  "About",
                  "Live Chat",
                  "Trading Guide",
                  "Terms & Conditions",
                  "Privacy Policy",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-white font-bold text-lg">Quick Links</h4>
              <ul className="space-y-3 text-blue-100/50 text-base">
                {[
                  "FAQ",
                  "Pricing Plan",
                  "Contact",
                  "Market Overview",
                  "Deposit",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-100/30 text-sm">
            © 2025 Wedesigntech. All Rights Reserved
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
