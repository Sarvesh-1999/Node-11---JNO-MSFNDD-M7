import dotenv from "dotenv";
dotenv.config({ quiet: true });

import express from "express";
import authRoutes from "./routes/auth-routes.js";
import homeRoutes from "./routes/home-routes.js";
import { connectDB } from "./config/database.js";

const app = express();
const PORT = process.env.PORT || 9000;

connectDB();

app.use(express.json());
app.use("/v1/api", authRoutes);
app.use("/v1/api", homeRoutes);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server started at PORT ${PORT}`);
});
