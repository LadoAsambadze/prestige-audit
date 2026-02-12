"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Award,
  Calendar,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  Clock,
  Video,
} from "lucide-react";
import React, { useState } from "react";

interface Course {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  hours?: string;
  sessions?: string;
  price: string;
  description: string;
  features: string[];
  color: string;
  icon: React.ReactNode;
}

const courses: Course[] = [
  {
    id: "tax-full",
    title: "საგადასახადო კანონმდებლობა",
    subtitle: "სრული კურსი",
    duration: "6 თვე",
    price: "750 ლარი",
    description:
      "საგადასახადო კოდექსის სრული კურსი პრაქტიკოს ბუღალტრებს, აუდიტორებს, ფინანსურ მენეჯერებს, იურისტებს და სხვა დაინტერესებულ პირებს.",
    features: [
      "სრული საგადასახადო სისტემის შესწავლა",
      "პრაქტიკული ქეისების განხილვა",
      "ყველა სასწავლო მასალის მიწოდება",
      "ვიდეოჩანაწერები ხელმისაწვდომია",
    ],
    color: "#2563eb",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    id: "income-tax",
    title: "მოგების და საშემოსავლო გადასახადები",
    subtitle: "გადახდის წყაროსთან დასაკავებელი",
    duration: "24 საათი",
    sessions: "8 შეხვედრა",
    price: "250 ლარი",
    description:
      "მოგების და საშემოსავლო გადასახადების მოკლევადიანი, ინტენსიური ტრენინგი.",
    features: [
      "გადასახადების დაბეგვრის წესები",
      "გადახდის წყაროსთან დაკავების პრაქტიკა",
      "ინტერაქციული სწავლება",
      "ქეისებზე დაფუძნებული სწავლება",
    ],
    color: "#7c3aed",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    id: "estonian",
    title: "მოგების გადასახადი",
    subtitle: "ესტონური მოდელი",
    duration: "18 საათი",
    sessions: "6 შეხვედრა",
    price: "250 ლარი",
    description:
      "ესტონური მოდელის - მოგების გადასახადის პრაქტიკული კურსი სრული განმარტებებით.",
    features: [
      "ესტონური მოდელის დეტალური შესწავლა",
      "გაანგარიშების მეთოდოლოგია",
      "კონკრეტული მაგალითები",
      "სერთიფიკატი კურსის დასრულებაზე",
    ],
    color: "#059669",
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: "construction",
    title: "სამშენებლო სფეროს დაბეგვრა",
    subtitle: "საგადასახადო დაბეგვრა",
    duration: "6 საათი",
    sessions: "2 შეხვედრა",
    price: "250 ლარი",
    description:
      "სამშენებლო სფეროს საგადასახადო დაბეგვრის სპეციფიკური პრაქტიკული ტრენინგი.",
    features: [
      "სამშენებლო სფეროს სპეციფიკა",
      "პრაქტიკული მაგალითები",
      "საგადასახადო გამოწვევები",
      "დარგის ექსპერტების მონაწილეობით",
    ],
    color: "#dc2626",
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    id: "vat",
    title: "დღგ-ით დაბეგვრა",
    subtitle: "პრაქტიკული კურსი",
    duration: "30 საათი",
    sessions: "10 შეხვედრა",
    price: "250 ლარი",
    description:
      "დღგ-ით დაბეგვრის პრაქტიკული, ინტერაქციული კურსი ყველა დეტალის განხილვით.",
    features: [
      "დღგ-ს კანონმდებლობის სრული მიმოხილვა",
      "დეკლარაციების შედგენა",
      "საერთაშორისო ტრანზაქციები",
      "რთული ქეისების ანალიზი",
    ],
    color: "#ea580c",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
  {
    id: "ifrs",
    title: "IFRS for SME's",
    subtitle: "მსს ფასს სტანდარტი",
    duration: "24 საათი",
    sessions: "8 შეხვედრა",
    price: "500 ლარი",
    description:
      "მცირე და საშუალო ზომითი საწარმოების ფინანსური ანგარიშგების სტანდარტის შესწავლა.",
    features: [
      "IFRS სტანდარტების გაცნობა",
      "ფინანსური ანგარიშგების მომზადება",
      "საერთაშორისო პრაქტიკა",
      "სერთიფიკატი კურსის დასრულებაზე",
    ],
    color: "#0891b2",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    id: "category4",
    title: "მეოთხე ზომითი საწარმოები",
    subtitle: "ფინანსური ანგარიშგება",
    duration: "6 საათი",
    sessions: "2 შეხვედრა",
    price: "118 ლარი",
    description:
      "მეოთხე კატეგორიის საწარმოების ფინანსური ანგარიშგების სტანდარტის ონლაინ სემინარი.",
    features: [
      "მე-4 კატეგორიის სპეციფიკა",
      "ანგარიშგების მოთხოვნები",
      "პრაქტიკული მაგალითები",
      "ონლაინ ფორმატი",
    ],
    color: "#4f46e5",
    icon: <Video className="w-6 h-6" />,
  },
];

const stats = [
  {
    value: "8000+",
    label: "კურსდამთავრებული",
    icon: <Users className="w-5 h-5" />,
  },
  {
    value: "2010",
    label: "დაარსების წელი",
    icon: <Award className="w-5 h-5" />,
  },
  {
    value: "100%",
    label: "პრაქტიკოსი ტრენერები",
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

export default function AcademyPage() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Manrope:wght@400;500;600;700;800&display=swap");

        .academy-page {
          font-family: "Manrope", sans-serif;
        }

        .mono-text {
          font-family: "Space Mono", monospace;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .stagger-1 {
          animation-delay: 0.1s;
        }
        .stagger-2 {
          animation-delay: 0.2s;
        }
        .stagger-3 {
          animation-delay: 0.3s;
        }
        .stagger-4 {
          animation-delay: 0.4s;
        }
        .stagger-5 {
          animation-delay: 0.5s;
        }
        .stagger-6 {
          animation-delay: 0.6s;
        }
        .stagger-7 {
          animation-delay: 0.7s;
        }

        .grain-overlay {
          position: relative;
          overflow: hidden;
        }

        .grain-overlay::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          pointer-events: none;
        }
      `}</style>

      <div className="academy-page">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-32 px-6">
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="mono-text text-xs font-bold tracking-[0.3em] text-blue-600 uppercase bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                  Kreston Georgia Academy
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                პროფესიული ზრდის
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  აკადემია
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                საგადასახადო, საბუღალტრო და აუდიტის შემსწავლელი კურსები
                მრავალწლიანი გამოცდილების მქონე პრაქტიკოსი ტრენერებისგან
              </p>

              <div className="flex flex-wrap gap-4 justify-center items-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-blue-600/30 transition-all hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105">
                  კურსების ნახვა
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  უფასო ვებინარები
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, idx) => (
                <Card
                  key={idx}
                  className={`grain-overlay bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-slide-up stagger-${idx + 1}`}
                >
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-4">
                      {stat.icon}
                    </div>
                    <div className="mono-text text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative -mt-16 bg-white rounded-t-[80px] pt-24 pb-16 px-6 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)] grain-overlay">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                რატომ <span className="text-blue-600">Kreston Academy</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                ჩვენ გთავაზობთ მაღალი ხარისხის განათლებას, რომელიც აერთიანებს
                თეორიას და პრაქტიკას
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Video className="w-6 h-6" />,
                  title: "ვიდეოჩანაწერები",
                  desc: "ყოველი ლექციის ჩანაწერზე წვდომა დასრულების შემდეგაც",
                  color: "blue",
                },
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  title: "სასწავლო მასალები",
                  desc: "ყველა საჭირო მასალით უზრუნველყოფა",
                  color: "purple",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "ინტერაქციული სწავლება",
                  desc: "ქეისებზე დაფუძნებული პრაქტიკული მიდგომა",
                  color: "green",
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  title: "კარიერული შესაძლებლობები",
                  desc: "პრაქტიკა და დასაქმება Kreston Georgia-ში",
                  color: "orange",
                },
              ].map((feature, idx) => (
                <Card
                  key={idx}
                  className={`bg-gradient-to-br from-${feature.color}-50 to-white border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group animate-slide-up stagger-${idx + 4}`}
                >
                  <CardContent className="p-8">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 bg-${feature.color}-100 text-${feature.color}-600 rounded-2xl mb-5 group-hover:scale-110 transition-transform`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="relative -mt-16 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-t-[80px] pt-24 pb-24 px-6 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                ჩვენი <span className="text-blue-600">კურსები</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                აირჩიეთ თქვენთვის შესაფერისი პროფესიული განვითარების პროგრამა
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, idx) => (
                <Card
                  key={course.id}
                  className="group bg-white border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2"
                  onClick={() =>
                    setSelectedCourse(selectedCourse === idx ? null : idx)
                  }
                >
                  <div
                    className="h-2 w-full transition-all duration-500 group-hover:h-3"
                    style={{ backgroundColor: course.color }}
                  ></div>

                  <CardContent className="p-8">
                    <div
                      className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 text-white transition-transform group-hover:scale-110 group-hover:rotate-6"
                      style={{ backgroundColor: course.color }}
                    >
                      {course.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 font-medium">
                      {course.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
                        <Clock className="w-3.5 h-3.5" />
                        {course.duration}
                      </span>
                      {course.sessions && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
                          <Calendar className="w-3.5 h-3.5" />
                          {course.sessions}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                      {course.description}
                    </p>

                    {selectedCourse === idx && (
                      <div className="mb-6 space-y-2 animate-slide-up">
                        {course.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2
                              className="w-4 h-4 mt-0.5 flex-shrink-0"
                              style={{ color: course.color }}
                            />
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                      <div>
                        <div className="mono-text text-2xl font-bold text-gray-900">
                          {course.price}
                        </div>
                        <div className="text-xs text-gray-500">სრული ფასი</div>
                      </div>
                      <Button
                        className="rounded-full text-white shadow-lg transition-all hover:shadow-xl"
                        style={{
                          backgroundColor: course.color,
                          boxShadow: `0 10px 25px -5px ${course.color}40`,
                        }}
                      >
                        დეტალურად
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative -mt-16 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-t-[80px] pt-24 pb-24 px-6 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.2)] overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMC00YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              მზად ხართ დაიწყოთ სწავლა?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              შემოგვიერთდით 8000+ წარმატებულ კურსდამთავრებულს და დაიწყეთ თქვენი
              პროფესიული კარიერა
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-700 hover:bg-gray-50 rounded-full px-10 py-6 text-lg font-bold shadow-2xl hover:shadow-white/20 transition-all hover:scale-105">
                რეგისტრაცია
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 rounded-full px-10 py-6 text-lg font-bold"
              >
                კონსულტაცია
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 justify-center text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">უფასო ვებინარები</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">ვიდეოჩანაწერები</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">სერთიფიკატი</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
