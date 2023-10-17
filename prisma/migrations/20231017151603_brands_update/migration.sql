-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Brands" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'DE',
    "logo" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Brands" ("id", "name") SELECT "id", "name" FROM "Brands";
DROP TABLE "Brands";
ALTER TABLE "new_Brands" RENAME TO "Brands";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
