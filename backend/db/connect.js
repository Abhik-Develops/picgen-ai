import mongoose from "mongoose";

const connectDB = async (uri) => {
    mongoose.set('strictQuery', true);
    try{
        await mongoose.connect(uri)
        console.log("Database connected successfully...");
    }
    catch(error){
        console.log(error);
    }
}

export default connectDB;