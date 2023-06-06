const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const postRouter = require("./Routes/PostRoute");
const bodyParser = require("body-parser");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected");
  } catch (error) {
    console.log(`error in mongodb connection`);
  }
};

app.use("/", bodyParser.json());

app.use("/api/v1/posts", postRouter);
app.use("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("hello");
});

connectDB();
