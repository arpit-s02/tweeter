import mongoose from "mongoose";
import { MONGODBURI } from "../../config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODBURI);
        console.log("Connected to MongoDB");

    } catch(error) {
        console.log('Failed to connet to DB', error);
    }
}

export default connectDB;