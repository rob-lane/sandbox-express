/*
  Warnings:

  - You are about to drop the column `attribute` on the `commodities` table. All the data in the column will be lost.
  - Added the required column `attrib` to the `commodities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "commodities" DROP COLUMN "attribute",
ADD COLUMN     "attrib" TEXT NOT NULL;
