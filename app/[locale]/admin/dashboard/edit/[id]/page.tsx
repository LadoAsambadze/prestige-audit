"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, Globe, Check } from "lucide-react";

const LANGUAGES = ["en", "ka", "ru"];

export default function EditArticlePage() {
  const router = useRouter();
  const params = useParams();
  const [currentLang, setCurrentLang] = useState("en");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    image: "", // Existing image URL from DB
  });
  const [newImage, setNewImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    fetchArticleContent(currentLang);
  }, [currentLang]);

  const fetchArticleContent = async (lang: string) => {
    setFetching(true);
    try {
      const res = await fetch(`/api/news/${params.id}?lang=${lang}`);
      const data = await res.json();
      if (res.ok) {
        setFormData({
          title: data.title || "",
          content: data.content || "",
          category: data.category || "", // This will now change based on 'lang'
          image: data.image || "",
        });
      }
    } catch (error) {
      console.error("Error loading translation");
    } finally {
      setFetching(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("content", formData.content);
    data.append("category", formData.category);
    data.append("language", currentLang);
    if (newImage) data.append("image", newImage);

    try {
      const res = await fetch(`/api/news/${params.id}`, {
        method: "PUT",
        body: data,
      });
      if (res.ok) alert(`Saved ${currentLang.toUpperCase()} version!`);
    } catch (error) {
      alert("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b px-8 py-4 flex justify-between items-center sticky top-0 z-10">
        <Button onClick={() => router.push("/admin/dashboard")} variant="ghost">
          <ArrowLeft size={18} className="mr-2" /> Dashboard
        </Button>

        {/* Language Tabs */}
        <div className="flex bg-gray-100 p-1 rounded-xl border">
          {LANGUAGES.map((lang) => (
            <button
              key={lang}
              onClick={() => setCurrentLang(lang)}
              className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${
                currentLang === lang
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-400"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-8">
        {fetching ? (
          <div className="animate-pulse space-y-4">
            <div className="h-12 bg-gray-200 rounded-xl w-3/4" />
            <div className="h-64 bg-gray-200 rounded-[32px]" />
          </div>
        ) : (
          <form
            onSubmit={handleUpdate}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 space-y-4">
                <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest">
                  Editing {currentLang} version
                </p>
                <input
                  className="text-3xl font-bold w-full outline-none"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Translation Title..."
                />
                <input
                  className="w-full py-2 border-b border-gray-50 outline-none text-gray-500"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  placeholder="Category..."
                />
                <textarea
                  className="w-full min-h-[400px] outline-none text-lg"
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  placeholder="Translation content..."
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100">
                <h3 className="font-bold mb-4">Image Management</h3>
                <img
                  src={preview || formData.image}
                  className="w-full aspect-video object-cover rounded-xl mb-4"
                />
                <input
                  type="file"
                  className="text-xs"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setNewImage(file);
                      setPreview(URL.createObjectURL(file));
                    }
                  }}
                />
              </div>
              <Button className="w-full py-8 rounded-[24px] bg-blue-600 font-bold text-xl">
                <Save className="mr-2" /> Save {currentLang.toUpperCase()}
              </Button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}
