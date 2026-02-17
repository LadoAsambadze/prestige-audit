"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  department: string;
  image: string;
  id?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Mitchell",
    title: "CEO",
    department: "Leadership",
    image: "3.png",
    id: "1",
  },
  {
    name: "James Anderson",
    title: "CTO",
    department: "Technology",
    image: "4.jpeg",
    id: "2",
  },
  {
    name: "Emily Rodriguez",
    title: "Head of Design",
    department: "Creative",
    image: "5.jpeg",
    id: "3",
  },
  {
    name: "Michael Chen",
    title: "VP Engineering",
    department: "Technology",
    image: "6.jpeg",
    id: "4",
  },
  {
    name: "Sophia Williams",
    title: "Head of Marketing",
    department: "Marketing",
    image: "1.png",
    id: "5",
  },
  {
    name: "David Thompson",
    title: "CFO",
    department: "Finance",
    image: "2.png",
    id: "6",
  },
];

export const TeamCard = React.memo(
  ({ name, title, department, image, id }: TeamMember) => {
    return (
      <div className="group relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-[24px] bg-gray-200">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
          loading="eager"
        />

        <div
          className="absolute inset-0 flex flex-col items-center justify-end md:justify-center p-6 
                      bg-black/20 md:bg-black/0 
                      md:opacity-0 md:group-hover:opacity-100 
                      md:backdrop-blur-md 
                      transition-all duration-500 ease-in-out"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:hidden" />

          <div className="relative z-10 flex flex-col items-center">
            <span className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
              {department}
            </span>
            <h3 className="text-center text-xl font-bold text-white leading-tight">
              {name}
            </h3>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-widest text-white/90">
              {title}
            </p>

            <Link
              href={`/team/gogita-baramidze`}
              className="mt-4 md:mt-6 w-full opacity-0 md:group-hover:opacity-100 transition-opacity delay-100"
            >
              <div className="flex w-full items-center justify-center gap-2 rounded-full border border-white/50 px-5 py-2 text-xs font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black">
                View Profile
                <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  },
);

TeamCard.displayName = "TeamCard";

export default function TeamSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="bg-[#f3f5f4] py-10 md:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 md:w-10 h-0.5 bg-[#2563eb]" />
            <span className="text-xs md:text-sm font-medium uppercase tracking-[2px] text-gray-500">
              Our Team
            </span>
            <div className="w-8 md:w-10 h-0.5 bg-[#2563eb]" />
          </div>

          <Link href="/team" className="hidden md:block">
            <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-2.5 h-auto rounded-full text-sm transition-all group">
              View All Members
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="relative px-0 md:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 lg:-left-14 top-1/2 -translate-y-1/2 h-11 w-11 border-gray-200 bg-white text-gray-900 shadow-sm z-10 hover:bg-[#2563eb] hover:text-white transition-colors" />
              <CarouselNext className="absolute -right-12 lg:-right-14 top-1/2 -translate-y-1/2 h-11 w-11 border-gray-200 bg-white text-gray-900 shadow-sm z-10 hover:bg-[#2563eb] hover:text-white transition-colors" />
            </div>

            <CarouselContent className="ml-0 md:-ml-6 px-4 md:px-0 py-1">
              {teamMembers.map((member, index) => (
                <CarouselItem
                  key={index}
                  className=" pl-6 basis-[90%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <TeamCard {...member} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="px-6 mt-8 md:hidden">
          <Button className="px-5 w-full md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-white bg-[#2563eb] rounded-full hover:bg-[#1d4ed8] transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
