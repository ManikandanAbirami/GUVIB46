const express = require("express");
const mongoose = require("mongoose");

const app = express();


const dbUrl = "mongodb://localhost:27017/test";

mongoose.connect(dbUrl, { useNewUrlParser: true });

const con = mongoose.connection; //to get the connection status


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

try {
  con.on("open", () => {
    console.log("MongoDB connected!!!!");
  });
} catch (error) {
  console.log("Error: " + error);
}

const port = 3000;

const studentRouter = require("./routes/student");
app.use("/students", studentRouter);

const gradeRouter = require("./routes/grade");
app.use("/grade", gradeRouter);

app.listen(port, () => {
  console.log("This Node application is running on port " + port);
});

//app.listen(arg1, callback_function);
