"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

interface TeamMember {
  name: string;
  title: string;
  department: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Mitchell",
    title: "CEO",
    department: "Leadership",
    image: "3.png",
  },
  {
    name: "James Anderson",
    title: "CTO",
    department: "Technology",
    image: "4.jpeg",
  },
  {
    name: "Emily Rodriguez",
    title: "Head of Design",
    department: "Creative",
    image: "5.jpeg",
  },
  {
    name: "Michael Chen",
    title: "VP Engineering",
    department: "Technology",
    image: "6.jpeg",
  },
  {
    name: "Sophia Williams",
    title: "Head of Marketing",
    department: "Marketing",
    image: "1.png",
  },
  {
    name: "David Thompson",
    title: "CFO",
    department: "Finance",
    image: "2.png",
  },
  {
    name: "David Thompson",
    title: "CFO",
    department: "Finance",
    image: "7.png",
  },
];

export const TeamCard = React.memo(
  ({ name, title, department, image }: TeamMember) => (
    <div className="group h-full">
      <div className="bg-white rounded-[24px] shadow-sm overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2 border border-white">
        {/* Image Container with "Filled" approach - reduced aspect ratio */}
        <div className="relative aspect-[4/4.5] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content Area - reduced padding and spacing */}
        <div className="p-5 text-center space-y-2">
          <div className="flex justify-center mb-1.5">
            <span className="px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#2563eb] bg-blue-50 rounded-full">
              {department}
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors duration-300">
            {name}
          </h3>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            {title}
          </p>
        </div>
      </div>
    </div>
  ),
);

TeamCard.displayName = "TeamCard";

export default function TeamSection() {
  return (
    <section className="bg-[#f3f5f4] pt-16 pb-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Header Container */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            {/* Left: Section Label */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#2563eb]" />
              <span className="text-sm font-medium uppercase tracking-[2px] text-gray-500 font-['DM_Sans']">
                Our Team
              </span>
              <div className="w-8 h-0.5 bg-[#2563eb]" />
            </div>

            {/* Right: Button and Arrows aligned together */}
            <div className="flex items-center gap-4">
              <Link
                href="/team"
                className="px-6 py-2.5 text-sm font-semibold text-white bg-[#2563eb] rounded-full hover:bg-[#1d4ed8] transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
              >
                View All Team
              </Link>

              <div className="hidden md:flex items-center gap-2">
                {/* translate-y-0 overrides the default shadcn absolute centering */}
                <CarouselPrevious className="static translate-y-0 h-10 w-10 border-gray-300 hover:bg-white hover:text-[#2563eb]" />
                <CarouselNext className="static translate-y-0 h-10 w-10 border-gray-300 hover:bg-white hover:text-[#2563eb]" />
              </div>
            </div>
          </div>

          <CarouselContent className="-ml-4 md:-ml-6">
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <TeamCard {...member} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
