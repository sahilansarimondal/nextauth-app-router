import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDb is connected");
    });
    connection.on("error", (error) => {
      console.log("MongoDb error: " + error);
    });
  } catch (error: any) {
    console.log("something went wrong");
    console.log(error);
  }
}
