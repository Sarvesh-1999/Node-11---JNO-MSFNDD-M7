//! FILE SYSTEM - FS (CORE MODULE)
import fs from "node:fs";

// console.log(fs);

//!----------------- SYNCRONOUS WAY------------------

//! CREATE A FILE --> fs.writeFileSync("path","data")
// - if file is not present create it otherwise if file is present override the data

//! EXAMPLE 1
// console.log(1);
// let val = fs.writeFileSync("./demo.txt", "File created sync way");
// if (val === undefined) {
//   console.log("file created");
// }
// console.log(2);

//! EXAMPLE 2
// fs.writeFileSync("./module.txt", "Hello World");

//! READ A FILE --> fs.readFileSync("path" , "encoding")

// let data = fs.readFileSync("./demo.txt", "utf-8");
// console.log(data);


//! UPDATE A FILE --> fs.appendFileSync("path" , "data")
// fs.appendFileSync("./module.txt","\nByee Byee")


//! DELETE A FILE -->
// fs.unlinkSync("./demo.txt")