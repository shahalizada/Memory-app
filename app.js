const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("The API Server is running fine");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The API server has started on port: ${PORT}`);
});
