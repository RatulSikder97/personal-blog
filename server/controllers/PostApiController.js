//Models imports
const Post = require("../models/Post");
/**
 * REST Functions
 */

// @route: api/post
//@desc: Get all posts
//Access:
exports.INDEX = async function (req, res) {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (error) {
		res.json({ message: "There is some error happend!!!!!:0)" });
	}
};

// @route: api/post/create
//@desc: view Create Form
//Access:
exports.CREATE = function (req, res) {};

// @route: api/post/
//@desc: Store Post to DB
//Access:
exports.STORE = async function (req, res) {
	console.log(req.body);
	const post = new Post({
		title: req.body.title,
		content: req.body.content,
	});

	try {
		await post.save();
		res.json({ message: "Post created successfully!!!!" });
	} catch (error) {
		res.json({ message: "There is some error happend!!!!!:0)" });
	}
};

// @route: api/post/:id
//@desc: Show a Single post
//Access:
exports.SHOW = async function (req, res) {
	try {
		const post = await Post.findById(req.params.id);
		res.json(post);
	} catch (error) {
		res.json({ message: "There is some error happend!!!!!:0)" });
	}
};

// @route: api/post/:id/edit
//@desc: view Edit Form
//Access:
exports.EDIT = function (req, res) {};

// @route: api/post/:id
//@desc: Update Post
//Access:
exports.UPDATE = async function (req, res) {
	try {
		console.log(req.body.title);
		await Post.findByIdAndUpdate(req.params.id, {
			title: req.body.title,
			content: req.body.content,
		});
		res.json({ message: "Post updated successfully!!!!" });
	} catch (error) {
		res.json({ message: "There is some error happend!!!!!:0)" });
	}
};

// @route: api/post/:id
//@desc: Delete Post
//Access:
exports.DELETE = async function (req, res) {
	try {
		await Post.findByIdAndDelete(req.params.id);
		res.json({ message: "Post deleted successfully!!!!" });
	} catch (error) {
		res.json({ message: "There is some error happend!!!!!:0)" });
	}
};
