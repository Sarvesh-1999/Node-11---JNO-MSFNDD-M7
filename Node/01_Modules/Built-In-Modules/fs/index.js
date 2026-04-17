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

// let data = fs.readFileSync("./demo.txt","utf-8");
// console.log(data);

//! UPDATE A FILE --> fs.appendFileSync("path" , "data")
// fs.appendFileSync("./module.txt","\nByee Byee")

//! DELETE A FILE -->
// fs.unlinkSync("./demo.txt")

//!----------------- ASYNCRONOUS WAY------------------

//! CREATE A FILE
// fs.writeFile("path","data",callback)

// console.log(1);
// fs.writeFile("./user.txt", "John Doe", (err) => {
//   if (err) {
//     console.log("Unable to create file");
//   }

//   console.log("File Created");
// });
// console.log(2);

//! READ A FILE
// fs.readFile("path","encoding",callback)

// fs.readFile("./index.js", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Unable to read");
//   }
//   console.log("File read successfully");
//   console.log(data);
// });

//! UPDATE A FILE
// fs.appendFile("path","data",callback)

// fs.appendFile("./user.txt", "\nJane Doe", (err) => {
//   if (err) {
//     console.log("Unable to append");
//   }
//   console.log("file updated successfully");
// });

//! DELETE A FILE
// fs.unlink("path",callback)

// fs.unlink("./module.txt", (err) => {
//   if (err) {
//     console.log("Unable to delete");
//   }
//   console.log("File deleted successfully");
// });

//! CREATE AND APPEND
// NOT RECOMMENDED --> it causes callback hell
// fs.writeFile("./course.txt", "Courses are :", (err) => {
//   if (err) console.log("Unable to create file");
//   console.log("File created");

//   fs.appendFile("./course.txt", "\nJava Fullstack", (err) => {
//     if (err) console.log("Unable to append course 1");
//     console.log("1 course added");

//     fs.appendFile("./course.txt", "\nMern Stack", (err) => {
//       if (err) console.log("Unable to append course 2");
//       console.log("2 course added");

//     });
//   });
// });

//! --------------------------- fs Promise ------------------------

import fsp from "node:fs/promises";

//! CREATE A FILE
// let res = fsp.writeFile("./log.txt", "I am Log");
// console.log(res);

// res.then(() => {
//   console.log("File created");
// });

// res.catch((err) => {
//   console.log("Unable to create log.txt");
// });

//! READ A FILE
// let res = fsp.readFile("./log.txt", "utf-8");
// res.then((data) => {
//   console.log("file read success");
//   console.log(data);
// });

// res.catch((err) => {
//   console.log("unable to read log.txt");
// });

//! CREATE AND UPDATE

// let res1 = fsp.writeFile("./class.txt", "Classes are :");

// res1.then(() => {
//   console.log("File created");

//   let res2 = fsp.appendFile("./class.txt", "\nHtml Class");

//   res2.then(() => {
//     console.log("HTML class added");

//     let res3 = fsp.appendFile("./class.txt", "\nCSS Class");

//     res3.then(() => {
//       console.log("CSS class added");
//     });

//     res3.catch((err) => {
//       console.log("Unable to add CSS class");
//     });
//   });

//   res2.catch((err) => {
//     console.log("Unable to add HTML class ");
//   });
// });

// res1.catch((err) => {
//   console.log("Unable to create class.txt");
// });

//! ASYNC AND AWAIT (BEST PRACTICE)

// async function fsOperation() {
//   try {
//     await fsp.writeFile("./demo.txt", "I am Demo file");
//     console.log("File created");
//     await fsp.appendFile("./demo.txt", "\nHello World");
//     console.log("Added Data 1");
//     await fsp.appendFile("./demo.txt", "\nHello Universe");
//     console.log("Added Data 2");
//   } catch (err) {
//     console.log("Something went wrong in fsOperation");
//   }
// }

// fsOperation();


