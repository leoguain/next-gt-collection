/*
  Warnings:

  - You are about to alter the column `price` on the `Cars` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.
  - Added the required column `aspiration` to the `Cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drivetrain` to the `Cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `power` to the `Cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Cars` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cars" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "model" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "brandId" TEXT NOT NULL,
    "drivetrain" TEXT NOT NULL,
    "power" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "aspiration" TEXT NOT NULL,
    CONSTRAINT "Cars_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brands" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Cars" ("brandId", "id", "model", "price", "year") SELECT "brandId", "id", "model", "price", "year" FROM "Cars";
DROP TABLE "Cars";
ALTER TABLE "new_Cars" RENAME TO "Cars";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
