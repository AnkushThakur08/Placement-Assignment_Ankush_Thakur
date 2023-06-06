const Post = require("../models/posts");
const createPost = async (req, res) => {
  try {
    const newPost = await Post.create({ ...req.body });
    return res.status(201).json({
      status: "success",
      data: newPost,
      message: "successfully created a new post",
      error: "",
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      data: "",
      error: error,
      message: "couldn't create a new post",
    });
  }
};

const GetPost = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({
      status: 200,
      data: posts,
      message: "successfully fetched 20 posts",
      error: "",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: "",
      message: "Couldn't fetch the posts",
      error: error,
    });
  }
};

module.exports = {
  createPost,
  GetPost,
};
