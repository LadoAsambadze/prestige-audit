"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    // Lighter background color #0a1a3f instead of #061232
    <section className="relative w-full rounded-t-[60px] -mt-10 min-h-screen bg-[#0a1a3f] pt-24 pb-32 px-5 overflow-hidden">
      {/* 1. BACKGROUND IMAGE: Reduced opacity for a 'lighter' feel */}
      <div
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `url('background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 2. OPTIMIZED GLOWING ORBS: Increased brightness, removed blur where possible */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none" />

      {/* 3. LIGHTER OVERLAY: Less aggressive vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0a1a3f_90%)] z-0" />

      <div className="mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
              Questions
            </span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              // OPTIMIZATION: Removed backdrop-blur-xl and used a flat semi-transparent hex
              // This prevents the GPU from recalculating pixels behind the card during animation
              className="group rounded-2xl border border-white/10 bg-[#16254a]/80 px-2 transition-colors duration-200 hover:border-blue-400/50"
            >
              <AccordionTrigger className="px-4 py-6 text-left text-white font-medium hover:no-underline text-lg transition-none">
                <span className="flex items-center gap-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 text-blue-100/80 text-base leading-relaxed overflow-hidden">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
