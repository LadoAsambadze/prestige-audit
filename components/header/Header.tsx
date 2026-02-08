"use client";

import React, { useState, useEffect } from "react";
import { Search, LayoutGrid } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", active: true, hasDropdown: true },
    { name: "Pages", href: "#", hasDropdown: true },
    { name: "Blog", href: "#", hasDropdown: true },
    { name: "Careers", href: "#", hasDropdown: true },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        padding: "30px 30px 0",
      }}
    >
      <div
        className="relative max-w-[1420px] mx-auto transition-all duration-300"
        style={{
          // Container positioning
          position: "relative",
        }}
      >
        {/* Glass morphism background layer */}
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            backgroundColor: isScrolled
              ? "rgba(30, 41, 59, 0.35)"
              : "rgba(255, 255, 255, 0.1)",
            backdropFilter: isScrolled ? "blur(12px)" : "blur(10px)",
            WebkitBackdropFilter: isScrolled ? "blur(12px)" : "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: isScrolled ? "0 0 16px 16px" : "16px",
            boxShadow: isScrolled
              ? "0 5px 20px -8px rgba(30, 41, 59, 0.3)"
              : "none",
          }}
        ></div>

        {/* Content */}
        <div
          className="relative flex items-center justify-between px-8 transition-all duration-300"
          style={{
            height: "80px",
            paddingTop: isScrolled ? "0" : undefined,
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            style={{ width: "25%" }}
          >
            {/* Chart Bars Icon */}
            <div className="flex items-end gap-[3px]">
              <div
                className="rounded-sm"
                style={{
                  width: "5px",
                  height: "12px",
                  backgroundColor: "#4A9FF5",
                }}
              ></div>
              <div
                className="rounded-sm"
                style={{
                  width: "5px",
                  height: "20px",
                  backgroundColor: "#4A9FF5",
                }}
              ></div>
              <div
                className="rounded-sm"
                style={{
                  width: "5px",
                  height: "16px",
                  backgroundColor: "#4A9FF5",
                }}
              ></div>
            </div>
            <span
              className="text-white tracking-tight"
              style={{
                fontSize: "28px",
                fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Bullish
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <nav
            className="hidden lg:flex items-center justify-center gap-0"
            style={{ width: "50%" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group inline-flex items-center transition-colors duration-300"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: item.active ? "#4A9FF5" : "rgba(255, 255, 255, 0.9)",
                  padding: "33px 22px",
                  textTransform: "capitalize",
                }}
              >
                <span className="group-hover:text-[#4A9FF5] transition-colors">
                  {item.name}
                </span>
                {item.hasDropdown && (
                  <span
                    className="ml-1.5 text-[10px] opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ marginTop: "2px" }}
                  >
                    ▼
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Action Buttons - Right */}
          <div
            className="flex items-center justify-end gap-4"
            style={{ width: "25%" }}
          >
            {/* Search Button */}
            <button
              className="p-2.5 rounded-full text-white transition-all duration-300 hover:bg-white/10"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Menu Button */}
            <button
              className="p-2.5 rounded-full text-white transition-all duration-300 hover:bg-white/10"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
              aria-label="Menu"
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}