import mongoose from "mongoose";
import { MONGODB_URI } from "../../config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to MongoDB");

    } catch(error) {
        console.log('Failed to connet to DB', error);
    }
}

export default connectDB;