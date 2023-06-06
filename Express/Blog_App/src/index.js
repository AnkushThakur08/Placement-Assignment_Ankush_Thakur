import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// My Routes
import blogRoutes from './routes/blogRoutes.js';

const app = express();

await mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middlwares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/blog', blogRoutes);

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
