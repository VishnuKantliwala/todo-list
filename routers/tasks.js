const express = require("express");
const { getTasks, addTask, deleteTasks } = require("../controllers/tasks_controller");

const router = express.Router();

router.get("/", getTasks);
router.post("/", addTask);
router.post("/delete", deleteTasks);

module.exports = router;
