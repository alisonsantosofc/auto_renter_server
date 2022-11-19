-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "pricePerDay" INTEGER NOT NULL,
    "pricePerKm" INTEGER NOT NULL,
    "maxDuration" INTEGER NOT NULL,
    "maxDistance" INTEGER NOT NULL
);
