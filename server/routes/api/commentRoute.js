const express = require("express");
const commentRouter = express.Router({mergeParams:true});

// import controller;
const CommentApiController = require("../../controllers/CommentApiController");

// get all posts
commentRouter.get("/", CommentApiController.INDEX);

// Save post to database
commentRouter.post("/", CommentApiController.STORE);

// update post to database
commentRouter.delete("/:commentId", CommentApiController.DELETE);

// update post to database
commentRouter.patch("/:commentId", CommentApiController.UPDATE);

module.exports = commentRouter;
