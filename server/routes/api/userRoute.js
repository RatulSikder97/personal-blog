const express = require("express");
const userRouter = express.Router({ mergeParams: true });

// import post route
const postRoute = require("./postRoute");
// import controller;
const UserApiController = require("../../controllers/UserApiController");
const PostApiController = require("../../controllers/PostApiController");
const AuthApiController = require("../../controllers/AuthApiController");

userRouter.post("/", AuthApiController.REGISTER);
userRouter.post("/", AuthApiController.LOGIN);
userRouter.get("/:userId", UserApiController.SHOW);

userRouter.use("/:userId/post/", postRoute);
module.exports = userRouter;
