"use client";

import React from "react";
import { Search, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // Completely hide the header if the path includes "admin"
  // This covers http://localhost:3000/en/admin/dashboard
  if (pathname.includes("admin")) {
    return null;
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
    { name: "News", href: "/news" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50"
      style={{ padding: "30px 30px 0" }}
    >
      <div className="relative max-w-[1420px] mx-auto">
        {/* Glass morphism background - FAQ Section Theme Tint */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(10, 26, 63, 0.15)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "24px",
          }}
        />

        {/* Content */}
        <div
          className="relative flex items-center justify-between px-10"
          style={{ height: "80px" }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
            style={{ width: "25%" }}
          >
            <img
              src="/test.png"
              alt="Logo"
              className="max-w-[200px] md:max-w-[240px] h-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center justify-center gap-2"
            style={{ width: "50%" }}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative px-6 py-2 transition-colors duration-300"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: isActive ? "#4A9FF5" : "rgba(255, 255, 255, 0.9)",
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

          {/* Action Buttons */}
        </div>
      </div>
    </header>
  );
}
