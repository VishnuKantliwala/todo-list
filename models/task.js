const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
 name: {
  type: String,
  require: true,
 },
 date: {
  type: Date,
  require: true,
 },
 category: {
  type: String,
 },
});

const Task = mongoose.model("Task", tasksSchema);
module.exports = Task;
