const mongoose = require("../config/database");
const { Schema, model } = mongoose;

const exerciseSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String, required: true },
    repetition: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Exercise = model("Exercise", exerciseSchema);
module.exports = Exercise;
