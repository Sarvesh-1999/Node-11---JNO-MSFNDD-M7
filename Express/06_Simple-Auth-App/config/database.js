import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connection Success ✅");
  } catch (error) {
    console.log("MongoDB Connection Failed ❌");
    process.exit(1);
  }
}
