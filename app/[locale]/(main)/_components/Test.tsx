"use client";

import React from "react";
import {
  FileText,
  Search,
  Calculator,
  Scale,
  TrendingUp,
  Target,
  ArrowRight,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: "Financial Audit",
      description:
        "Structural financial picture of your Company, Independent, objective assessment of business profitability.",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-500/10 to-blue-600/5",
    },
    {
      icon: Search,
      title: "Tax Audit",
      description:
        "Studying of accounting and tax situation of the past and present periods; Avoid risks",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-500/10 to-purple-600/5",
    },
    {
      icon: Calculator,
      title: "Tax Consultation",
      description:
        "Legal advice on tax issues. Choosing a tax strategy. Tax optimization tips",
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-500/10 to-emerald-600/5",
    },
    {
      icon: Scale,
      title: "Tax Disputes",
      description:
        "Consultation and support during the tax audit process Support in tax disputes",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-500/10 to-orange-600/5",
    },
    {
      icon: TrendingUp,
      title: "Business and Asset Valuation",
      description:
        "Full range of appraisal services in accordance with the international Business and Asset Valuation in Georgia",
      gradient: "from-cyan-500 to-cyan-600",
      bgGradient: "from-cyan-500/10 to-cyan-600/5",
    },
    {
      icon: Target,
      title: "Special Audit Expertise",
      description:
        "Audits can be carried out pertaining to duties, authorizations, responsibilities, cost audit and internal control guidelines.",
      gradient: "from-rose-500 to-rose-600",
      bgGradient: "from-rose-500/10 to-rose-600/5",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[280px] sm:h-[320px] lg:h-[360px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=400&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-primary/50"></div>
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-secondary/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-10 h-0.5 bg-accent"></div>
            <span className="text-primary-foreground/90 font-semibold tracking-wider uppercase text-xs">
              Our Services
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-primary-foreground">
            Auditor Services in <span className="text-accent">Batumi</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-primary-foreground/90">
            and all over Georgia
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
            Best Audit - Professional services with 20 years of experience
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-16 sm:h-20 lg:h-24"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 -mt-12 sm:-mt-16 lg:-mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group border-2 border-accent/20 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-card overflow-hidden"
              >
                <CardContent className="p-6 sm:p-8">
                  {/* Icon with gradient background */}
                  <div
                    className={`relative mb-6 inline-block rounded-2xl bg-gradient-to-br ${service.bgGradient} p-1`}
                  >
                    <div
                      className={`bg-gradient-to-br ${service.gradient} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Decorative corner accent */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Title with accent line */}
                  <div className="flex items-start mb-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent mr-3 rounded-full"></div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Read More Button */}
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto font-semibold text-primary hover:text-accent transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>

                  {/* Decorative gradient line at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* History/About Section */}
        <Card className="border-2 border-accent/30 shadow-2xl bg-card overflow-hidden">
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"></div>

            <CardContent className="relative p-8 sm:p-12 lg:p-16">
              {/* Header with badge */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-1 h-16 bg-gradient-to-b from-primary via-accent to-secondary mr-4 rounded-full"></div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-0.5 bg-accent"></div>
                      <span className="text-muted-foreground font-semibold tracking-wider uppercase text-xs">
                        About Us
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                      History
                    </h2>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="inline-flex items-center space-x-3 bg-gradient-to-br from-primary to-accent p-4 rounded-2xl shadow-xl">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white">
                    <div className="text-3xl font-bold">20</div>
                    <div className="text-xs font-semibold uppercase tracking-wide opacity-90">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-base sm:text-lg">
                  <span className="text-accent font-bold">
                    Prestige Audit company
                  </span>{" "}
                  has been a Leader in Batumi and all over Georgia audit market
                  for many years. We have all the necessary licenses and permits
                  to conduct an audit in Georgia.
                </p>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-6"></div>

                <p className="text-base sm:text-lg">
                  The employees of the company are real members of{" "}
                  <span className="text-accent font-bold">
                    Georgian Federation of Professional Accountants and Auditors
                  </span>
                  , they are also undergoing the certification according to the
                  IAS program.
                </p>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent/30 rounded-tl-lg"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent/30 rounded-br-lg"></div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}
