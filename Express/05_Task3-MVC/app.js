import dotenv from "dotenv";
dotenv.config({ quiet: true });

import express from "express";
import { connectDB } from "./config/database.js";
import bookRoutes from "./routes/book-routes.js";

const app = express();
const PORT = process.env.PORT || 9000;

//! DATABASE CONNECTION
connectDB();

//! MIDDLEWARES
app.use(express.json());

//! ROUTES
app.use("/v1/api", bookRoutes);

app.listen(PORT, (err) => {
  if (err) console.log(err);

  console.log("Server started at PORT", PORT);
});
