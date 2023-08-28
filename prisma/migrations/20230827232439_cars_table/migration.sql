-- CreateTable
CREATE TABLE "Cars" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "model" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "brandId" TEXT NOT NULL,
    CONSTRAINT "Cars_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brands" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
