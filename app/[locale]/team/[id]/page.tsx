"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Languages,
  ArrowLeft,
  Download,
  User,
  CheckCircle2,
  Globe,
  Cpu,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
        nameEn: "Gogita Baramidze",
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

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/team"
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Team</span>
          </Link>
          <Button
            size="sm"
            className="bg-slate-900 hover:bg-blue-600 text-white gap-2 rounded-full px-5 transition-all"
          >
            <Download className="w-4 h-4" />
            Export PDF
          </Button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-12 gap-8">
          {/* SIDEBAR */}
          <aside className="col-span-12 lg:col-span-4 space-y-6">
            <Card className="p-0 border-none shadow-xl shadow-slate-200/50 overflow-hidden">
              <div className="bg-slate-900 p-8 text-center">
                <div className="relative inline-block">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-400 p-1">
                    <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center overflow-hidden">
                      <User className="w-16 h-16 text-slate-400" />
                    </div>
                  </div>
                </div>
                <h1 className="mt-4 text-2xl font-bold text-white tracking-tight">
                  {member.personalInfo.name}
                </h1>
                <p className="text-blue-400 font-medium text-sm mt-1 uppercase tracking-widest">
                  {member.personalInfo.title}
                </p>
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
          </aside>

          {/* MAIN CONTENT */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <section>
              <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                Profile Summary
              </h2>
              <div className="text-lg text-slate-700 leading-relaxed font-light">
                {member.summary}
              </div>
            </section>

            <section>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section>
                <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
                  Education
                </h2>
                <div className="space-y-4">
                  {member.education.map((edu, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-slate-200 bg-white"
                    >
                      <p className="text-xs font-bold text-blue-600 mb-1">
                        {edu.period}
                      </p>
                      <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                      <p className="text-sm text-slate-500">
                        {edu.institution}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
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
          </div>
        </div>
      </main>
    </div>
  );
}
