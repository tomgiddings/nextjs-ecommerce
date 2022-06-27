/*
  Warnings:

  - You are about to drop the column `addon` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "addon";
ALTER TABLE "Product" ADD COLUMN     "addonOnly" BOOL NOT NULL DEFAULT false;
