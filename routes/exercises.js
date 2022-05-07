const express = require("express");
const router = express.Router();
const Exercise = require("../models/Exercise");

// induces

//create Exercise

router.post("/new", async (req, res) => {
  try {
    const exercise = await Exercise.create(req.body);
    if (exercise) {
      res.status(200).json(exercise);
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
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

// show all the exercises of one type for of one specific user

router.get("/user/:id/:type", async (req, res) => {
  try {
    const foundExercises = await Exercise.find({
      type: req.params.type,
      user: req.params.id,
    });
    if (foundExercises) {
      res.status(200).json(foundExercises);
    }
  } catch (err) {
    res.status(400).json({ message: "nothing is found " });
  }
});

// to delete all the data
router.delete("/delete", (req, res) => {
  Exercise.deleteMany({}, (err, deletedExercise) => {
    if (err) {
      res.status(400).json({ message: "deletion failed" });
    } else {
      res.status(200).json({ message: "deletion succeful" });
    }
  });
});

// to delete one exercise
router.delete("/delete/:id", async (req, res) => {
  try {
    const response = await Exercise.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "deletion succeful" });
  } catch (err) {
    res.status(400).json({ message: "deletion failed" });
  }
});

// get exercise by id
router.get("/:id", async (req, res) => {
  try {
    const foundExercise = await Exercise.findById(req.params.id);
    res.status(200).json(foundExercise);
  } catch (err) {
    res.status(400).json({ message: "failed to find the exercise " });
  }
});

module.exports = router;

// delete exercise
