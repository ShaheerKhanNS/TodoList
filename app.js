const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const express = require("express");
const path = require("path");

const port = process.env.PORT || 3000;

const app = express();

app.use((req, res) => {
  res.sendFile(path.join(__dirname, `public/${req.url}`));
});

app.listen(port, () => {
  console.log(`App runnig on ${port}`);
});
