import fs from "node:fs";

// fs.readFile("./class.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Something went worng");
//   }
//   console.log("File read success");
//   console.log(data);
// });

//! STREAMS AND BUFFER

//! BUFFER is a temporary space in a memory
//! STREAMS means continuesly reading and writing the data in chunks

//! DEFAULT BUFFER SIZE
// normal files --> 64kb
// large files, audio ya videos --> 16kb

//! STREAMS ARE OF 4 TYPES
// 1) Writable stream
// fs.createWriteStream("./demo.py")

// 2) Readable stream
// fs.createReadStream("./course.txt", "utf-8");

// 3) Duplex stream <--- Important <--- pipe()
// syntax --> src.pipe(destn)

// let src = fs.createReadStream("./course.txt", "utf-8");
// let destn = fs.createWriteStream("./demo.py");
// src.pipe(destn);

// 4) Transform Stream

//! HOW CHUNKS WORKS
let src = fs.createReadStream("./log.txt", {
  encoding: "utf-8",
  highWaterMark: 1, //<-- size of chunk in byte
});

// 1 byte = 8 bits ===>  1 alphabet takes 8 bit of space

src.on("data", (chunk) => {
  console.log(chunk);
  console.log(chunk.length);
});
