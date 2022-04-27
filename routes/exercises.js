const express = require("express");
const router = express.Router();
const Exercise = require("../models/Exercise");

// induces

//create Exercise

router.post("/new", (req, res) => {
  Exercise.create(req.body, (err, createdExercise) => {
    if (err) {
      res.status(400).json({ message: "failed creation" });
    } else {
      res.status(200).json(createdExercise);
    }
  });
});

// index // show all the exercise for one specific user

router.get("/user/:id", (req, res) => {
  Exercise.find({ user: req.params.id }, (err, foundExercises) => {
    if (err) {
      res.status(400).json({ message: "nothing is found " });
    } else {
      res.status(200).json(foundExercises);
    }
  });
});

module.exports = router;

// delete exercise
