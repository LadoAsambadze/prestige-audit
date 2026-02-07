"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Phone,
  Calendar,
  Menu,
  Globe,
  FileCheck,
  Calculator,
  MessageSquare,
  TrendingUp,
  ShieldCheck,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const auditServices = [
  {
    name: "Financial Audit",
    href: "/services/financial-audit",
    icon: FileCheck,
  },
  {
    name: "Tax Audit",
    href: "/services/tax-audit",
    icon: Calculator,
  },
  {
    name: "Tax Consultation",
    href: "/services/tax-consultation",
    icon: MessageSquare,
  },
  {
    name: "Business and Asset Valuation",
    href: "/services/business-valuation",
    icon: TrendingUp,
  },
  {
    name: "Special Audit Expertise",
    href: "/services/special-audit",
    icon: ShieldCheck,
  },
  {
    name: "Tax Disputes",
    href: "/services/tax-disputes",
    icon: Scale,
  },
];

const mainNavigation = [
  { name: "Audit Services", href: "#", hasDropdown: true },
  { name: "Auditors Team", href: "/team" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const languages = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "ka", label: "KA", flag: "🇬🇪" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState("en");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (locale: string) => {
    setCurrentLocale(locale);
    // Add your language change logic here
    console.log("Switching to:", locale);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-white dark:bg-slate-900"
      }`}
    >
      {/* Main Navigation */}
      <div className="border-b border-blue-100 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  Prestige Audit
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Financial Consulting
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {mainNavigation.map((item) =>
                item.hasDropdown ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 text-slate-700 dark:text-slate-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border-2 border-blue-100 dark:border-blue-900/30 overflow-hidden">
                        <div className="p-2">
                          {auditServices.map((service) => {
                            const Icon = service.icon;
                            return (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
                              >
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                  {service.name}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 text-slate-700 dark:text-slate-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 ${
                      pathname === item.href
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </nav>

            {/* Right Side: Language Switcher & CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    <Globe size={18} />
                    <span className="font-medium">
                      {languages.find((l) => l.code === currentLocale)?.label}
                    </span>
                    <ChevronDown size={14} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-32">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="cursor-pointer"
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="outline"
                size="sm"
                className="border-2 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                asChild
              >
                <a href="tel:+15551234567" className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>Call Us</span>
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="/contact" className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Book Appointment</span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button with Sheet */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden p-2 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                        <FileCheck className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-slate-800 dark:text-slate-100">
                          Prestige Audit
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          Financial Consulting
                        </span>
                      </div>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-8 space-y-2">
                  {mainNavigation.map((item) =>
                    item.hasDropdown ? (
                      <div key={item.name} className="space-y-2">
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 text-slate-700 dark:text-slate-300 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                        >
                          {item.name}
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {isServicesOpen && (
                          <div className="pl-4 space-y-1">
                            {auditServices.map((service) => {
                              const Icon = service.icon;
                              return (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                  <span className="text-sm text-slate-600 dark:text-slate-400">
                                    {service.name}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block px-4 py-3 text-slate-700 dark:text-slate-300 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors ${
                          pathname === item.href
                            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                            : ""
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ),
                  )}

                  {/* Language Switcher in Mobile */}
                  <div className="pt-4 border-t border-blue-100 dark:border-blue-900/30">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="w-full flex items-center justify-between px-4 py-3 text-slate-700 dark:text-slate-300 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                          <div className="flex items-center gap-2">
                            <Globe size={18} />
                            <span>Language</span>
                          </div>
                          <span className="text-sm text-blue-600 dark:text-blue-400">
                            {
                              languages.find((l) => l.code === currentLocale)
                                ?.flag
                            }{" "}
                            {
                              languages.find((l) => l.code === currentLocale)
                                ?.label
                            }
                          </span>
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        {languages.map((lang) => (
                          <DropdownMenuItem
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className="cursor-pointer"
                          >
                            <span className="mr-2">{lang.flag}</span>
                            {lang.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Mobile CTA Buttons */}
                  <div className="pt-4 space-y-2 border-t border-blue-100 dark:border-blue-900/30">
                    <Button
                      variant="outline"
                      className="w-full border-2 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      asChild
                    >
                      <a
                        href="tel:+15551234567"
                        className="flex items-center justify-center gap-2"
                      >
                        <Phone size={16} />
                        <span>Call Us</span>
                      </a>
                    </Button>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                      asChild
                    >
                      <a
                        href="/contact"
                        className="flex items-center justify-center gap-2"
                      >
                        <Calendar size={16} />
                        <span>Book Appointment</span>
                      </a>
                    </Button>
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
