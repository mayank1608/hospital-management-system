import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`).then(
        () => {
            console.log("Connected to MongoDB!");
        })
        .catch((error) => {
            console.log("MONGODB connection FAILED ", error);
            process.exit(1);
        })
}

export default connectDB