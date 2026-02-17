"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Award,
  User,
  CheckCircle2,
  Globe,
  Cpu,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface CVPageProps {
  params: Promise<{ id: string; locale: string }>;
}

export default function TeamMemberCV({ params }: CVPageProps) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const cvData = {
    "gogita-baramidze": {
      personalInfo: {
        name: "გოგიტა ბარამიძე",
        title: "Senior Auditor & Financial Consultant",
        image: "/1.png",
        birthDate: "19.06.1998",
        address: "ბათუმი, აღმაშენებლის 7ა ბინა 12",
        phone: "595-91-22-96",
        email: "Gobaramidze@gmail.com",
        nationality: "საქართველო",
      },
      summary:
        "გამოცდილი აუდიტორი და ფინანსური კონსულტანტი (ACCA სერტიფიცირების პროცესში). სპეციალიზირებული ფინანსური ანგარიშგების აუდიტში, საგადასახადო კანონმდებლობასა და ბიზნესის ფინანსურ კონსულტირებაში.",
      education: [
        {
          degree: "მაგისტრის ხარისხი",
          institution: "ბათუმის შოთა რუსთაველის სახელმწიფო უნივერსიტეტი",
          specialization: "ფინანსები",
          period: "2020-2022",
        },
        {
          degree: "ბაკალავრის ხარისხი",
          institution: "ბათუმის შოთა რუსთაველის სახელმწიფო უნივერსიტეტი",
          specialization: "ბიზნესის ადმინისტრირება",
          period: "2016-2020",
        },
      ],
      certifications: [
        {
          name: "GFPAA / ACCA სერტიფიცირების პროგრამა",
          details:
            "I დონე: F1, F2, F3; II დონე: F4, F6, F7, F8; III დონე: P2, P7, SBL. სერტიფიცირებული ბუღალტერი.",
        },
        {
          name: "საგადასახადო და ფინანსური ტრენინგები",
          details:
            "მცირე და საშუალო საწარმოების ფინანსური ანალიზი (GFPAA/SDC), საგადასახადო კოდექსის სრული კურსი და ფინანსური აღრიცხვა (ფინანსთა სამინისტროს აკადემია).",
        },
      ],
      experience: [
        {
          company: "შპს პრესტიჟ-აუდიტი",
          position: "ფინანსური ანგარიშგების აუდიტის ჯგუფის მენეჯერი",
          location: "ბათუმი",
          period: "08.2023 - დღემდე",
          responsibilities: [
            "აუდიტის პროცესის დაგეგმვა და გუნდის კოორდინაცია",
            "ფინანსური ანგარიშგებების ანალიზი IFRS/GAAP სტანდარტებით",
            "შიდა კონტროლის სისტემების შეფასება და რეკომენდაციები",
            "აუდიტის ანგარიშის მომზადება და შედეგების პრეზენტაცია",
          ],
        },
        {
          company: "World Bank / აწარმოე საქართველოში (MSMEs Project)",
          position: "პროექტის მენეჯერი",
          location: "ბათუმი",
          period: "11.2023 - დღემდე",
          responsibilities: [
            "პროექტების სრული ციკლის მართვა (დაგეგმვა, შესრულება, კონტროლი)",
            "რესურსების ეფექტიანი განაწილება და გუნდის კოორდინაცია",
            "კომუნიკაცია კლიენტებთან და რეგულარული ანგარიშგება",
            "სამუშაო პროცესების ოპტიმიზაცია და ხარისხის კონტროლი",
          ],
        },
        {
          company: "GFPAA & SDC",
          position: "ფინანსური მრჩეველი",
          location: "ბათუმი",
          period: "04.2023 - 10.2023",
          responsibilities: [
            "ფინანსური კონსულტაციები მცირე და საშუალო ბიზნესისთვის",
            "ფულადი ნაკადების მართვისა და ოპტიმიზაციის კონსულტირება",
            "საგადასახადო რისკების იდენტიფიცირება",
            "ფინანსური მოდელების შექმნა ეფექტიანობის გაზრდისთვის",
          ],
        },
        {
          company: "შპს პრესტიჟ-აუდიტი",
          position: "აუდიტორის ასისტენტი",
          location: "ბათუმი",
          period: "08.2021 - 07.2023",
          responsibilities: [
            "პირველადი საბუღალტრო დოკუმენტების ანალიზი",
            "აუდიტორული ტესტირების ჩატარება (Sampling, Reconciliation)",
            "აუდიტის სამუშაო ფაილების მომზადება",
            "მონაცემთა დამუშავება Excel-სა და აუდიტის პროგრამებში",
          ],
        },
      ],
      skills: {
        software: ["MS OFFICE (Expert)", "ORIS 5/7 (Expert)", "FINA", "FMG"],
        languages: [
          { name: "ქართული", level: "Native" },
          { name: "რუსული", level: "B1" },
          { name: "ინგლისური", level: "B2" },
        ],
      },
    },
  };

  const member = cvData[id as keyof typeof cvData];

  if (!member) return <div className="p-20 text-center">Member not found</div>;

  // Animation variants matching team page style
  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ── HERO SECTION (mirrors team page) ── */}
      <motion.section
        className="relative w-full bg-[#0a1a3f] pt-40 pb-40 px-5 overflow-hidden text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background texture overlay */}
        <motion.div
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url('/background.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Ambient blur orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10 px-6">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute left-6 top-0"
          >
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-blue-300/70 hover:text-blue-200 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Team
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-blue-200 text-xs font-bold uppercase tracking-widest mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <User size={14} />
            {member.personalInfo.title}
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {member.personalInfo.name}
          </motion.h1>
        </div>
      </motion.section>

      {/* ── MAIN CONTENT (rounded top, like team page) ── */}
      <motion.section
        className="relative z-20 -mt-24 bg-[#f3f5f4] rounded-t-[60px] md:rounded-t-[80px] pt-24 pb-32 px-6 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header row */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                className="w-8 h-0.5 bg-[#2563eb]"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">
                Curriculum Vitae
              </h2>
              <motion.div
                className="w-8 h-0.5 bg-[#2563eb]"
                initial={{ scaleX: 0, originX: 1 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </div>
            <p className="text-gray-500 text-sm font-medium">
              {member.experience.length} positions • {member.education.length}{" "}
              degrees • {member.certifications.length} certifications
            </p>
          </motion.div>

          {/* CV GRID */}
          <motion.div
            className="grid grid-cols-12 gap-8"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {/* ── SIDEBAR ── */}
            <motion.aside
              className="col-span-12 lg:col-span-4 space-y-6"
              variants={itemVariants}
            >
              {/* Profile card */}
              <Card className="p-0 border-none shadow-xl shadow-slate-200/50 overflow-hidden">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    fill
                    src="/5.jpeg"
                    alt={member.personalInfo.name}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 space-y-4 bg-white">
                  <div className="flex items-center gap-4 text-slate-600">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                      <Mail className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-sm font-medium">
                      {member.personalInfo.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                      <Phone className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-sm font-medium">
                      {member.personalInfo.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                      <MapPin className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-sm font-medium">
                      {member.personalInfo.address}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Skills card */}
              <Card className="p-6 border-none shadow-lg shadow-slate-200/50 bg-white">
                <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-6">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  Technical Proficiency
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.skills.software.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-md border border-blue-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
                    <Globe className="w-4 h-4 text-blue-600" />
                    Languages
                  </h3>
                  <div className="space-y-3">
                    {member.skills.languages.map((l) => (
                      <div
                        key={l.name}
                        className="flex justify-between items-center"
                      >
                        <span className="text-sm text-slate-600">{l.name}</span>
                        <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                          {l.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.aside>

            {/* ── MAIN CONTENT ── */}
            <motion.div
              className="col-span-12 lg:col-span-8 space-y-8"
              variants={itemVariants}
            >
              {/* Summary */}
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                  Profile Summary
                </h2>
                <div className="text-lg text-slate-700 leading-relaxed font-light">
                  {member.summary}
                </div>
              </section>

              {/* Experience */}
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-8">
                  Work Experience
                </h2>
                <div className="space-y-0 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">
                  {member.experience.map((job, i) => (
                    <div key={i} className="relative pl-12 pb-10 last:pb-0">
                      <div className="absolute left-0 top-1 w-9 h-9 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center z-10 shadow-sm">
                        <Briefcase className="w-4 h-4 text-blue-500" />
                      </div>
                      <div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-slate-900">
                            {job.position}
                          </h3>
                          <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            {job.period}
                          </span>
                        </div>
                        <p className="text-slate-500 font-medium mb-4">
                          {job.company} • {job.location}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {job.responsibilities.map((res, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100"
                            >
                              <CheckCircle2 className="w-3 h-3 text-green-500 mt-1 shrink-0" />
                              {res}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education + Certifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
                    Education
                  </h2>
                  <div className="space-y-4">
                    {member.education.map((edu, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50/50"
                      >
                        <p className="text-xs font-bold text-blue-600 mb-1">
                          {edu.period}
                        </p>
                        <h4 className="font-bold text-slate-900">
                          {edu.degree}
                        </h4>
                        <p className="text-sm text-slate-500">
                          {edu.institution}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
                    Certifications
                  </h2>
                  <div className="space-y-4">
                    {member.certifications.map((cert, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-amber-500" />
                          <h4 className="font-bold text-slate-900 text-sm">
                            {cert.name}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {cert.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
