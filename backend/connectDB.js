import mongoose from "mongoose";
import 'dotenv/config'; 

async function connectDB() {
    try {
        await mongoose.connect(process.env.VITE_MONGODB_URL, {
            serverSelectionTimeoutMS: 5000, 
            socketTimeoutMS: 45000,
            maxPoolSize: 10,
        })
        console.log('MongoDB was connected');   
    } catch (error) {
        console.log('MongoDB connect error: ', error);
        process.exit(1);
    }
}
export default connectDB;