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
import { ArrowRight, Calendar } from "lucide-react";
import { useLocale } from "next-intl";

interface BlogPost {
  id: string;
  category: string;
  createdAt: string;
  title: string;
  description?: string;
  image: string;
}

export const BlogCard = React.memo(
  ({ id, category, createdAt, title, description, image }: BlogPost) => {
    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    };

    return (
      <Link href={`/news/${id}`} className="group block h-full">
        <div className="relative flex flex-col h-full bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
          {/* Main Image Section */}
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-md text-[#2563eb] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                {category}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col flex-grow p-6">
            <div className="flex items-center gap-2 mb-3 text-gray-400">
              <Calendar className="w-3 h-3" />
              <span className="text-[11px] font-medium uppercase tracking-tighter">
                {formatDate(createdAt)}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 leading-tight mb-3 group-hover:text-[#2563eb] transition-colors line-clamp-2">
              {title}
            </h3>

            {description && (
              <p className="text-sm text-slate-500 line-clamp-2 mb-6 font-normal">
                {description}
              </p>
            )}

            {/* ── READ REPORT BUTTON ── */}
            <div className="mt-auto pt-2">
              <span
                className="
                  group/btn inline-flex items-center gap-2.5
                  relative overflow-hidden
                  px-4 py-2 rounded-full
                  border border-blue-200/80
                  bg-gradient-to-r from-blue-50 to-indigo-50
                  text-blue-700
                  text-[11px] font-bold uppercase tracking-[0.15em]
                  shadow-sm
                  transition-all duration-300
                  hover:shadow-md hover:shadow-blue-200/60
                  hover:border-transparent
                  hover:scale-[1.02]
                "
              >
                {/* Gradient fill on hover */}
                <span
                  className="
                    absolute inset-0 rounded-full
                    bg-gradient-to-r from-blue-600 to-indigo-600
                    opacity-0 group-hover/btn:opacity-100
                    transition-opacity duration-300
                  "
                />
                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">
                  Read Report
                </span>
                <ArrowRight
                  className="
                    relative z-10 w-3 h-3
                    text-blue-700 group-hover/btn:text-white
                    transition-all duration-300
                    group-hover/btn:translate-x-1
                  "
                />
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  },
);

BlogCard.displayName = "BlogCard";

export default function BlogCarouselSection() {
  const locale = useLocale();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`/api/news?lang=${locale}`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setBlogPosts(data);
        }
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [locale]);

  if (loading || blogPosts.length === 0) return null;

  return (
    <section className="bg-[#f3f5f4] py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="px-6 lg:px-16 flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 md:w-10 h-0.5 bg-[#2563eb]" />
              <span className="text-xs md:text-sm font-medium uppercase tracking-[2px] text-gray-500">
                Executive Insights
              </span>
            </div>
          </div>

          {/* ── VIEW ALL NEWS BUTTON (desktop) ── */}
          <Link href="/news" className="hidden md:block">
            <button
              className="
                group relative inline-flex items-center gap-2.5
                overflow-hidden
                px-8 py-3 rounded-full
                bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700
                text-white font-semibold text-sm
                shadow-md shadow-blue-200/60
                transition-all duration-300
                hover:shadow-xl hover:shadow-blue-300/50
                hover:scale-[1.03]
                active:scale-[0.98]
              "
            >
              {/* Shimmer sweep */}
              <span
                className="
                  absolute inset-0
                  bg-gradient-to-r from-transparent via-white/20 to-transparent
                  -translate-x-full group-hover:translate-x-full
                  transition-transform duration-700 ease-in-out
                "
              />
              {/* Brighter gradient on hover */}
              <span
                className="
                  absolute inset-0 rounded-full
                  bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
              />
              <span className="relative z-10">View All News</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative px-6 md:px-16">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full relative"
          >
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-6 lg:-left-10 top-1/2 -translate-y-1/2 h-12 w-12 border-none bg-white text-gray-900 shadow-xl z-10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all duration-300" />
              <CarouselNext className="absolute -right-6 lg:-right-10 top-1/2 -translate-y-1/2 h-12 w-12 border-none bg-white text-gray-900 shadow-xl z-10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all duration-300" />
            </div>

            <CarouselContent className="-ml-4 md:-ml-6 py-4">
              {blogPosts.map((post) => (
                <CarouselItem
                  key={post.id}
                  className="pl-4 md:pl-6 basis-[85%] sm:basis-1/2 lg:basis-1/3 "
                >
                  <BlogCard {...post} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* ── VIEW ALL NEWS BUTTON (mobile) ── */}
        <div className="px-6 mt-10 md:hidden">
          <Link href="/news" className="block">
            <button
              className="
                group relative w-full inline-flex items-center justify-center gap-2.5
                overflow-hidden
                px-6 py-4 rounded-full
                bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700
                text-white font-semibold text-sm
                shadow-md shadow-blue-200/60
                transition-all duration-300
                hover:shadow-xl hover:shadow-blue-300/50
                active:scale-[0.98]
              "
            >
              <span
                className="
                  absolute inset-0
                  bg-gradient-to-r from-transparent via-white/20 to-transparent
                  -translate-x-full group-hover:translate-x-full
                  transition-transform duration-700 ease-in-out
                "
              />
              <span className="relative z-10">View All News</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
