"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    image: "https://i.pravatar.cc/400?u=sarahmitchell",
  },
  {
    name: "James Anderson",
    title: "CTO",
    department: "Technology",
    image: "https://i.pravatar.cc/400?u=jamesanderson",
  },
  {
    name: "Emily Rodriguez",
    title: "Head of Design",
    department: "Creative",
    image: "https://i.pravatar.cc/400?u=emilyrodriguez",
  },
  {
    name: "Michael Chen",
    title: "VP Engineering",
    department: "Technology",
    image: "https://i.pravatar.cc/400?u=michaelchen",
  },
  {
    name: "Sophia Williams",
    title: "Head of Marketing",
    department: "Marketing",
    image: "https://i.pravatar.cc/400?u=sophiawilliams",
  },
  {
    name: "David Thompson",
    title: "CFO",
    department: "Finance",
    image: "https://i.pravatar.cc/400?u=davidthompson",
  },
];

const TeamCard = React.memo(
  ({ name, title, department, image }: TeamMember) => (
    <div className="group h-full">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 border border-blue-100/70">
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-blue-50 to-white">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-6 text-center space-y-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
            {name}
          </h3>
          <p className="text-base font-medium text-gray-700">{title}</p>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50/80 rounded-full border border-blue-200/50">
            {department}
          </span>
        </div>
      </div>
    </div>
  ),
);

TeamCard.displayName = "TeamCard";

export default function TeamSection() {
  return (
    <section className="bg-[#f3f5f4]   py-20 md:py-24 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Centered & modern header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-blue-600 bg-blue-100/60 rounded-full">
              Our Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-5">
            Meet the <span className="text-blue-600">People</span> Behind the
            Vision
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A passionate and diverse team of experts dedicated to innovation,
            excellence, and delivering real value.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
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

          {/* Navigation buttons - centered below on mobile, side on desktop */}
          <div className="flex justify-center md:justify-end gap-4 mt-10 md:mt-0">
            <CarouselPrevious className="static h-12 w-12 border-2 border-blue-200 hover:bg-blue-50 hover:text-blue-700" />
            <CarouselNext className="static h-12 w-12 border-2 border-blue-200 hover:bg-blue-50 hover:text-blue-700" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
