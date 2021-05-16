const express = require("express");
const authRouter = express.Router({ mergeParams: true });

// import post route
const postRoute = require("./postRoute");
// import controller;
const UserApiController = require("../../controllers/UserApiController");
const PostApiController = require("../../controllers/PostApiController");
const AuthApiController = require("../../controllers/AuthApiController");

// import validator
const {
	registerValidate,
	loginValidate,
} = require("../../validators/FormDataValidator");

authRouter.post("/", registerValidate, AuthApiController.REGISTER);
authRouter.post("/login", loginValidate, AuthApiController.LOGIN);
authRouter.get("/logout", AuthApiController.LOGOUT);

authRouter.use("/:userId/post/", postRoute);
module.exports = authRouter;
