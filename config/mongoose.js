const mongoose = require("mongoose");

// Connect database
mongoose.connect("mongodb://127.0.0.1:27017/todo_list_db");

// check if connection is established
const db = mongoose.connection;

// Handle error
db.on("error", (error) => {
 console.log("Error connecting database: " + error.message);
});

// Up and running
db.on("open", () => {
 console.log("Database is up and running");
});
