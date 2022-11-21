"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require("@prisma/client");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || process.env.MY_LOCAL_PORT;
const prisma = new client_1.PrismaClient({
    log: ['query'],
});
app.use((0, cors_1.default)());
app.get('/', (req, reply) => {
    reply.json({ msg: 'Bem vindo a melhor api para aluguel de carros! ;)' });
});
app.get('/cars', async (req, reply) => {
    const { maxDuration, maxDistance } = req.query;
    let cars = await prisma.car.findMany();
    if (maxDuration) {
        cars = cars.filter((car) => Number(maxDuration) <= car.maxDuration);
    }
    if (maxDistance) {
        cars = cars.filter((car) => Number(maxDistance) <= car.maxDistance);
    }
    return reply.json({ cars });
});
app.listen(port, () => {
    console.log(`[auto_renter]: is running at http://localhost:${port}/`);
    console.log('✅️ Server started successfully!');
});
