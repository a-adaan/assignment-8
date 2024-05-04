import mongoose from "mongoose";
// track the connection
let isConnected = false;
export const connectToDataBase = async () => {
  if (isConnected) {
    console.log("DB connected already");
    return;
  }
  try {
    const connected = await mongoose.connect(process.env.MONGO_URL, {
      dbName: "khanaKhazana",
    });
    isConnected = true;
    console.log("database connected");
    return connected;
  } catch (error) {
    console.log(error);
  }
};
