//Imports
const express = require("express");
const path = require("path");
const gifs = require("./gifs.json");
//absolute path
const app = express();
const pathToDistFolder = path.join(__dirname, "..", "vite-project", "dist");

//middleware controller, sends static pages to frontend user requests
const staticShock = express.static(pathToDistFolder);

//middleware for request method, url, and time

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}:${req.originalUrl}-${time}`);
  next();
};

//controllers html
const serveIndex = (req, res, next) => res.sendFile(__dirname + "/index.html");

//response constrollers
const serveData = (req, res, next) => res.send(gifs);
const serveHello = (req, res, next) => {
  const name = req.query.name || "stranger";
  res.send(`hello ${name}`);
};
//
app.use(staticShock);
app.use(logRoutes);
app.get("/", serveIndex);
app.get("/api/data", serveData);
app.get("/api/hello", serveHello);

//port
const port = 3000;
app.listen(port, () => {
  console.log(`Check my server out on http://localhost:${port}`);
});
