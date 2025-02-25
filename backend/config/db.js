import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://food-del:hello121@cluster0.uugjr.mongodb.net/food-del').then(() => console.log('DB Connected'));
}