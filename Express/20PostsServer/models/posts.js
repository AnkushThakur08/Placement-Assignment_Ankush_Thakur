const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
      unique: true,
    },
    content: {
      required: true,
      type: String,
      // unique: true,
    },
    author: {
      required: true,
      type: Number,
      // unique: true,
    },
    category: {
      required: true,
      type: String,
      // unique: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Post", postSchema);
