import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

dotenv.config();

const app = express();
const port = process.env.PORT;

const prisma = new PrismaClient({
  log: ['query'],
});

app.use(cors());

app.get('/', (req, reply) => {
  reply.json({ msg: 'Bem vindo a melhor api para aluguel de carros! ;)' });
});

app.get('/cars', async (req, reply) => {
  const { maxDuration, maxDistance } = req.query;

  let cars = await prisma.car.findMany();

  if (maxDuration) {
    cars = cars.filter(car => Number(maxDuration) <= car.maxDuration);
  }

  if (maxDistance) {
    cars = cars.filter(car => Number(maxDistance) <= car.maxDistance);
  }

  return reply.json({ cars });
});

app.listen(port, () => {
  console.log(`[auto_renter]: is running at http://localhost:${port}/`);
  console.log('✅️ Server started successfully!');
});
