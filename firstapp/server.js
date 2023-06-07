var http = require("http");

//create a server object
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    var url = req.url;
    console.log("URL: " + url);
    if (url === "/about") {
      res.write("<h1>About us page<h1>"); // write a response
      res.end();
    } else if (url === "/contact") {
      res.write("<h1>Contact us page<h1>"); // write a response
      res.end();
    } else {
      res.write("<h1>Hello, GuviB46 ######<h1>"); // write a response
      res.end();
    }
  })
  .listen(3000, function () {
    console.log("Server is running at http://localhost:3000/"); //server object listens on 3000 port
  });

// const express = require("express");
// const app = express();

// const port = 3010;

// app.get("/", (req, res) => {
//   res.send("Hello world from Node application!!");
// });

// app.listen(port, () => {
//   console.log("This Node application is running on port " + port);
// });
