const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/01", (req, res) => {
  res.send({
    name: "Menghour!!!!!",
  });
});

app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`);
});
