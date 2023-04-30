const { default: mongoose } = require("mongoose");
const Task = require("../models/task");
const dayjs = require("dayjs");

module.exports.getTasks = async (req, res) => {
 let tasks = await Task.find();
 tasks = tasks.map((task) => ({
  ...task._doc,
  date: dayjs(task._doc.date).format("MMM DD, YYYY"),
 }));

 res.render("home", { tasks: tasks || [] });
};

module.exports.addTask = async (req, res) => {
 await Task.create({ name: req.body.name, date: req.body.date, category: req.body.category });
 res.redirect("back");
};

module.exports.deleteTasks = async (req, res) => {
 await Task.deleteMany({
  _id: { $in: req.body.delete_tasks.map((id) => new mongoose.Types.ObjectId(id)) },
 });
 res.redirect("back");
};
