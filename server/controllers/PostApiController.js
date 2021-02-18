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
		const userId = req.params.userId || "";
		if (userId != "") {
			const posts = await Post.find({ author_id: userId });
			res.json(posts);
		} else {
			const posts = await Post.find();
			res.json(posts);
		}
	} catch (error) {
		res.status(400).json({ message: "There is some error happend!!!!!:0)" });
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
	const post = new Post({
		title: req.body.title,
		content: req.body.content,
		author_id: req.params.userId,
	});

	try {
		await post.save();
		res.json({ message: "Post created successfully!!!!" });
	} catch (error) {
		res.json({ message: "There is some error happend!!!!!:0)", error: error });
	}
};

// @route: api/post/:id
//@desc: Show a Single post
//Access:
exports.SHOW = async function (req, res) {
	try {
		const userId = req.params.userId || "";
		if (userId != "") {
			const posts = await Post.find({ author_id: userId, _id: req.params.id });
			res.json(posts);
		} else {
			const post = await Post.findById(req.params.id);
			res.json(post);
		}
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
		let post = await Post.updateOne(
			{ _id: req.params.id, author_id: req.params.userId },
			{
				title: req.body.title,
				content: req.body.content,
				updated_at: Date.now(),
			},
			{ upsert: true },
		);

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
		await Post.deleteOne({
			_id: req.params.id,
			author_id: req.params.userId,
		});

		res.json({ message: "Post deleted successfully!!!!" });
	} catch (error) {
		res.json({ message: "There is some error happend!!!!!:0)" });
	}
};
