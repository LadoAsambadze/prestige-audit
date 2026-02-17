"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import React from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonialsLeft: Testimonial[] = [
  {
    quote: "Luctus nibh finibus facilisis dapibus etiam interdum tortor.",
    name: "Nicole Saskia",
    title: "Founder",
    image: "https://i.pravatar.cc/150?u=1",
  },
  {
    quote: "Nulla molestie mattis scelerisque maximus eget fermentum.",
    name: "Angela Ursel",
    title: "Manager",
    image: "https://i.pravatar.cc/150?u=2",
  },
  {
    quote: "Cras eleifend turpis fames primis vulputate ornare sagittis.",
    name: "Gretel Nicole",
    title: "CEO",
    image: "https://i.pravatar.cc/150?u=3",
  },
];

const testimonialsMiddle: Testimonial[] = [
  {
    quote: "Viverra ac tincidunt nam porta elementum a enim euismod.",
    name: "Arnold Willy",
    title: "Sales Director",
    image: "https://i.pravatar.cc/150?u=4",
  },
  {
    quote: "Duis convallis tempus leo eu aenean sed diam nec metus.",
    name: "Frieda Janine",
    title: "CEO",
    image: "https://i.pravatar.cc/150?u=5",
  },
  {
    quote: "Imperdiet mollis nullam volutpat porttitor justo lectus.",
    name: "Mario Pascal",
    title: "Project Manager",
    image: "https://i.pravatar.cc/150?u=6",
  },
];

const testimonialsRight: Testimonial[] = [
  {
    quote: "Sapien pellentesque habitant morbi tristique senectus et netus.",
    name: "Elena Rossi",
    title: "Designer",
    image: "https://i.pravatar.cc/150?u=7",
  },
  {
    quote: "Porttitor massa id neque aliquam vestibulum morbi blandit.",
    name: "Marcus Aurelius",
    title: "Marketing",
    image: "https://i.pravatar.cc/150?u=8",
  },
  {
    quote: "Amet dictum sit amet justo donec enim diam vulputate.",
    name: "Sarah Jenkins",
    title: "COO",
    image: "https://i.pravatar.cc/150?u=9",
  },
];

const allMobileTestimonials: Testimonial[] = [
  ...testimonialsLeft,
  ...testimonialsMiddle,
  ...testimonialsRight,
];

const TestimonialCard = React.memo(
  ({ quote, name, title, image }: Testimonial) => (
    <Card className="bg-white border-none rounded-[20px] md:rounded-[24px] p-5 md:p-6 mb-4 md:mb-5 shadow-sm group hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex gap-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-[#2563eb] text-[#2563eb]" />
          ))}
        </div>
        <p className="text-gray-600 text-[13px] md:text-[13.5px] leading-relaxed mb-4 md:mb-5">
          "{quote}"
        </p>
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9 border border-gray-100">
            <AvatarImage src={image} loading="lazy" />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-sm font-bold text-gray-900">{name}</h4>
            <p className="text-[11px] text-gray-400">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
);
export default function ReviewsSection() {
  return (
    <section className="relative z-10 -mt-10 md:-mt-20 bg-[#f3f5f4] rounded-t-[50px] md:rounded-t-[60px] lg:rounded-t-[80px] pt-16 md:pt-20 pb-0 overflow-hidden">
      <style jsx global>{`
        @keyframes scrollUp {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, -50%, 0);
          }
        }
        @keyframes scrollDown {
          0% {
            transform: translate3d(0, -50%, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-scroll-up {
          animation: scrollUp 30s linear infinite;
          will-change: transform;
        }
        .animate-scroll-down {
          animation: scrollDown 30s linear infinite;
          will-change: transform;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[2000px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 2xl:px-32 pt-8 md:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          {/* Left Side CTA Card */}
          <div className="lg:col-span-3">
            <Card
              className="relative rounded-[30px] md:rounded-[40px] p-8 md:p-10 border-none shadow-sm h-full flex flex-col overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')`,
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 z-0" />

              <div className="relative z-10 h-full flex flex-col">
                {/* Text moved to the TOP (mb-auto pushes everything else down) */}
                <div className="mb-auto">
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4 text-white">
                    Trusted By Over 1300 Loyal Clients
                  </h2>
                  <p className="text-white/80 text-sm leading-relaxed max-w-[240px]">
                    Ad litora torquent per conubia nostra inceptos himenaeos.
                  </p>
                </div>

                {/* Button moved to the BOTTOM */}
                <div className="mt-8">
                  <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-full py-5 md:py-6 px-6 md:px-8 w-fit flex items-center gap-2 group transition-all text-sm md:text-base">
                    Contact Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Scrolling Reviews - 3 Columns */}
          <div className="lg:col-span-9 relative">
            <div className="hidden lg:grid grid-cols-3 gap-4 md:gap-6 h-[600px] overflow-hidden relative">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f3f5f4] to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f3f5f4] to-transparent z-20 pointer-events-none" />

              {/* Track 1 */}
              <div className="animate-scroll-up pause-on-hover flex flex-col">
                {[...testimonialsLeft, ...testimonialsLeft].map((t, i) => (
                  <TestimonialCard key={`l-${i}`} {...t} />
                ))}
              </div>

              {/* Track 2 */}
              <div className="animate-scroll-down pause-on-hover flex flex-col">
                {[...testimonialsMiddle, ...testimonialsMiddle].map((t, i) => (
                  <TestimonialCard key={`m-${i}`} {...t} />
                ))}
              </div>

              {/* Track 3 */}
              <div className="animate-scroll-up pause-on-hover flex flex-col">
                {[...testimonialsRight, ...testimonialsRight].map((t, i) => (
                  <TestimonialCard key={`r-${i}`} {...t} />
                ))}
              </div>
            </div>

            {/* Mobile View */}
            <div className="block lg:hidden relative h-[380px] sm:h-[420px] overflow-hidden rounded-[28px] md:rounded-[32px]">
              <div className="animate-scroll-up pause-on-hover flex flex-col">
                {[...allMobileTestimonials, ...allMobileTestimonials].map(
                  (t, i) => (
                    <TestimonialCard key={`mob-${i}`} {...t} />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
