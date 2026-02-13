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
import { motion } from "framer-motion";

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

interface TeamCardProps extends TeamMember {
  id?: string; // Optional ID for linking to CV page
}

export const TeamCard = React.memo(
  ({ name, title, department, image, id }: TeamCardProps) => {
    const CardContent = (
      <motion.div
        className="group h-full cursor-pointer"
        whileHover={{ y: -8 }}
        transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
      >
        <motion.div
          className="bg-white rounded-[24px] shadow-sm overflow-hidden transition-all duration-500 border border-white"
          whileHover={{
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
          }}
        >
          {/* Image Container with "Filled" approach - reduced aspect ratio */}
          <div className="relative aspect-[4/4.5] overflow-hidden">
            <motion.img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
            />
            {/* Subtle overlay gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Content Area - reduced padding and spacing */}
          <div className="p-5 text-center space-y-2">
            <motion.div
              className="flex justify-center mb-1.5"
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring" as const,
                stiffness: 400,
                damping: 20,
              }}
            >
              <span className="px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#2563eb] bg-blue-50 rounded-full">
                {department}
              </span>
            </motion.div>
            <motion.h3
              className="text-lg font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring" as const,
                stiffness: 400,
                damping: 20,
              }}
            >
              {name}
            </motion.h3>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {title}
            </p>
          </div>
        </motion.div>
      </motion.div>
    );

    // If ID exists, wrap in Link, otherwise just return the card
    if (id) {
      return (
        <Link href={`/team/${id}`} className="block h-full">
          {CardContent}
        </Link>
      );
    }

    return CardContent;
  },
);

TeamCard.displayName = "TeamCard";

export default function TeamSection() {
  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Carousel container variants
  const carouselVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="bg-[#f3f5f4] pt-16 pb-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            {/* Header Container */}
            <motion.div
              className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6"
              variants={headerVariants}
            >
              {/* Left: Section Label */}
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-8 h-0.5 bg-[#2563eb]"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  }}
                />
                <span className="text-sm font-medium uppercase tracking-[2px] text-gray-500 font-['DM_Sans']">
                  Our Team
                </span>
                <motion.div
                  className="w-8 h-0.5 bg-[#2563eb]"
                  initial={{ scaleX: 0, originX: 1 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  }}
                />
              </div>

              {/* Right: Button and Arrows aligned together */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring" as const,
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  <Link
                    href="/team"
                    className="px-6 py-2.5 text-sm font-semibold text-white bg-[#2563eb] rounded-full hover:bg-[#1d4ed8] transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
                  >
                    View All Team
                  </Link>
                </motion.div>

                <div className="hidden md:flex items-center gap-2">
                  <motion.div
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      type: "spring" as const,
                      stiffness: 400,
                      damping: 25,
                    }}
                  >
                    <CarouselPrevious className="static translate-y-0 h-10 w-10 border-gray-300 hover:bg-white hover:text-[#2563eb]" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      type: "spring" as const,
                      stiffness: 400,
                      damping: 25,
                    }}
                  >
                    <CarouselNext className="static translate-y-0 h-10 w-10 border-gray-300 hover:bg-white hover:text-[#2563eb]" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={carouselVariants}>
              <CarouselContent className="-ml-4 md:-ml-6">
                {teamMembers.map((member, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94] as const,
                      }}
                    >
                      <TeamCard {...member} />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </motion.div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
