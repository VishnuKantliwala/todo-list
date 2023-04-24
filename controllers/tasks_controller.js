const Task = require("../models/task");

module.exports.add = (req, res) => {};

module.exports.getTasks = async (req, res) => {
 const tasks = await Task.find();
 res.render("home", tasks);
};
