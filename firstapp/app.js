const express = require("express");
const app = express();

const port = 3010;

app.get("/", (req, res) => {
  res.send("Hello world from Node application!!");
});

app.get("/about", (req, res) => {
  res.send("About us page");
});

app.get("/contact", (req, res) => {
  res.send("Contact us page");
});

app.listen(port, () => {
  console.log("This Node application is running on port " + port);
});

//app.listen(arg1, callback_function);
