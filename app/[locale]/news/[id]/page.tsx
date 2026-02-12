"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Calendar, Tag, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  image: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export default function NewsDetail() {
  const params = useParams();
  const locale = useLocale();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Fetch specific ID and current locale
        const res = await fetch(`/api/news/${params.id}?lang=${locale}`);
        const data = await res.json();
        if (res.ok) setArticle(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) fetchArticle();
  }, [params.id, locale]);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `Estimated ${minutes} Min Read`;
  };

  const handleShare = async () => {
    if (navigator.share && article) {
      try {
        await navigator.share({
          title: article.title,
          text: article.content.substring(0, 100) + "...",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share failed:", error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h2>
          <Link
            href="/news"
            className="text-blue-600 hover:text-blue-700 font-bold"
          >
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION - CONSISTENT WITH CONTACT PAGE */}
      <section className="relative w-full bg-[#0a1a3f] pt-40 pb-56 px-5 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url('/background.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="mx-auto max-w-7xl relative z-10 px-6">
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors font-bold text-sm uppercase tracking-widest"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />{" "}
            Back to News Archive
          </Link>
        </div>
      </section>

      {/* ARTICLE CONTENT SPLIT LAYOUT */}
      <section className="relative z-20 -mt-24 bg-[#f3f5f4] rounded-t-[60px] md:rounded-t-[80px] pt-12 pb-24 px-6 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[40px] shadow-sm overflow-hidden border border-white flex flex-col lg:flex-row items-stretch">
            {/* LEFT SIDE: STICKY IMAGE */}
            <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-0">
              <img
                src={article.image}
                className="absolute inset-0 w-full h-full object-cover"
                alt={article.title}
              />
              {/* Optional Gradient Overlay for Image Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* RIGHT SIDE: CONTENT */}
            <div className="lg:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center">
              {/* Metadata Tags */}
              <div className="flex flex-wrap gap-4 mb-8 text-[11px] font-black text-blue-600 uppercase tracking-widest">
                <div className="bg-blue-50 px-4 py-2 rounded-full flex items-center gap-2">
                  <Calendar size={14} /> {formatDate(article.createdAt)}
                </div>
                <div className="bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full flex items-center gap-2">
                  <Tag size={14} /> {article.category}
                </div>
              </div>

              <div className="prose prose-blue prose-lg max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {article.title}
                </h2>
                <div
                  className="whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>

              {/* Bottom Actions */}
              <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
                <Button
                  onClick={handleShare}
                  className="rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] px-8 py-6 font-bold flex items-center gap-2"
                >
                  <Share2 size={18} /> Share Analysis
                </Button>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {estimateReadTime(article.content)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
