import express from "express";
import routes from "./routes/routes.js";

const app = express();
const PORT = 9000;

//! middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//! routes middleware
app.use("/v1/api", routes);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server stared at PORT", PORT);
});
