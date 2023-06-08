const express = require("express");

const studentAction = require("../controllers/student");

const router = express.Router();

router.post("/", studentAction.createStudent);

router.get("/", studentAction.getStudents);

router.get("/:_id", studentAction.getSpecificStudent);

router.put("/:roll", studentAction.updateStudent);

router.delete("/:roll", studentAction.deleteStudent);

module.exports = router;
