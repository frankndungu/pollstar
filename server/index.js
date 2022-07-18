const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const dataFile = path.join(__dirname, "data.json");

// Support posting form data with url encoded
app.use(express.urlencoded({ extended: true }));

// Express routes
app.get("/poll", (req, res) => {
  res.send("Fuck I'm so stupid, I should have installed insomnia now I would have been donw with the project");
});

app.listen(3000, () => console.log("Server is running ..."));
