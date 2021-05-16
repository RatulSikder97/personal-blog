//Models imports
const Comment = require("../models/Comment");
/**
 * REST Functions
 */

// @route: api/Comment
//@desc: Get all comment
//Access:
exports.INDEX = async function (req, res) {
	try {
        const postId = req.params.postId || "";
        
		const comments = await Comment.find({post_id: postId});
		res.status(200).json(comments);
	} catch (error) {
		res.status(400).json({ message: "There is some error happend!!!!!:0)" });
	}
};

// @route: api/Comment/create
//@desc: view Create Form
//Access:
exports.CREATE = function (req, res) {};

// @route: api/Comment/
//@desc: Store Comment to DB
//Access:
exports.STORE = async function (req, res) {
	console.log(req.params);
	const comment = new Comment({
		user_id: req.body.user_id,
		post_id: req.params.postId,
		content: req.body.content,
	});

	try {
		await comment.save();
		res.status(200).json({ message: "Comment created successfully!!!!" });
	} catch (error) {
		res.status(400).json({ message: "There is some error happend!!!!!:0)", error: error });
	}
};

// @route: api/Comment/:id
//@desc: Update Comment
//Access:
exports.UPDATE = async function (req, res) {
	try {
		let comment = await Comment.updateOne(
			{ _id: req.params.commentId, user_id: req.body.user_id },
			{
				user_id: req.body.user_id,
				content: req.body.content,
				updated_at: Date.now(),
			},
			{ upsert: true },
		);

		res.status(200).json({ message: "Comment updated successfully!!!!" });
	} catch (error) {
		res.status(400).json({ message: "There is some error happend!!!!!:0)" });
	}
};

// @route: api/Comment/:id
//@desc: Delete Comment
//Access:
exports.DELETE = async function (req, res) {
	try {
		await Comment.deleteOne({
			_id: req.params.commentId,
			post_id: req.params.postId,
		});

		res.status(200).json({ message: "Comment deleted successfully!!!!" });
	} catch (error) {
		res.status(400).json({ message: "There is some error happend!!!!!:0)" });
	}
};
