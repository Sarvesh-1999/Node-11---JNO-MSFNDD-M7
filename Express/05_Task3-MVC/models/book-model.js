import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      trim: true,
      maxLength: [100, "Title cannot exceed 100 characters"],
    },

    author: {
      type: String,
      required: [true, "Please provide a author name"],
      trim: true,
    },

    year: {
      type: Number,
      required: [true, "Please provide publication year"],
      min: [1000, "publication year cannot be less than 1000"],
      max: [
        new Date().getFullYear(),
        "Publication date cannot exceeed current year",
      ],
    },
  },
  { timestamps: true },
);

export default mongoose.model("Book", BookSchema);
