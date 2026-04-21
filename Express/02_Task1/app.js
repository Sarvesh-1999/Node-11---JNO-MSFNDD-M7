import express from "express";
import fs from "node:fs";
import mongodb from "mongodb";

async function connectDB() {
  let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  let database = client.db("Task1");
  let collection = await database.createCollection("users");
  return collection;
}

const app = express();
const PORT = 9000;

// middleware
app.use(express.urlencoded({ extended: true })); // parses form data

app.get("/", (req, res) => {
  let src = fs.createReadStream("./pages/index.html", "utf-8");
  src.pipe(res);
});

app.post("/submit", async (req, res) => {
  let { username, email, password } = req.body;
  try {
    let collection = await connectDB();
    collection.insertOne({ username, email, password });
    res.json({ message: "user created" });
  } catch (err) {
    console.log(err);
    res.json({ message: "unable to create user" });
  }
});

app.get("/all", async (req, res) => {
  try {
    let collection = await connectDB();
    let users = await collection.find({}).toArray();
    res.json({ data: users });
  } catch (error) {
    console.log(err);
    res.json({ message: "unable to get all users" });
  }
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server started at PORT", PORT);
});
