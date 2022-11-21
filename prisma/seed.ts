import { PrismaClient } from '@prisma/client';

import cars from './cars.json';

const prisma = new PrismaClient();

async function main() {
  cars.forEach(async (car) => {
    await prisma.car.create({
      data: {
        brand: car.brand,
        model: car.model,
        pricePerDay: car.pricePerDay,
        pricePerKm: car.pricePerKm,
        maxDuration: car.availability.maxDuration,
        maxDistance: car.availability.maxDistance,
      },
    });
  })
}

main();
