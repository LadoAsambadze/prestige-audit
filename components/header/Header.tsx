"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname.includes("admin")) {
    return null;
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50"
      style={{ padding: "30px 30px 0" }}
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
            className="cursor-pointer mt-2 w-56 -ml-12 md:ml-0 h-56 md:w-72 md:h-72"
          />

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

          {/* Mobile Burger */}
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
                className="w-[300px] bg-[#0a1a3f] border-l border-white/10 p-0"
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
                    {navItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center px-4 py-3 rounded-xl transition-all duration-200"
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "15px",
                            fontWeight: 600,
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
                      className="flex items-center justify-center w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors duration-200"
                    >
                      Book Consultation
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
