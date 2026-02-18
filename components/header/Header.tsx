"use client";

import Image from "next/image";
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
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
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

          <Image
            src="/PrestigeLogo.png"
            alt="Logo"
            width={280}
            height={280}
            style={{ objectFit: "contain" }}
            className="cursor-pointer mt-2 w-56  -ml-12 md:ml-0 h-56 md:w-72 md:h-72"
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

          {/* Action Buttons */}
        </div>
      </div>
    </header>
  );
}
