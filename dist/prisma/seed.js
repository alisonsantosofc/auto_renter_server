"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const cars_json_1 = __importDefault(require("./cars.json"));
const prisma = new client_1.PrismaClient();
async function main() {
    cars_json_1.default.forEach(async (car) => {
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
    });
}
main();
