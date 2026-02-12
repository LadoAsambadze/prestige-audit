import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";

// GET single news article with specific language translation
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(req.url);
    const lang = searchParams.get("lang") || "en";

    const news = await prisma.news.findUnique({
      where: { id },
      include: {
        translations: {
          where: { language: lang },
        },
      },
    });

    if (!news) {
      return NextResponse.json({ error: "News not found" }, { status: 404 });
    }

    // Return combined data: Global fields + Translatable fields
    return NextResponse.json({
      id: news.id,
      image: news.image,
      createdAt: news.createdAt,
      // Category is now pulled from the translation table
      category: news.translations[0]?.category || "",
      title: news.translations[0]?.title || "",
      content: news.translations[0]?.content || "",
      language: lang,
    });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// UPDATE news article (Admin Only)
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    // Auth Check
    const cookieStore = await cookies();
    if (!cookieStore.get("admin_token")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const language = formData.get("language") as string;
    const imageFile = formData.get("image") as File | null;

    // Data object for the main News table (global fields)
    let globalUpdateData: any = {};

    // Handle image file upload if a new file is provided
    if (imageFile && typeof imageFile !== "string" && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const filename = Date.now() + "_" + imageFile.name.replaceAll(" ", "_");
      await writeFile(
        path.join(process.cwd(), "public/uploads/" + filename),
        buffer,
      );
      globalUpdateData.image = `/uploads/${filename}`;
    }

    // Update Global fields and Upsert the Translation fields
    const updated = await prisma.news.update({
      where: { id },
      data: {
        ...globalUpdateData, // Updates image only if a new one was uploaded
        translations: {
          upsert: {
            where: {
              newsId_language: {
                newsId: id,
                language: language,
              },
            },
            update: {
              title,
              content,
              category, // Now translatable
            },
            create: {
              title,
              content,
              category, // Now translatable
              language,
            },
          },
        },
      },
      include: {
        translations: {
          where: { language: language },
        },
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

// DELETE news article (Admin Only)
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const cookieStore = await cookies();
    if (!cookieStore.get("admin_token")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await prisma.news.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
