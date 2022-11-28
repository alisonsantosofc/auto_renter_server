-- CreateTable
CREATE TABLE "Car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "pricePerDay" INTEGER NOT NULL,
    "pricePerKm" INTEGER NOT NULL,
    "maxDuration" INTEGER NOT NULL,
    "maxDistance" INTEGER NOT NULL
);
