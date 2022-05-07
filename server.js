require("dotenv").config();
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));
app.use(require("./config/checkToken"));
const userRouter = require("./routes/users");
const exerciseRouter = require("./routes/exercises");
const Exercise = require("./models/Exercise");

app.use(require("./config/checkToken"));

app.use("/api/exercises", exerciseRouter);
app.use("/api/users", userRouter);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
/// last step
const PORT = process.env.PORT || 3001;
app.listen(PORT, (req, res) => {
  console.log(`runing on port ${PORT}`);
});
