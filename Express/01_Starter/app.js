// express js is a framework of NodeJS

// install express js
// import express
// create server

import express from "express";

const app = express();
const PORT = 9000;

//! routes
// app.METHOD("/path",callback)

app.get("/", (req, res) => {
  res.json({message:"HomePage"});
});

app.get("/about", (req, res) => {
  res.send("AboutPage");
});

app.get("/contacts", (req, res) => {
  res.send("ContactsPage");
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Sever started at port", PORT);
});
