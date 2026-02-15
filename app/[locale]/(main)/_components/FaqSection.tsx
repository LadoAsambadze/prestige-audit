"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

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
];

export default function FAQSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        opacity: { duration: 0.6 },
        y: {
          type: "spring" as const,
          stiffness: 80,
          damping: 12,
          mass: 1,
        },
        scale: { duration: 0.7 },
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const accordionContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const faqItemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const orbVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <motion.section
      className="relative w-full z-[9999999] rounded-t-[50px] md:rounded-t-[60px] lg:rounded-t-[80px] -mt-10 bg-[#0a1a3f] pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-38 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <motion.div
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `url('/background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-500/30 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"
        variants={orbVariants}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-cyan-400/20 rounded-full blur-[60px] md:blur-[80px] pointer-events-none"
        variants={orbVariants}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 1,
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0a1a3f_90%)] z-0" />

      <div className="max-w-[2000px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 2xl:px-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            variants={headerVariants}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
            >
              Frequently Asked <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                }}
              >
                Questions
              </motion.span>
            </motion.h2>
          </motion.div>

          <motion.div variants={accordionContainerVariants}>
            <Accordion
              type="single"
              collapsible
              className="space-y-3 md:space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div key={faq.id} variants={faqItemVariants}>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      transition: {
                        type: "spring" as const,
                        stiffness: 400,
                        damping: 25,
                      },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <AccordionItem
                      value={faq.id}
                      className="group rounded-xl md:rounded-2xl border border-white/10 bg-[#16254a]/80 px-2 transition-all duration-300 hover:border-blue-400/50 hover:bg-[#16254a]/90 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                      <AccordionTrigger className="px-3 md:px-4 py-4 md:py-6 text-left text-white font-medium hover:no-underline text-sm md:text-base lg:text-lg transition-none">
                        <motion.span
                          className="flex items-center gap-3 md:gap-4"
                          whileHover={{ x: 4 }}
                          transition={{
                            type: "spring" as const,
                            stiffness: 400,
                            damping: 25,
                          }}
                        >
                          {faq.question}
                        </motion.span>
                      </AccordionTrigger>
                      <AccordionContent className="px-3 md:px-4 pb-4 md:pb-6 text-blue-100/80 text-sm md:text-base leading-relaxed overflow-hidden">
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.25, 0.46, 0.45, 0.94] as const,
                          }}
                        >
                          {faq.answer}
                        </motion.div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
