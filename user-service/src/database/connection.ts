import mongoose from "mongoose";
import config from "../config/config";

export const connectDB = async() => {
    try {
        console.info(`Connecting to database...`);
        await mongoose.connect(config.MONGO_URI!)
        console.info(`Database connection established`);
    } catch (error) {
        console.error(`Error connecting to database`)
        process.exit(1);
    }
}