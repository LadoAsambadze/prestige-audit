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

  // Featured post animation (left side)
  const featuredVariants = {
    hidden: { opacity: 0, x: -40, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Small posts stagger animation (right side)
  const smallPostsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const smallPostVariants = {
    hidden: { opacity: 0, x: 40, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  if (loading || blogPosts.length === 0) return null;

  return (
    <section className="relative z-10 bg-[#f3f5f4] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
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
              Our Insights
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
                <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-2.5 h-auto rounded-full text-sm transition-all shadow-sm group">
                  View All News
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Featured Post */}
          {blogPosts[0] && (
            <motion.div
              className="lg:col-span-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={featuredVariants}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{
                  type: "spring" as const,
                  stiffness: 300,
                  damping: 25,
                }}
              >
                <Link
                  href={`/news/${blogPosts[0].id}`}
                  className="bg-white rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden flex flex-col border border-white block h-full"
                >
                  <div className="relative w-full aspect-[16/11] overflow-hidden">
                    <motion.img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        duration: 0.7,
                        ease: [0.25, 0.46, 0.45, 0.94] as const,
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-10 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.span
                        className="px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#2563eb] bg-blue-50 rounded-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring" as const,
                          stiffness: 400,
                          damping: 20,
                        }}
                      >
                        {blogPosts[0].category}
                      </motion.span>
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
                    <motion.div
                      className="mt-auto flex items-center gap-2 text-[#2563eb] font-bold text-sm uppercase tracking-wider"
                      whileHover={{ x: 4 }}
                      transition={{
                        type: "spring" as const,
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      Continue Reading <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          )}

          {/* RIGHT: Stacked Posts */}
          <motion.div
            className="lg:col-span-6 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={smallPostsContainerVariants}
          >
            {blogPosts.slice(1, 4).map((post) => (
              <motion.div key={post.id} variants={smallPostVariants}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{
                    type: "spring" as const,
                    stiffness: 300,
                    damping: 25,
                  }}
                >
                  <Link
                    href={`/news/${post.id}`}
                    className="group flex gap-6 items-start p-5 bg-white rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-500 border border-white block"
                  >
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-[20px]">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          duration: 0.7,
                          ease: [0.25, 0.46, 0.45, 0.94] as const,
                        }}
                      />
                    </div>

                    <div className="flex flex-col pt-1">
                      <motion.span
                        className="text-[#2563eb] text-[10px] font-black uppercase tracking-[0.2em] mb-2"
                        whileHover={{ scale: 1.05, x: 2 }}
                        transition={{
                          type: "spring" as const,
                          stiffness: 400,
                          damping: 20,
                        }}
                      >
                        {post.category}
                      </motion.span>
                      <h4 className="text-lg font-bold leading-snug text-gray-900 group-hover:text-[#2563eb] transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h4>
                      <span className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">
                        {formatDate(post.createdAt)}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
