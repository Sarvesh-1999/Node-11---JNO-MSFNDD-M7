// ! http module is a core module used to create a server

//! STEPS TO CREATE A HTTP SERVER
// 1) import http
// 2) use createServer()
// 3) asign a PORT number
// 4) define routes

import http from "node:http";

let server = http.createServer((req, res) => {
  //   console.log(req);// req.body , req.params, req.cookies
  //   console.log(res); // res.write(), res.json(), res.end()

  //   res.write("Hello WOrld")
  //   res.end() // it ends the req res cycle and indicates all chunks are recieved

  //! way 1
  // res.setHeader("content-type", "text/html");
  // res.statusCode = 200

  //! way2
  res.writeHead(200, { "content-type": "text/html" });

  res.end("<h2>Hello World</h2>");
});

server.listen(9000, (err) => {
  if (err) {
    console.log("Unable to start a server at port 9000");
  }
  console.log("Server started at port 9000");
});

// browser --> http://localhost:PORT-NUMBER
// modify --> restart the server , to avoid this use below command
// node --watch filename.js