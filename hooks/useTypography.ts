"use client";

import { useLocale } from "next-intl";

const en = {
  label: {
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as any,
  },
  heroTitle: {
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
    lineHeight: 1.08,
    letterSpacing: "-0.02em",
    fontWeight: 600,
  },
  sectionHeading: {
    fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
    lineHeight: 1.15,
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  sectionBody: {
    fontSize: "1rem",
    lineHeight: 1.7,
  },
  itemTitle: {
    fontSize: "1.125rem",
    fontWeight: 600,
    lineHeight: 1.3,
  },
  itemDesc: {
    fontSize: "0.875rem",
    lineHeight: 1.6,
  },
  cardTitle: {
    fontSize: "1.25rem",
    lineHeight: 1.25,
    fontWeight: 700,
    letterSpacing: "-0.01em",
  },
  cardDesc: {
    fontSize: "0.9375rem",
    lineHeight: 1.65,
  },
  cardFeature: {
    fontSize: "0.8125rem",
    fontWeight: 500,
  },
  btn: {
    fontSize: "0.875rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as any,
  },

  // AboutParallax
  aboutLabel: {
    fontSize: "0.625rem",
    fontWeight: 600,
    letterSpacing: "0.25em",
    textTransform: "uppercase" as any,
  },
  aboutHeading: {
    fontSize: "clamp(2rem, 4vw, 3.8rem)",
    lineHeight: 1.1,
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  aboutBody: {
    fontSize: "1rem",
    lineHeight: 1.7,
  },
  aboutLocation: {
    fontSize: "0.75rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase" as any,
  },
  aboutStatValue: {
    fontSize: "1.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
  },
  aboutStatLabel: {
    fontSize: "0.625rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as any,
  },

  // TeamSection
  teamLabel: {
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as any,
  },
  teamCeoName: {
    fontSize: "1.5rem",
    fontWeight: 900,
    lineHeight: 1.2,
  },
  teamCeoTitle: {
    fontSize: "0.625rem",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as any,
  },
  deptCardTitle: {
    fontSize: "1rem",
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
  },
  deptCardBtn: {
    fontSize: "0.625rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as any,
  },

  // AcademySection
  academyLabel: {
    fontSize: "0.625rem",
    fontWeight: 600,
    letterSpacing: "0.25em",
    textTransform: "uppercase" as any,
  },
  academyHeading: {
    fontSize: "clamp(1.875rem, 4vw, 3rem)",
    lineHeight: 1.1,
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  academyBody: {
    fontSize: "1rem",
    lineHeight: 1.7,
  },
  academyFeature: {
    fontSize: "0.875rem",
    lineHeight: 1.6,
  },
  academyModalLabel: {
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as any,
  },

  // VideoSection
  videoYearsLabel: {
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as any,
  },
  videoExcellence: {
    fontSize: "1.5rem",
    fontWeight: 900,
    lineHeight: 1.2,
  },
  videoHeading: {
    fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
    lineHeight: 1.2,
    fontWeight: 900,
    letterSpacing: "-0.02em",
  },
  videoBody: {
    fontSize: "1rem",
    lineHeight: 1.7,
  },
  videoStatValue: {
    fontSize: "1.5rem",
    fontWeight: 900,
    lineHeight: 1.2,
  },
  videoStatLabel: {
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as any,
  },
};

const ka: typeof en = {
  label: {
    fontSize: "0.875rem",
    fontWeight: 600,
    letterSpacing: "0.04em",
    textTransform: "none" as any,
  },
  heroTitle: {
    fontSize: "clamp(2rem, 4.6vw, 4.1rem)",
    lineHeight: 1.2,
    letterSpacing: "-0.01em",
    fontWeight: 700,
  },
  sectionHeading: {
    fontSize: "clamp(1.6rem, 3.2vw, 2.1rem)",
    lineHeight: 1.28,
    fontWeight: 700,
    letterSpacing: "-0.005em",
  },
  sectionBody: {
    fontSize: "1rem",
    lineHeight: 1.85,
  },
  itemTitle: {
    fontSize: "1.075rem",
    fontWeight: 600,
    lineHeight: 1.45,
  },
  itemDesc: {
    fontSize: "0.9rem",
    lineHeight: 1.75,
  },
  cardTitle: {
    fontSize: "1.175rem",
    lineHeight: 1.35,
    fontWeight: 700,
    letterSpacing: "0em",
  },
  cardDesc: {
    fontSize: "0.9375rem",
    lineHeight: 1.8,
  },
  cardFeature: {
    fontSize: "0.875rem",
    fontWeight: 500,
  },
  btn: {
    fontSize: "0.9rem",
    fontWeight: 600,
    letterSpacing: "0.02em",
    textTransform: "none" as any,
  },

  // AboutParallax
  aboutLabel: {
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "none" as any,
  },
  aboutHeading: {
    fontSize: "clamp(1.75rem, 3.6vw, 3.4rem)",
    lineHeight: 1.22,
    fontWeight: 700,
    letterSpacing: "-0.005em",
  },
  aboutBody: {
    fontSize: "1rem",
    lineHeight: 1.85,
  },
  aboutLocation: {
    fontSize: "0.8rem",
    letterSpacing: "0.06em",
    textTransform: "none" as any,
  },
  aboutStatValue: {
    fontSize: "1.4rem",
    fontWeight: 700,
    lineHeight: 1.3,
  },
  aboutStatLabel: {
    fontSize: "0.7rem",
    letterSpacing: "0.05em",
    textTransform: "none" as any,
  },

  // TeamSection
  teamLabel: {
    fontSize: "0.875rem",
    fontWeight: 600,
    letterSpacing: "0.04em",
    textTransform: "none" as any,
  },
  teamCeoName: {
    fontSize: "1.35rem",
    fontWeight: 900,
    lineHeight: 1.35,
  },
  teamCeoTitle: {
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "none" as any,
  },
  deptCardTitle: {
    fontSize: "0.95rem",
    fontWeight: 700,
    lineHeight: 1.45,
    letterSpacing: "0em",
  },
  deptCardBtn: {
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.03em",
    textTransform: "none" as any,
  },

  // AcademySection
  academyLabel: {
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "none" as any,
  },
  academyHeading: {
    fontSize: "clamp(1.7rem, 3.6vw, 2.75rem)",
    lineHeight: 1.25,
    fontWeight: 700,
    letterSpacing: "-0.005em",
  },
  academyBody: {
    fontSize: "1rem",
    lineHeight: 1.85,
  },
  academyFeature: {
    fontSize: "0.9rem",
    lineHeight: 1.75,
  },
  academyModalLabel: {
    fontSize: "0.8rem",
    fontWeight: 500,
    letterSpacing: "0.03em",
    textTransform: "none" as any,
  },

  // VideoSection
  videoYearsLabel: {
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "none" as any,
  },
  videoExcellence: {
    fontSize: "1.35rem",
    fontWeight: 900,
    lineHeight: 1.35,
  },
  videoHeading: {
    fontSize: "clamp(1.6rem, 3.2vw, 2.1rem)",
    lineHeight: 1.32,
    fontWeight: 900,
    letterSpacing: "-0.005em",
  },
  videoBody: {
    fontSize: "1rem",
    lineHeight: 1.85,
  },
  videoStatValue: {
    fontSize: "1.35rem",
    fontWeight: 900,
    lineHeight: 1.3,
  },
  videoStatLabel: {
    fontSize: "0.8rem",
    fontWeight: 500,
    letterSpacing: "0.04em",
    textTransform: "none" as any,
  },
};

export function useTypography() {
  const locale = useLocale();
  return locale === "ka" ? ka : en;
}
