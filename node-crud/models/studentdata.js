const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
    required: true,
    unique: true,
  },
  class: {
    type: String,
    required: true,
  },
  registered_on: {
    type: Date,
    default: new Date(),
  },
  subjects: {
    type: [String],
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  contact_no: {
    type: String,
    required: true,
  },
});

var studentdata = mongoose.model("studentdata", studentSchema);
module.exports = studentdata;
