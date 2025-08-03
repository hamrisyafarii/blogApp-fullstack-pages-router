/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";

const isConnected = false;

const dbConnect = async () => {
  if (isConnected) {
    return;
  }
  try {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGO_URI!);
  } catch (error: any) {
    console.error(`Error ${error.message}`);
  }
};

export default dbConnect;
