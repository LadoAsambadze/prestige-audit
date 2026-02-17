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
import { Button } from "@/components/ui/button";
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

            <div className="mt-auto flex items-center gap-2 text-[#2563eb] font-bold text-[10px] uppercase tracking-[0.2em]">
              <span className="border-b-2 border-transparent group-hover:border-[#2563eb] transition-all">
                Read Report
              </span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
        {/* Header from Team Section Style */}
        <div className="px-6 lg:px-16 flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 md:w-10 h-0.5 bg-[#2563eb]" />
              <span className="text-xs md:text-sm font-medium uppercase tracking-[2px] text-gray-500">
                Executive Insights
              </span>
            </div>
          </div>

          <Link href="/news" className="hidden md:block">
            <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-2.5 h-auto rounded-full text-sm transition-all group">
              View All News
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Carousel Logic */}
        <div className="relative px-6 md:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-6 lg:-left-10 top-1/2 -translate-y-1/2 h-12 w-12 border-none bg-white text-gray-900 shadow-xl z-10 hover:bg-[#2563eb] hover:text-white transition-all" />
              <CarouselNext className="absolute -right-6 lg:-right-10 top-1/2 -translate-y-1/2 h-12 w-12 border-none bg-white text-gray-900 shadow-xl z-10 hover:bg-[#2563eb] hover:text-white transition-all" />
            </div>

            <CarouselContent className="-ml-4 md:-ml-6 py-4">
              {blogPosts.map((post) => (
                <CarouselItem
                  key={post.id}
                  className="pl-4 md:pl-6 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <BlogCard {...post} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Mobile Button */}
        <div className="px-6 mt-10 md:hidden">
          <Button className="w-full py-6 text-sm font-bold text-white bg-[#2563eb] rounded-full">
            View All Perspectives
          </Button>
        </div>
      </div>
    </section>
  );
}
