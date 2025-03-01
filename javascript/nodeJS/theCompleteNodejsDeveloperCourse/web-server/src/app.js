const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlerbars engine and views location
app.set("views", viewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

// Setup static directory to serve
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
    title: "Help",
    name: "Allen Lin",
  });
});

app.get("/weather", function (req, res) {
  res.send({
    forecast: "Partly Cloudy",
    location: "Thailand",
  });
});

app.get("/help/*", function (req, res) {
  res.render("help404", {
    title: "404",
    errorMessage: "Help article not found.",
    name: "Allen",
  });
});

app.get("*", function (req, res) {
  res.render("404", {
    title: "404",
    errorMessage: "Page not found",
    name: "Allen",
  });
});

app.listen(3000, function () {
  console.log("Server has started on port 3000");
});
