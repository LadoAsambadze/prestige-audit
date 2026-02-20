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
  GraduationCap,
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

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <motion.section
        className="relative w-full bg-[#0a1a3f] pt-40 pb-40 px-5 overflow-hidden text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
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
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10 px-6">
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

          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-blue-200 text-xs font-bold uppercase tracking-widest mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <User size={14} />
            {member.personalInfo.title}
          </motion.div>

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

      {/* ── MAIN CONTENT ── */}
      <motion.section
        className="relative z-20 -mt-24 bg-[#f3f5f4] rounded-t-[60px] md:rounded-t-[80px] pt-24 pb-32 px-6 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
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
              {member.experience.length} positions · {member.education.length}{" "}
              degrees · {member.certifications.length} certifications
            </p>
          </motion.div>

          {/* ── TOP ROW: Photo + Contact + Summary ── */}
          <motion.div
            className="grid grid-cols-12 gap-8 mb-20"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {/* Photo */}
            <motion.div
              variants={itemVariants}
              className="col-span-12 lg:col-span-4"
            >
              <Card className="p-0 border-none shadow-xl shadow-slate-200/50 overflow-hidden">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    fill
                    src={member.personalInfo.image}
                    alt={member.personalInfo.name}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 space-y-4 bg-white">
                  {[
                    { icon: Mail, value: member.personalInfo.email },
                    { icon: Phone, value: member.personalInfo.phone },
                    { icon: MapPin, value: member.personalInfo.address },
                  ].map(({ icon: Icon, value }) => (
                    <div
                      key={value}
                      className="flex items-center gap-4 text-slate-600"
                    >
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                        <Icon className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-sm font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Summary + Skills */}
            <motion.div
              variants={itemVariants}
              className="col-span-12 lg:col-span-8 flex flex-col gap-6"
            >
              <Card className="p-8 border-none shadow-lg shadow-slate-200/50 bg-white flex-1">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                  Profile Summary
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed font-light">
                  {member.summary}
                </p>
              </Card>
              <Card className="p-6 border-none shadow-lg shadow-slate-200/50 bg-white">
                <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
                  <Cpu className="w-4 h-4 text-blue-600" /> Technical
                  Proficiency
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.skills.software.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-md border border-blue-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
                  <Globe className="w-4 h-4 text-blue-600" /> Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {member.skills.languages.map((l) => (
                    <div
                      key={l.name}
                      className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100"
                    >
                      <span className="text-sm text-slate-700 font-medium">
                        {l.name}
                      </span>
                      <span className="text-xs font-bold text-slate-400 bg-slate-200 px-2 py-0.5 rounded">
                        {l.level}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* ── EXPERIENCE TIMELINE ── */}
          <div className="mb-20">
            <motion.div
              className="flex items-center gap-3 mb-12"
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-8 h-0.5 bg-[#2563eb]"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <h2 className="text-xl font-bold text-gray-900 uppercase tracking-tight flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600" /> Work Experience
              </h2>
              <motion.div
                className="w-8 h-0.5 bg-[#2563eb]"
                initial={{ scaleX: 0, originX: 1 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </motion.div>

            {/* Alternating timeline */}
            <div className="relative">
              {/* Center line — hidden on mobile, shown md+ */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-300 via-blue-200 to-transparent -translate-x-px" />

              <div className="space-y-10">
                {member.experience.map((job, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.55,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className={`relative flex flex-col md:flex-row items-start md:items-center gap-6
                        ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
                      `}
                    >
                      {/* Card */}
                      <div className="flex-1 pl-10 md:pl-0">
                        <Card
                          className={`p-6 border-none shadow-lg shadow-slate-200/60 bg-white hover:shadow-xl transition-shadow duration-300
                          ${isLeft ? "md:mr-10" : "md:ml-10"}
                        `}
                        >
                          <div
                            className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3
                            ${!isLeft ? "md:flex-row-reverse md:text-right" : ""}
                          `}
                          >
                            <h3 className="text-lg font-bold text-slate-900">
                              {job.position}
                            </h3>
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
                              {job.period}
                            </span>
                          </div>
                          <p
                            className={`text-slate-500 font-medium text-sm mb-4 ${!isLeft ? "md:text-right" : ""}`}
                          >
                            {job.company} · {job.location}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {job.responsibilities.map((res, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100"
                              >
                                <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                                {res}
                              </div>
                            ))}
                          </div>
                        </Card>
                      </div>

                      {/* Center dot — absolutely positioned on mobile, normal on md */}
                      <div
                        className="absolute left-0 top-5 md:static md:flex-shrink-0 md:left-auto md:top-auto z-10
                        w-10 h-10 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center
                        shadow-md shadow-blue-200"
                      >
                        <Briefcase className="w-4 h-4 text-blue-500" />
                      </div>

                      {/* Spacer for opposite side */}
                      <div className="flex-1 hidden md:block" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── EDUCATION TIMELINE ── */}
          <div className="mb-20">
            <motion.div
              className="flex items-center gap-3 mb-12"
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-8 h-0.5 bg-[#2563eb]"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <h2 className="text-xl font-bold text-gray-900 uppercase tracking-tight flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" /> Education
              </h2>
              <motion.div
                className="w-8 h-0.5 bg-[#2563eb]"
                initial={{ scaleX: 0, originX: 1 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </motion.div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-300 via-blue-200 to-transparent -translate-x-px" />
              <div className="space-y-10">
                {member.education.map((edu, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.55,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className={`relative flex flex-col md:flex-row items-start md:items-center gap-6
                        ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
                      `}
                    >
                      <div className="flex-1 pl-10 md:pl-0">
                        <Card
                          className={`p-6 border-none shadow-lg shadow-slate-200/60 bg-white hover:shadow-xl transition-shadow duration-300
                          ${isLeft ? "md:mr-10" : "md:ml-10"}
                        `}
                        >
                          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            {edu.period}
                          </span>
                          <h3 className="text-lg font-bold text-slate-900 mt-3 mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-slate-500 text-sm mb-2">
                            {edu.institution}
                          </p>
                          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                            {edu.specialization}
                          </span>
                        </Card>
                      </div>
                      <div
                        className="absolute left-0 top-5 md:static md:flex-shrink-0 z-10
                        w-10 h-10 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center
                        shadow-md shadow-blue-200"
                      >
                        <GraduationCap className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="flex-1 hidden md:block" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── CERTIFICATIONS TIMELINE ── */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-12"
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-8 h-0.5 bg-[#2563eb]"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <h2 className="text-xl font-bold text-gray-900 uppercase tracking-tight flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" /> Certifications
              </h2>
              <motion.div
                className="w-8 h-0.5 bg-[#2563eb]"
                initial={{ scaleX: 0, originX: 1 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </motion.div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-300 via-blue-200 to-transparent -translate-x-px" />
              <div className="space-y-10">
                {member.certifications.map((cert, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.55,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className={`relative flex flex-col md:flex-row items-start md:items-center gap-6
                        ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
                      `}
                    >
                      <div className="flex-1 pl-10 md:pl-0">
                        <Card
                          className={`p-6 border-none shadow-lg shadow-slate-200/60 bg-white hover:shadow-xl transition-shadow duration-300
                          ${isLeft ? "md:mr-10" : "md:ml-10"}
                        `}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <Award className="w-4 h-4 text-amber-500" />
                            <h3 className="font-bold text-slate-900 text-sm">
                              {cert.name}
                            </h3>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {cert.details}
                          </p>
                        </Card>
                      </div>
                      <div
                        className="absolute left-0 top-5 md:static md:flex-shrink-0 z-10
                        w-10 h-10 rounded-full bg-white border-2 border-amber-400 flex items-center justify-center
                        shadow-md shadow-amber-100"
                      >
                        <Award className="w-4 h-4 text-amber-500" />
                      </div>
                      <div className="flex-1 hidden md:block" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
