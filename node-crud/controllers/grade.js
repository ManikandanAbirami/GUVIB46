const express = require("express");
const mongoose = require("mongoose");

const grade = require("../models/grade");

const router = express.Router();

const createGrade = async (req, res) => {
  console.log("Request from Postman: "+req.body);
  const newGrade = new grade({
    grade: req.body.grade,
    pass: req.body.pass,
    subjects: req.body.subjects,
  });

  try {
    await newGrade.save();

    res.status(201).json(newGrade);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.createGrade = createGrade;
