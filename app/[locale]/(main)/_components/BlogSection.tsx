"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";

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
          setBlogPosts(data.slice(0, 6));
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

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
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

  if (loading || blogPosts.length === 0) return null;

  return (
    <section className="relative z-10 bg-[#f3f5f4] py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[2000px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 2xl:px-32">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between mb-10 md:mb-12 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <div className="flex items-center gap-3">
            <motion.div
              className="w-8 md:w-10 h-0.5 bg-[#2563eb]"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
            />
            <span className="text-xs md:text-sm font-medium uppercase tracking-[2px] text-gray-500 font-['DM_Sans']">
              Our Insights
            </span>
            <motion.div
              className="w-8 md:w-10 h-0.5 bg-[#2563eb]"
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

          <motion.div
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
              <Link href="/news">
                <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 md:px-8 py-2 md:py-2.5 h-auto rounded-full text-xs md:text-sm transition-all shadow-sm group">
                  View All News
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardContainerVariants}
        >
          {blogPosts.map((post, index) => (
            <motion.div key={post.id} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{
                  type: "spring" as const,
                  stiffness: 300,
                  damping: 25,
                }}
              >
                <Link
                  href={`/news/${post.id}`}
                  className="bg-white rounded-[24px] md:rounded-[28px] shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden flex flex-col border border-white block h-full"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{
                        duration: 0.7,
                        ease: [0.25, 0.46, 0.45, 0.94] as const,
                      }}
                    />

                    <div className="absolute inset-y-0 right-0 w-[45%] bg-[#0a1a3f] flex items-center justify-center">
                      <img
                        src="/test.png"
                        alt="Prestige Audit Logo"
                        className="w-[70%] h-auto object-contain"
                      />
                    </div>

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <motion.span
                        className="px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-[#2563eb] bg-blue-50 rounded-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring" as const,
                          stiffness: 400,
                          damping: 20,
                        }}
                      >
                        {post.category}
                      </motion.span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        {formatDate(post.createdAt)}
                      </span>
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug mb-2 md:mb-3 group-hover:text-[#2563eb] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {post.description && (
                      <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                        {post.description}
                      </p>
                    )}

                    <motion.div
                      className="mt-auto flex items-center gap-2 text-[#2563eb] font-bold text-[11px] md:text-xs uppercase tracking-wider"
                      whileHover={{ x: 4 }}
                      transition={{
                        type: "spring" as const,
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      Read More <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
