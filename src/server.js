require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectMongoDB = require('./db/connectMongoDB');
const logger = require('./middleware/logger');
const notFoundHandler = require('./middleware/notFoundHandler');
const errorHandler = require('./middleware/errorHandler');

const notesRoutes = require('./routes/notesRoutes');

const app = express();

// серверний порт  з .env або використовується 3000 
const PORT = process.env.PORT || 3000;

// підключення до MongoDB
connectMongoDB();

// middleware
app.use(logger);
app.use(cors());
app.use(express.json());

// routes
app.use(notesRoutes);

// 404
app.use(notFoundHandler);

// error handler обробник помилок
app.use(errorHandler);

// запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});