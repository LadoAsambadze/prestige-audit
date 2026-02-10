"use client";

 
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Apple } from "lucide-react";
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

const testimonialsRight: Testimonial[] = [
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

const allMobileTestimonials: Testimonial[] = [
  ...testimonialsLeft,
  ...testimonialsRight,
];

const TestimonialCard = React.memo(
  ({ quote, name, title, image }: Testimonial) => (
    <Card className="bg-white border-none rounded-[24px] p-6 mb-5 shadow-sm group hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex gap-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-[#2563eb] text-[#2563eb]" />
          ))}
        </div>
        <p className="text-gray-600 text-[13.5px] leading-relaxed mb-5">
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

TestimonialCard.displayName = "TestimonialCard";

export default function ReviewsSection() {
  return (
    /* Key Fixes: 
       1. Changed absolute to relative 
       2. -mt-20 pulls it UP
       3. rounded-t-[80px] creates the curve
       4. z-10 ensures it stays above the previous section
    */
    <section className="relative z-10 -mt-20 bg-[#f3f5f4] rounded-t-[60px] md:rounded-t-[80px] py-20 px-6 overflow-hidden pb-24 md:pb-28 lg:pb-32 rounded-b-[40px] md:rounded-b-[60px] lg:rounded-b-[80px] shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)]">
      <style jsx global>{`
        @keyframes scrollUp {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(0, -50%, 0); }
        }
        @keyframes scrollDown {
          0% { transform: translate3d(0, -50%, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-scroll-up {
          animation: scrollUp 25s linear infinite;
          will-change: transform;
        }
        .animate-scroll-down {
          animation: scrollDown 25s linear infinite;
          will-change: transform;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto pt-10"> {/* Added pt-10 to give space from the curve */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: CTA */}
          <div className="lg:col-span-3">
            <Card className="rounded-[40px] p-10 border-none shadow-sm h-full flex flex-col justify-center bg-white">
              <h2 className="text-3xl font-bold leading-tight mb-6 text-gray-900">
                Trusted By Over 1300 Loyal Clients
              </h2>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                Ad litora torquent per conubia nostra inceptos himenaeos. 
              </p>
              <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-full py-6 px-8 w-fit flex items-center gap-2 group transition-all">
                Contact Us 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          </div>

          {/* MIDDLE COLUMN: AUTOMATIC SCROLLING CARDS */}
          <div className="lg:col-span-6 relative">
            <div className="hidden lg:grid grid-cols-2 gap-6 h-[600px] overflow-hidden relative">
              {/* Gradients to fade out the top and bottom edges */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f3f5f4] to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f3f5f4] to-transparent z-20 pointer-events-none" />

              <div className="animate-scroll-up pause-on-hover flex flex-col">
                {[...testimonialsLeft, ...testimonialsLeft].map((t, i) => (
                  <TestimonialCard key={`l-${i}`} {...t} />
                ))}
              </div>

              <div className="animate-scroll-down pause-on-hover flex flex-col">
                {[...testimonialsRight, ...testimonialsRight].map((t, i) => (
                  <TestimonialCard key={`r-${i}`} {...t} />
                ))}
              </div>
            </div>

            {/* Mobile View */}
            <div className="block lg:hidden relative h-[420px] overflow-hidden rounded-[32px]">
              <div className="animate-scroll-up pause-on-hover flex flex-col">
                {[...allMobileTestimonials, ...allMobileTestimonials].map((t, i) => (
                  <TestimonialCard key={`m-${i}`} {...t} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: STATS */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <Card className="rounded-[40px] p-8 text-center border-none bg-white shadow-sm flex-1 flex flex-col justify-center">
              <div className="text-5xl font-bold mb-2">4.80</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-400 text-xs mb-6">2,568 Reviews</p>
            </Card>

            <Card className="rounded-[40px] p-8 bg-[#dbeafe] border-none relative overflow-hidden flex-1 flex flex-col justify-center">
              <h4 className="font-bold text-lg mb-4 text-gray-800">Group Cooperation</h4>
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <Avatar key={i} className="border-2 border-[#dbeafe] w-10 h-10">
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${i + 20}`} />
                  </Avatar>
                ))}
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center font-bold text-xs">+12</div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
