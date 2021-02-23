//Models imports
const User = require("../models/User");
/**
 * REST Functions
 */

// @route: api/post
//@desc: Get all posts
//Access:
exports.INDEX = async function (req, res) {
	console.log(req.params.userId);
};

// @route: api/post/create
//@desc: view Create Form
//Access:
exports.CREATE = function (req, res) {};

// @route: api/post/
//@desc: Store Post to DB
//Access:
exports.STORE = async function (req, res) {};

// @route: api/post/:id
//@desc: Show a Single post
//Access:
exports.SHOW = async function (req, res) {
	try {
	
		const user = await User.findById(req.params.userId);
		res.status(200).json(user);
		
	} catch (error) {
		res.status(400).json({ message: "There is some error happend!!!!!:0)" });
	}
};

// @route: api/post/:id/edit
//@desc: view Edit Form
//Access:
exports.EDIT = function (req, res) {};

// @route: api/post/:id
//@desc: Update Post
//Access:
exports.UPDATE = async function (req, res) {};

// @route: api/post/:id
//@desc: Delete Post
//Access:
exports.DELETE = async function (req, res) {};
