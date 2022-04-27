const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("hello");
});

// index : this will show us all the users we have in our data
router.get("/index", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
});

// create : this will create new user for us
router.post("/signup", async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "10s" });
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
});

// this route will check for  us  if the user info are right then will login and send  the token back to the client

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json({ message: "user not found " });
      return;
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      res.status(400).json({ message: "password wrong " });
      return;
    }
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json("Bad credentials");
  }
});

router.post("/loging", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json({ message: "user not found" });
      return;
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      res.status(400).json({ message: "password wrong" });
      return;
    }
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json("bad credentials");
  }
});

// check token
function checkToken(req, res) {
  //   console.log("req.user", req.user);
  res.status(200).json({ message: "hello you're good to go" });
}
function ensureLogin(req, res, next) {
  if (!req.user) return res.status(401).json("unauthorized");
  next();
}
router.get("/check-token", ensureLogin, checkToken);

module.exports = router;
