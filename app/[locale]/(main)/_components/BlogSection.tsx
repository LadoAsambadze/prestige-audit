"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";

interface BlogPost {
  id: string;
  category: string;
  createdAt: string;
  title: string;
  description?: string;
  image: string;
}

export default function BlogSection() {
  const locale = useLocale();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`/api/news?lang=${locale}`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setBlogPosts(data.slice(0, 4));
        }
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [locale]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading || blogPosts.length === 0) return null;

  return (
    <section className="relative z-10 bg-[#f3f5f4] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Updated Header: Matches Team Section Style */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-0.5 bg-[#2563eb]" />
            <span className="text-sm font-medium uppercase tracking-[2px] text-gray-500 font-['DM_Sans']">
              Our Insights
            </span>
            <div className="w-8 h-0.5 bg-[#2563eb]" />
          </div>

          <Link href="/news">
            <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-2.5 h-auto rounded-full text-sm transition-all shadow-sm group">
              View All News
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Featured Post */}
          {blogPosts[0] && (
            <Link
              href={`/news/${blogPosts[0].id}`}
              className="lg:col-span-6 bg-white rounded-[32px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group overflow-hidden flex flex-col border border-white"
            >
              <div className="relative w-full aspect-[16/11] overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#2563eb] bg-blue-50 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {formatDate(blogPosts[0].createdAt)}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-[#2563eb] transition-colors">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6 line-clamp-2">
                  {blogPosts[0].description}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[#2563eb] font-bold text-sm uppercase tracking-wider">
                  Continue Reading <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          )}

          {/* RIGHT: Stacked Posts */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {blogPosts.slice(1, 4).map((post) => (
              <Link
                href={`/news/${post.id}`}
                key={post.id}
                className="group flex gap-6 items-start p-5 bg-white rounded-[24px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-white"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-[20px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col pt-1">
                  {/* Category at the very top */}
                  <span className="text-[#2563eb] text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                    {post.category}
                  </span>
                  <h4 className="text-lg font-bold leading-snug text-gray-900 group-hover:text-[#2563eb] transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h4>
                  <span className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">
                    {formatDate(post.createdAt)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
