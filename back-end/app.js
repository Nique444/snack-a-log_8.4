// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();
const snackController = require("./controllers/snackController");

// MIDDLEWARE
app.use(express.json());
app.use(cors());

app.use("/snacks", snackController);

// ROUTES
app.get("/", (req, res) => {
    res.send("Get Snack'n at Snack-a-log!");
});

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page not found.");
});

// EXPORT
module.exports = app;
