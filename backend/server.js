import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';
import foodRoute from './routers/foodRoute.js';


// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// API endpoints
app.use("/api/food", foodRoute);


app.get('/', (req, res) => {
    res.send("API is running...");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

