require("dotenv").config();
const express = require("express");
const app = express();

const connectToDatabase = require("./server/database/connect");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("testing");
});

const start = async () => {
  try {
    await connectToDatabase(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Sever listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
