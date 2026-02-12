/*
  Warnings:

  - You are about to drop the column `category` on the `News` table. All the data in the column will be lost.
  - Added the required column `category` to the `NewsTranslation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "News" DROP COLUMN "category";

-- AlterTable
ALTER TABLE "NewsTranslation" ADD COLUMN     "category" TEXT NOT NULL;
