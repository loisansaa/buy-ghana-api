import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import CategoryRouter from './src/routes/category-routes.js';
import ProductsRouter from './src/routes/products-router.js';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});



const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/api/v1/categories", CategoryRouter);
app.use("/api/v1/products", ProductsRouter);



const PORT = process.env.PORT || 4892;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});