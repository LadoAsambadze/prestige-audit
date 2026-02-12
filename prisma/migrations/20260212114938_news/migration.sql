/*
  Warnings:

  - You are about to drop the column `content` on the `News` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `News` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "News" DROP COLUMN "content",
DROP COLUMN "title";

-- CreateTable
CREATE TABLE "NewsTranslation" (
    "id" TEXT NOT NULL,
    "newsId" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "NewsTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsTranslation_newsId_language_key" ON "NewsTranslation"("newsId", "language");

-- AddForeignKey
ALTER TABLE "NewsTranslation" ADD CONSTRAINT "NewsTranslation_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;
