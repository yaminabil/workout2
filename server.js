require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const userRouter = require("./routes/users");
const exerciseRouter = require("./routes/exercises");
const Exercise = require("./models/Exercise");
app.use(express.json());
app.use(cors());
app.use(require("./config/checkToken"));

app.use("/api/exercises", exerciseRouter);
app.use("/api/users", userRouter);

/// last step
app.listen(PORT, (req, res) => {
  console.log(`runing on port ${PORT}`);
});
