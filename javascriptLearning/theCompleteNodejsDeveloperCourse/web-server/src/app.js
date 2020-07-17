const path = require("path");
const express = require("express");
const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

app.get("", function (req, res) {
  res.render("index", {
    title: "Weather",
    name: "Allen",
  });
});

app.get("/about", function (req, res) {
  res.render("about", {
    title: "About Me",
    name: "Allen",
  });
});

app.get("/help", function (req, res) {
  res.render("help", {
    helpText: "This is some helpful text!",
  });
});

app.get("/weather", function (req, res) {
  res.send({
    forecast: "Partly Cloudy",
    location: "Thailand",
  });
});

app.listen(3000, function () {
  console.log("Server has started on port 3000");
});
