const express = require("express");
const postRouter = express.Router({mergeParams:true});

// import controller;
const PostApiController = require("../../controllers/PostApiController");

// get all posts
postRouter.get("/", PostApiController.INDEX);

// get single posts
postRouter.get("/:id", PostApiController.SHOW);

// Save post to database
postRouter.post("/", PostApiController.STORE);

// update post to database
postRouter.delete("/:id", PostApiController.DELETE);

// update post to database
postRouter.patch("/:id", PostApiController.UPDATE);

module.exports = postRouter;
