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

const TeamCard = React.memo(
  ({ name, title, department, image }: TeamMember) => (
    <div className="group h-full">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 border border-gray-100">
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-5 text-center space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="text-base font-medium text-gray-700">{title}</p>
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600 bg-blue-50 rounded-full">
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
    <section className="bg-[#f3f5f4] rounded-t-[80px] -mt-20  w-full absolute  py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                Meet the team behind the vision
              </h2>
              <p className="text-lg text-gray-600">
                A passionate group of experts committed to innovation and
                excellence.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <CarouselPrevious className="static h-12 w-12 border-gray-300 hover:bg-white hover:text-gray-900" />
              <CarouselNext className="static h-12 w-12 border-gray-300 hover:bg-white hover:text-gray-900" />
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
