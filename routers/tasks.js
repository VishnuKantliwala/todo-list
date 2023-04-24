const express = require("express");
const { getTasks } = require("../controllers/tasks_controller");

const router = express.Router();

router.get("/", getTasks);

module.exports = router;
