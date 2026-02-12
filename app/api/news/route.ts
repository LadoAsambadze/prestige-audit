import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

// POST: Create a new article with its first translation
export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token");
    if (!token)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const formData = await req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string; // This is now translatable!
    const language = (formData.get("language") as string) || "en";
    const imageFile = formData.get("image") as File;

    let imageUrl = "";

    // Image Upload Logic
    if (imageFile && typeof imageFile !== "string" && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const filename = Date.now() + "_" + imageFile.name.replaceAll(" ", "_");
      const uploadDir = path.join(process.cwd(), "public/uploads");

      // Ensure directory exists
      try {
        await mkdir(uploadDir, { recursive: true });
      } catch (e) {}

      await writeFile(path.join(uploadDir, filename), buffer);
      imageUrl = `/uploads/${filename}`;
    }

    // CREATE Logic:
    // 1. news table gets global fields (image)
    // 2. translations table gets localized fields (title, content, category)
    const news = await prisma.news.create({
      data: {
        image: imageUrl,
        translations: {
          create: {
            language,
            title,
            content,
            category, // Saved inside translation
          },
        },
      },
      include: { translations: true },
    });

    return NextResponse.json(news);
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { error: "Failed to create news" },
      { status: 500 },
    );
  }
}

// GET: Fetch all news articles flattened for the current language
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get("lang") || "en";

  try {
    const news = await prisma.news.findMany({
      include: {
        translations: {
          where: { language: lang },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    // Flatten the response so the frontend sees 'category' and 'title' at the top level
    const flattened = news.map((item) => {
      const translation = item.translations[0];
      return {
        id: item.id,
        image: item.image,
        createdAt: item.createdAt,
        // Pull these from the translation record
        category: translation?.category || "Uncategorized",
        title: translation?.title || "No translation",
        content: translation?.content || "",
      };
    });

    return NextResponse.json(flattened);
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 },
    );
  }
}
