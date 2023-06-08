const express = require("express");

const studentAction = require("../controllers/student");

const router = express.Router();

router.post("/", studentAction.createStudent);

module.exports = router;
