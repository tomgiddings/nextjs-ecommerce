-- CreateEnum
CREATE TYPE "Allergen" AS ENUM ('CELERY', 'GLUTEN', 'CRUSTACEAN', 'EGGS', 'FISH', 'LUPIN', 'MILK', 'MOLLUSCS', 'MUSTARD', 'NUTS', 'PEANUTS', 'SESAME', 'SOYA', 'SULPHITES');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "active" BOOL NOT NULL DEFAULT false;
ALTER TABLE "Product" ADD COLUMN     "addon" BOOL NOT NULL DEFAULT false;
ALTER TABLE "Product" ADD COLUMN     "allergens" "Allergen"[];

-- CreateTable
CREATE TABLE "_Addons" (
    "A" INT4 NOT NULL,
    "B" INT4 NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Addons_AB_unique" ON "_Addons"("A", "B");

-- CreateIndex
CREATE INDEX "_Addons_B_index" ON "_Addons"("B");

-- AddForeignKey
ALTER TABLE "_Addons" ADD CONSTRAINT "_Addons_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Addons" ADD CONSTRAINT "_Addons_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
