 import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import connectMongoDB from './db/connectMongoDB.js';
import logger from './middleware/logger.js';
import notFoundHandler from './middleware/notFoundHandler.js';
import errorHandler from './middleware/errorHandler.js';

import notesRoutes from './routes/notesRoutes.js';

const app = express();

// серверний порт з .env або використовується 3000
const PORT = process.env.PORT || 3000;

// підключення до MongoDB
await connectMongoDB();

// middleware
app.use(logger);
app.use(cors());
app.use(express.json());

// routes
app.use(notesRoutes);

// 404
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

// запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});