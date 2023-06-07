const express = require("express");
const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017";

mongoose.connect(dbUrl, { useNewUrlParser: true });

const con = mongoose.connection; //to get the connection status

const app = express();

// app.use(express.json);

try {
  con.on("open", () => {
    console.log("MongoDB connected!!!!");
  });
} catch (error) {
  console.log("Error: " + error);
}

const port = 3010;

app.listen(port, () => {
  console.log("This Node application is running on port " + port);
});

//app.listen(arg1, callback_function);
