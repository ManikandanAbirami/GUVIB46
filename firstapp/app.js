const express = require("express");
const app = express();

const port = 3010;

app.get("/", (req, res) => {
  res.send("Hello world from Node application!!");
});

app.get("/read", (req, res) => {
  res.send("Navigated to Read node API!!!!!");
});

app.listen(port, () => {
  console.log("This Node application is running on port " + port);
});

//app.listen(arg1, callback_function);
