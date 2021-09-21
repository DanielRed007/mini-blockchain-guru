import mongoose from "mongoose";

const envs = {
    local: "mongodb://localhost:27017/blockchain-guru",
};
  
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(envs.local);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error:any) {
        console.log(`MongoDB Error Office Supplies API : ${error.message}`);
        process.exit(1);
    }
};