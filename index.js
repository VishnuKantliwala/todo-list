const express = require("express");
const port = 8001;

const db = require("./config/mongoose");
const app = express();

// Set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Body parser
app.use(express.urlencoded());

// Statics declaration
app.use(express.static("assets"));

app.use("/", require("./routers"));

app.listen(port, (error) => {
 if (error) {
  console.log("Error: ", error);
 }
 console.log("server is running at port:", port);
});
