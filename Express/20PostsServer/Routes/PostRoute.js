const express = require("express");
const router = express.Router();
const postController = require("../controllers/postsController");

router.post("/", postController.createPost);

router.get("/", postController.GetPost);

module.exports = router;
