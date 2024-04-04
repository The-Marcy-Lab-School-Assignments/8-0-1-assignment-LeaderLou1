//Imports
const express = require("express");
const path = require("path");
const gifs = require("./gifs.json");

//absolute path
const app = express();
const pathToDistFolder =
  "/Users/mewtwolou/Development/unit-88/8-0-1-assignment-LeaderLou1/Multilingual/dist";

//middleware controller, sends static pages to frontend user requests
const staticShock = express.static(pathToDistFolder);

//middleware for request method, url, and time

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}:${req.originalUrl}-${time}`);
  next();
};

//controllers html
const serveIndex = (req, res, next) =>
  res.sendFile(path.join(pathToDistFolder, "index.html"));
//response constrollers
const serveData = (req, res, next) => res.send(gifs);
const serveHello = (req, res, next) => {
  const name = req.query.name || "stranger";
  res.send(`hello ${name}`);
};
//
app.use(express.static(pathToDistFolder));
app.get("*", (req, res) => {
  res.sendFile(path.join(pathToDistFolder, "index.html"));
});
app.use(staticShock);
app.use(logRoutes);
app.get("/", serveIndex);
app.get("/api/data", serveData);
app.get("/api/hello", serveHello);

//port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Check my server out on http://localhost:${port}`);
});
