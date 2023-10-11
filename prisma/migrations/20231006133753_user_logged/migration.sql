-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "level" INTEGER NOT NULL DEFAULT 1,
    "license" TEXT NOT NULL DEFAULT 'B',
    "logged" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Users" ("birthDate", "country", "createdAt", "email", "id", "level", "license", "name", "nickname", "password", "state") SELECT "birthDate", "country", "createdAt", "email", "id", "level", "license", "name", "nickname", "password", "state" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
