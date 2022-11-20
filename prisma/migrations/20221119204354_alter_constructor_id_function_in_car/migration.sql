/*
  Warnings:

  - The primary key for the `Car` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Car` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "pricePerDay" INTEGER NOT NULL,
    "pricePerKm" INTEGER NOT NULL,
    "maxDuration" INTEGER NOT NULL,
    "maxDistance" INTEGER NOT NULL
);
INSERT INTO "new_Car" ("brand", "id", "maxDistance", "maxDuration", "model", "pricePerDay", "pricePerKm") SELECT "brand", "id", "maxDistance", "maxDuration", "model", "pricePerDay", "pricePerKm" FROM "Car";
DROP TABLE "Car";
ALTER TABLE "new_Car" RENAME TO "Car";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
