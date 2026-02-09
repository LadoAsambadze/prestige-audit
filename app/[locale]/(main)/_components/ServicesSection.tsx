"use client";

import React from "react";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  Briefcase,
  Star,
} from "lucide-react";

const services = [
  {
    title: "Audit Services",
    description:
      "Independent and thorough examination of financial statements to ensure accuracy, compliance, and transparency.",
    icon: <BarChart3 className="w-10 h-10" />,
    color: "blue",
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Full-cycle accounting, financial reporting, payroll, tax preparation, and day-to-day financial management.",
    icon: <Calculator className="w-10 h-10" />,
    color: "indigo",
  },
  {
    title: "Financial Consulting",
    description:
      "Strategic financial planning, budgeting, forecasting, investment advice, and business performance optimization.",
    icon: <Briefcase className="w-10 h-10" />,
    color: "purple",
  },
  {
    title: "Business Rating & Valuation",
    description:
      "Professional company valuation, credit rating support, due diligence, and market position assessment.",
    icon: <Star className="w-10 h-10" />,
    color: "amber",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-full mb-4">
            Our Core Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Professional <span className="text-blue-600">Solutions</span> for
            Your Business
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a full range of financial and advisory services tailored
            to help your business grow, stay compliant, and achieve its goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                group relative bg-white rounded-2xl shadow-lg border border-gray-100 
                overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
                hover:border-blue-200
              `}
            >
              {/* Icon & Color Accent */}
              <div
                className={`h-2 bg-${service.color}-600 group-hover:bg-${service.color}-700 transition-colors`}
              />

              <div className="p-8">
                {/* Icon */}
                <div
                  className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center bg-${service.color}-50 text-${service.color}-600 group-hover:bg-${service.color}-100 transition-colors`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn more link */}
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need a custom solution or consultation?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
