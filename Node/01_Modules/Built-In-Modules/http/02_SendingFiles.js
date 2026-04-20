import http from "node:http";
import fs from "node:fs";

let server = http.createServer((req, res) => {
  //! SENDING HTML FILE
  // let src = fs.createReadStream("./index.html", "utf-8");
  // res.writeHead(200, { "content-type": "text/html" });
  // src.pipe(res); // --> pipe -> left (readable stream) : right (writable stream)

  //! SENDING CSS FILE
  // let src = fs.createReadStream("./style.css", "utf-8");
  // res.writeHead(200, { "content-type": "text/css" });
  // src.pipe(res)

  //! SENDING JSON FILE
  let src = fs.createReadStream("./data.json", "utf-8");
  res.writeHead(200, { "content-type": "application/json" });
  src.pipe(res);
});

server.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("Server running 9000");
});
