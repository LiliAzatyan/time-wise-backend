import mongoose from "mongoose";
import { MONGODB_PASSWORD } from "../config/config"

const mongoDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://timewise:${MONGODB_PASSWORD}@timewise.jvmloxw.mongodb.net/`);
        console.log("Database connected successfully");
    } catch (err) {
        console.error(`Database connection error: ${err}`);
        process.exit(1);
    }
};

export default mongoDB;