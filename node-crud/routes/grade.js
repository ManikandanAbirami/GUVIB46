const express = require("express");

const gradeAction = require("../controllers/grade");

const router = express.Router();

router.post("/", gradeAction.createGrade);

module.exports = router;
