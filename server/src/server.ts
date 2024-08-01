// src/server.ts
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import movieRoutes from './routes/movieRoutes.js';
import animeRoutes from './routes/animeRoutes.js';

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 3000;

app.use(cors());

app.use('/api', movieRoutes);
app.use('/api', animeRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
