/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";

const dbConnect = async (uri: string) => {
  try {
    const conecting = await mongoose.connect(uri);
    console.log("Mongo db connect:", conecting.connection.host);
  } catch (error: any) {
    console.error(`Error ${error.message}`);
  }
};

export default dbConnect;
