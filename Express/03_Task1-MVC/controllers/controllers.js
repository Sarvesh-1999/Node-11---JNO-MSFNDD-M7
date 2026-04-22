import fs from "node:fs";
import path from "node:path";
import { connectDB } from "../config/database.js";

export function getHTMLPage(req, res) {
  let filepath = path.join(import.meta.dirname, "..", "pages", "index.html");
  //   console.log(filepath);
  let src = fs.createReadStream(filepath, "utf-8");
  src.pipe(res);
}

export async function handleFormSubmit(req, res) {
  let { username, email, password } = req.body;
  let collection = await connectDB();
  collection.insertOne({ username, email, password });
  res.json({ message: "User Created" });
}

export async function handleGetAllUsers(req, res) {
  let collection = await connectDB();
  let users = await collection.find({}).toArray();
  res.json({
    message: "fetched all users",
    data: users,
  });
}
