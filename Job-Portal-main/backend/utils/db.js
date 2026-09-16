import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.error("MongoDB Error: MONGO_URI is not defined in backend/.env");
            return;
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.error("MongoDB connection failed:", error.message || error);
    }
}
export default connectDB;