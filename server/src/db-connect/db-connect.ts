import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const MONGO_URI = process.env?.MONGO_URI ?? "";

export const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MONGO DB");
  } catch (error) {
    console.log("Mongo db connnection error", error);
  }
};
