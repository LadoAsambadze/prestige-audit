"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    id: "1",
    question: "What services do your financial consultants provide?",
    answer:
      "Our financial consultants offer comprehensive services including investment planning, retirement strategies, tax optimization, wealth management, and personalized financial advice tailored to your unique situation.",
  },
  {
    id: "2",
    question: "Do you offer custom financial planning?",
    answer:
      "Yes, we specialize in fully customized financial planning. We take the time to understand your goals, risk tolerance, timeline, and current financial picture to create a strategy built specifically for you.",
  },
  {
    id: "3",
    question: "How do you ensure data confidentiality and compliance?",
    answer:
      "We follow strict security protocols including end-to-end encryption, secure cloud storage, regular security audits, and full compliance with GDPR, SOC 2, and relevant financial regulations.",
  },
  {
    id: "4",
    question: "What are the different types of audits we perform?",
    answer:
      "We conduct financial statement audits, compliance audits, operational audits, internal audits, IT system audits, and forensic audits — each tailored to meet specific regulatory or business needs.",
  },
  {
    id: "5",
    question: "What is the purpose of a financial audit?",
    answer:
      "A financial audit provides an independent, objective evaluation of your financial statements to confirm their accuracy, completeness, and compliance with applicable accounting standards and regulations.",
  },
];

export default function FAQSection() {
  return (
    <section className="relative w-full  rounded-to-[50px] -mt-10 min-h-screen bg-[#0f141a] py-20 md:py-24 lg:py-28 px-5 sm:px-8 lg:px-12 overflow-hidden">
      {/* Main background photo – abstract waves/cells */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1617791160505-6f00504e3519')`,
          // You can also try these alternatives:
          // https://images.unsplash.com/photo-1617791160505-6f00504e3519 (soft blue waves)
          // https://images.unsplash.com/photo-1557683311-973673baf3a6 (dark fluid cells)
          // https://images.unsplash.com/photo-1557683316-973673baf926 (geometric flow)
        }}
      />

      {/* Subtle dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

      {/* Optional extra subtle wave overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 800"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 Q300,180 600,300 T1200,300 L1200,800 L0,800 Z"
            fill="url(#waveGrad)"
            opacity="0.15"
          />
          <path
            d="M0,450 Q300,330 600,450 T1200,450 L1200,800 L0,800 Z"
            fill="url(#waveGrad)"
            opacity="0.1"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.7s ease-out forwards;
        }
        .faq-item {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .faq-item:nth-child(1) {
          animation-delay: 0.1s;
        }
        .faq-item:nth-child(2) {
          animation-delay: 0.2s;
        }
        .faq-item:nth-child(3) {
          animation-delay: 0.3s;
        }
        .faq-item:nth-child(4) {
          animation-delay: 0.4s;
        }
        .faq-item:nth-child(5) {
          animation-delay: 0.5s;
        }
        .hover-lift {
          transition: all 0.25s ease;
        }
        .hover-lift:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
        }
      `}</style>

      <div className="mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Find quick answers to the most common questions about our services
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <div className="hover-lift">
                <AccordionItem
                  value={faq.id}
                  className="rounded-xl border border-gray-700/70 bg-gray-900/50 backdrop-blur-md shadow-xl overflow-hidden transition-all"
                >
                  <AccordionTrigger className="px-5 py-5 text-left text-base md:text-lg font-medium text-gray-100 hover:text-white hover:no-underline transition-colors data-[state=open]:bg-blue-950/40">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="px-5 pb-5 pt-1 text-gray-200 text-base leading-relaxed border-t border-gray-700/50">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
