const mongoose = require("mongoose");

const schema = mongoose.Schema({
  temperature: Number,
  fan: Boolean,
  turnOn: Number
});

const model = mongoose.model("temp", schema);
module.exports = model;