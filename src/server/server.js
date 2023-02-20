const express = require("express");

const app = express();

const port = 5000;

let records = [
  {
    id: 1,
    recordName: "The Logitech",
    artistName: "Logitech",
    description: "Expensive stuff for no reason",
  },
  {
    id: 2,
    recordName: "Omen jutsu Mouse",
    artistName: "Omen",
    description: "Someone i barely know",
  },
];

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/records", (req, res) => {
  res.send(records);
});

app.listen(port, () => console.log(`Server is runing on port ${port}`));
