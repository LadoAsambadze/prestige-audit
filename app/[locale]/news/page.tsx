"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";

// Animation Variants for the staggered "Bottom to Up" effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Each card follows the next
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 }, // Starts 40px down
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function NewsPage() {
  const locale = useLocale();
  const [newsArticles, setNewsArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`/api/news?lang=${locale}`);
        const data = await res.json();
        setNewsArticles(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [locale]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION - MATCHING CONTACT/TEAM BACKGROUND */}
      <section className="relative w-full bg-[#0a1a3f] pt-40 pb-48 px-5 overflow-hidden text-center">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url('/background.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Animated Glow Blob */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] pointer-events-none"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0a1a3f_90%)] z-0" />

        <div className="mx-auto max-w-7xl relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight"
          >
            Latest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
              News
            </span>
          </motion.h1>
        </div>
      </section>

      {/* GRID CONTENT SECTION */}
      <section className="relative z-20 -mt-20 bg-[#f3f5f4] rounded-t-[60px] md:rounded-t-[80px] pt-20 pb-20 px-6 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading articles...</p>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"
            >
              {newsArticles.map((post) => (
                <motion.div key={post.id}>
                  <Link
                    href={`/news/${post.id}`}
                    className="group flex flex-col"
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[32px] shadow-sm mb-6 bg-white">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="space-y-3 px-2">
                      <div className="flex items-center gap-2 text-[12px] font-bold text-gray-900 uppercase tracking-tight">
                        <span className="w-1.5 h-1.5 bg-[#2563eb] rounded-full" />
                        {post.category}
                        <span className="text-gray-400 font-normal">
                          / {formatDate(post.createdAt)}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#2563eb] transition-colors">
                        {post.title}
                      </h3>
                      <div className="pt-2">
                        <span className="text-xs font-black border-b-2 border-gray-900 pb-1 group-hover:border-[#2563eb] group-hover:text-[#2563eb] transition-all">
                          CONTINUE READING
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
