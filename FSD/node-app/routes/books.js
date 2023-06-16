const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.get("/", (req, res) => {
  Book.find()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json({ message: e });
    });
});

router.post("/", (req, res) => {
  const book = new Book({
    title: req.body.title,
    description: req.body.description,
  });

  book
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json({ message: e });
    });
});

router.delete("/:id", (req, res) => {
  Book.deleteOne({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json({ message: e });
    });
});

router.patch("/:id", (req, res) => {
  Book.updateOne(
    { _id: req.params.id },
    {
      $set: { description: req.body.description },
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json({ message: e });
    });
});

module.exports = router;
