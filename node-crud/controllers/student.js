const express = require("express");
const mongoose = require("mongoose");

const student = require("../models/studentdata.js");

const router = express.Router();

const createStudent = async (req, res) => {
  console.log("Request from Postman: "+req.body);
  const newStudent = new student({
    name: req.body.name,
    roll: req.body.roll,
    class: req.body.class,
    registered_on: req.body.registered_on,
    subjects: req.body.subjects,
    gender: req.body.gender,
    contact_no: req.body.contact_no,
  });

  try {
    await newStudent.save();

    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.createStudent = createStudent;
