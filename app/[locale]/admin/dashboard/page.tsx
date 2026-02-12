"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  LogOut,
  Plus,
  Pencil,
  Trash2,
  Newspaper,
  Calendar,
  Settings,
  ChevronRight,
} from "lucide-react"; // Note: ensure lucide-react is installed

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  image: string;
  category: string; // This will now be correctly populated from the flattened API response
  createdAt: string;
  updatedAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSection = searchParams.get("section") || "blogs";

  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
    // Fetch news using 'ka' (or your default language) so categories and titles show up
    fetchNews("ka");
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/auth/check");
      const data = await res.json();
      if (!data.authenticated) {
        router.push("/admin");
      } else {
        setAuthenticated(true);
      }
    } catch (error) {
      router.push("/admin");
    }
  };

  const fetchNews = async (lang: string = "ka") => {
    setLoading(true);
    try {
      const res = await fetch(`/api/news?lang=${lang}`);
      const data = await res.json();

      // FIX: Check if the data is an array before setting it
      if (Array.isArray(data)) {
        setNews(data);
      } else {
        console.error("API did not return an array:", data);
        setNews([]); // Fallback to empty array to prevent .map crash
      }
    } catch (error) {
      console.error("Failed to fetch news:", error);
      setNews([]); // Fallback on network error
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (
      !confirm(
        "Are you sure you want to delete this article? This will remove all translations and the image.",
      )
    )
      return;
    try {
      const res = await fetch(`/api/news/${id}`, { method: "DELETE" });
      if (res.ok) {
        setNews(news.filter((item) => item.id !== id));
      }
    } catch (error) {
      alert("Error deleting article");
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const setSection = (section: string) => {
    router.push(`/admin/dashboard?section=${section}`);
  };

  if (!authenticated) return null;

  return (
    <div className="flex min-h-screen bg-gray-50 text-slate-900">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-[#0a1a3f] text-white flex flex-col fixed h-full z-20">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Settings size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">Admin CMS</span>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          <button
            onClick={() => setSection("blogs")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              currentSection === "blogs"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <Newspaper size={20} />
            <span className="font-medium">Blogs</span>
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 ml-64 min-h-screen">
        <header className="h-20 bg-white border-b px-8 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900 capitalize">
              {currentSection}
            </h2>
            <div className="flex items-center text-[10px] text-gray-400 gap-2 mt-1 uppercase tracking-[0.2em] font-black">
              <span>Admin</span>
              <ChevronRight size={10} className="text-gray-300" />
              <span className="text-blue-600">{currentSection}</span>
            </div>
          </div>

          {currentSection === "blogs" && (
            <Button
              onClick={() => router.push("/admin/dashboard/create")}
              className="rounded-full bg-blue-600 hover:bg-blue-700 px-6 font-bold flex items-center gap-2 text-white"
            >
              <Plus size={18} /> New Post
            </Button>
          )}
        </header>

        <div className="p-8">
          {currentSection === "blogs" && (
            <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-8 py-6 border-b border-gray-50 flex justify-between items-center">
                <h3 className="font-bold text-gray-800">Post List</h3>
                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                  {news.length} Total
                </span>
              </div>

              {loading ? (
                <div className="p-20 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto" />
                </div>
              ) : news.length === 0 ? (
                <div className="p-20 text-center">
                  <Newspaper size={40} className="mx-auto text-gray-200 mb-4" />
                  <p className="text-gray-400 font-medium">
                    No blog posts found.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-gray-50">
                  {news.map((article) => (
                    <div
                      key={article.id}
                      className="p-6 hover:bg-gray-50/80 transition-all flex items-center gap-6 group"
                    >
                      <img
                        src={article.image || "/placeholder-news.jpg"}
                        className="w-24 h-16 object-cover rounded-xl shadow-sm bg-gray-100"
                        alt=""
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                          {article.title}
                        </h4>
                        <div className="flex gap-4 mt-2 items-center">
                          <span className="text-[11px] font-bold text-blue-500 bg-blue-50/50 px-2 py-0.5 rounded border border-blue-100">
                            {article.category}
                          </span>
                          <span className="text-[11px] text-gray-400 flex items-center gap-1">
                            <Calendar size={12} />
                            {new Date(article.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-xl h-10 w-10 border-gray-200 bg-white hover:bg-gray-50"
                          onClick={() =>
                            router.push(`/admin/dashboard/edit/${article.id}`)
                          }
                        >
                          <Pencil size={16} className="text-gray-600" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-xl h-10 w-10 border-red-100 text-red-500 hover:bg-red-50 hover:border-red-200 bg-white"
                          onClick={() => handleDelete(article.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
