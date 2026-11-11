
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "ecommerce"
        });

        console.log("DB Connected");
    } catch (error) {
        console.log("MongoDB Connection Error:", error.message);
    }
};

export default connectDB;
