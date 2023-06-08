const mongoose = require("mongoose");

const gradeSchema = mongoose.Schema({
  grade: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  subjects: {
    type: [String],
    required: true,
  },
});

var gradedata = mongoose.model("gradedata", gradeSchema);
module.exports = gradedata;
