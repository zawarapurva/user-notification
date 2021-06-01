const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const data = require('../invitations (1).json');

app.get("/api", (req, res) => {
  console.log(data)
  res.json({ message: data });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
