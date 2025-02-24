import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRoute from './routers/foodRoute.js';
import userRouter from './routers/userRoute.js';
import cartRouter from './routers/cartRoute.js';
import orderRouter from './routers/orderRoute.js';
import { createServer } from '@vercel/node';  // Vercel-Compatible Handler

// App Config
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// API Endpoints
app.use("/api/food", foodRoute);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get('/', (req, res) => {
    res.send("API is running...");
});

// Export the Vercel serverless handler
export default createServer(app);
