"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, ImagePlus, Globe } from "lucide-react";

export default function CreateArticlePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    language: "en", // Default language
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("content", formData.content);
      data.append("category", formData.category);

      data.append("language", formData.language);
      if (imageFile) data.append("image", imageFile);

      const res = await fetch("/api/news", {
        method: "POST",
        body: data, // Sending as FormData for file support
      });

      if (res.ok) {
        router.push("/admin/dashboard");
      } else {
        const errorData = await res.json();
        alert(errorData.error || "Failed to create article");
      }
    } catch (error) {
      alert("Error creating article");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10 px-8 py-4 flex justify-between items-center">
        <Button
          onClick={() => router.push("/admin/dashboard")}
          variant="ghost"
          className="gap-2"
        >
          <ArrowLeft size={18} /> Back
        </Button>
        <div className="flex items-center gap-2 text-blue-600 font-bold">
          <Globe size={18} />
          <span>Creating in: {formData.language.toUpperCase()}</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-8">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 space-y-6">
              <input
                type="text"
                placeholder="Article Title..."
                className="text-4xl font-bold w-full outline-none placeholder:text-gray-200"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />

              <input
                type="text"
                placeholder="Category (e.g. Market Analysis)"
                className="w-full px-0 py-2 border-b border-gray-100 focus:border-blue-500 outline-none font-medium"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
              />

              <textarea
                placeholder="Start writing..."
                className="w-full min-h-[400px] outline-none resize-none text-lg text-gray-700"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <ImagePlus size={18} /> Featured Image
              </h3>
              <label className="block w-full aspect-video rounded-2xl border-2 border-dashed border-gray-200 hover:border-blue-400 transition-colors cursor-pointer overflow-hidden relative">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    className="w-full h-full object-cover"
                    alt="Preview"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <ImagePlus size={32} />
                    <span className="text-sm font-medium mt-2">
                      Upload Image
                    </span>
                  </div>
                )}
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            <Button
              disabled={loading}
              className="w-full py-8 rounded-[24px] bg-blue-600 hover:bg-blue-700 text-xl font-bold"
            >
              {loading ? "Publishing..." : "Publish Article"}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
