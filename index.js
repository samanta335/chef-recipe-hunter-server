const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.port || 5000;

const allData = require("./data.json");
const newData = require("./ExtraData.json");

app.get("/", (req, res) => {
  res.send("project running");
});

app.get("/data", (req, res) => {
  res.send(allData);
});
app.get("/data/:id", (req, res) => {
  const id = req.params.id;
  const detail = allData.find((recipe) => recipe.id == id);
  res.send(detail);
});
app.get("/ExtraData", (req, res) => {
  res.send(newData);
});

app.listen(port, () => {
  console.log(`api running:${port}`);
});
