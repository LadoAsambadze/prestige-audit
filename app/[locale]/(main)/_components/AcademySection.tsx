"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useTypography } from "@/hooks/useTypography";

export default function AcademySection() {
  const t = useTranslations("main");
  const ty = useTypography();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <motion.section
      className="relative w-full z-[9999999] rounded-t-[50px] md:rounded-t-[60px] lg:rounded-t-[80px] -mt-10 bg-[#0a1a3f] pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-38 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.55, ease: "easeOut" as const }}
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
        transition={{ duration: 0.8 }}
      />

      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-500/30 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-cyan-400/20 rounded-full blur-[60px] md:blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0a1a3f_90%)] z-0" />

      <div className="max-w-[2000px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 2xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" as const }}
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/40">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80"
                alt="Accounting Academy Learning"
                className="w-full h-[320px] md:h-[420px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1a3f]/80 via-transparent to-blue-500/10" />

              <motion.div
                className="absolute bottom-5 left-5 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.3,
                  ease: "easeOut" as const,
                }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-blue-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none">
                    {t("academyBadgeDuration")}
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">
                    {t("academyBadgeCert")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-5 right-5 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2"
                initial={{ opacity: 0, y: -16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.38,
                  ease: "easeOut" as const,
                }}
              >
                <div className="flex -space-x-1.5">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-blue-400/40 border border-white/30"
                    />
                  ))}
                </div>
                <span className="text-white/80 text-xs font-medium">
                  {t("academyBadgeStudents")}
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              delay: 0.12,
              ease: "easeOut" as const,
            }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-blue-400/40" />
              <span className="text-blue-300" style={ty.academyLabel}>
                {t("academySectionLabel")}
              </span>
              <span className="h-px w-10 bg-blue-400/40" />
            </div>

            <h2 className="text-white mb-5" style={ty.academyHeading}>
              {t("academyHeadingRegular")}{" "}
              <span className="italic text-blue-300">
                {t("academyHeadingItalic")}
              </span>
              <br />
              {t("academyHeadingSuffix")}
            </h2>

            <p className="text-white/60 mb-8 max-w-xl" style={ty.academyBody}>
              {t("academyBody")}
            </p>

            <ul className="space-y-3 mb-10">
              {(
                [
                  "academyFeature1",
                  "academyFeature2",
                  "academyFeature3",
                  "academyFeature4",
                ] as const
              ).map((key, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 text-white/75"
                  style={ty.academyFeature}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.09,
                    ease: "easeOut" as const,
                  }}
                >
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  {t(key)}
                </motion.li>
              ))}
            </ul>

            <motion.button
              onClick={() => {
                setFormSubmitted(false);
                setModalOpen(true);
              }}
              className="group relative inline-flex items-center gap-3 self-start bg-blue-500 hover:bg-blue-400 text-white font-semibold px-7 py-4 rounded-xl transition-colors duration-200 overflow-hidden"
              style={ty.btn}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">{t("academyCta")}</span>
              <svg
                className="w-4 h-4 relative z-10 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <Dialog
        open={modalOpen}
        onOpenChange={(open) => {
          setModalOpen(open);
          if (!open) setFormSubmitted(false);
        }}
      >
        <DialogContent className="bg-[#0d1f4a] z-[9999999999] border border-white/20 text-white max-w-lg w-full rounded-2xl p-8 shadow-2xl shadow-blue-900/50">
          {!formSubmitted ? (
            <>
              <DialogHeader className="mb-6">
                <DialogTitle className="text-white text-xl md:text-2xl font-bold">
                  {t("academyModalTitle")}
                </DialogTitle>
                <DialogDescription className="text-white/50 text-sm mt-1">
                  {t("academyModalDesc")}
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {(
                  [
                    {
                      labelKey: "academyModalFieldName",
                      placeholderKey: "academyModalFieldNamePlaceholder",
                      type: "text",
                    },
                    {
                      labelKey: "academyModalFieldPhone",
                      placeholderKey: "academyModalFieldPhonePlaceholder",
                      type: "tel",
                    },
                  ] as const
                ).map((field) => (
                  <div key={field.labelKey}>
                    <label
                      className="block text-white/60 mb-2"
                      style={ty.academyModalLabel}
                    >
                      {t(field.labelKey)}
                    </label>
                    <input
                      type={field.type}
                      placeholder={t(field.placeholderKey)}
                      className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-400/50 focus:bg-white/[0.09] transition-all"
                    />
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <label
                  className="block text-white/60 mb-2"
                  style={ty.academyModalLabel}
                >
                  {t("academyModalFieldEmail")}
                </label>
                <input
                  type="email"
                  placeholder={t("academyModalFieldEmailPlaceholder")}
                  className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-400/50 focus:bg-white/[0.09] transition-all"
                />
              </div>

              <motion.button
                onClick={() => setFormSubmitted(true)}
                className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-4 rounded-xl transition-colors duration-200"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {t("academyModalSubmit")}
              </motion.button>
            </>
          ) : (
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" as const }}
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-7 h-7 text-blue-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                {t("academyModalSuccessTitle")}
              </h3>
              <p className="text-white/55 text-sm">
                {t("academyModalSuccessBody")}
              </p>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </motion.section>
  );
}
