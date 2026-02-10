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
    <section className="relative w-full rounded-t-[60px] -mt-10 min-h-screen bg-[#020817] pt-24 pb-32 px-5 overflow-hidden">
      {/* 1. THE EXACT BACKGROUND IMAGE: Abstract Blue Light Trails */}
      <div
        className="absolute inset-0 z-0 opacity-60 mix-blend-screen"
        style={{
          backgroundImage: `url('4.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 2. GLOWING ORBS: Creates the 'light spot' effect from your image */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* 3. VIGNETTE OVERLAY: Keeps the edges dark and the center focused */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020817_80%)] z-0" />

      <div className="mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Questions
            </span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-2 transition-all hover:bg-white/10 hover:border-blue-500/30 shadow-2xl"
            >
              <AccordionTrigger className="px-4 py-6 text-left text-white font-medium hover:no-underline text-lg">
                <span className="flex items-center gap-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 text-blue-100/70 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
