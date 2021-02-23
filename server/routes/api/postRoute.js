const express = require("express");
const postRouter = express.Router({mergeParams:true});

// import controller;
const PostApiController = require("../../controllers/PostApiController");

// import dependent routes
const commentRoute = require("./commentRoute");

// get all posts
postRouter.get("/", PostApiController.INDEX);

// get single posts
postRouter.get("/:postId", PostApiController.SHOW);

// Save post to database
postRouter.post("/", PostApiController.STORE);

// update post to database
postRouter.delete("/:postId", PostApiController.DELETE);

// update post to database
postRouter.patch("/:postId", PostApiController.UPDATE);


// comment route
postRouter.use("/:postId/comment/", commentRoute);

module.exports = postRouter;
