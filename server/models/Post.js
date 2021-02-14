const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let autoIncrement = require("mongoose-auto-increment");

// Schema definition
const PostSchema = Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	created_at: {
		type: Date,
		default: Date.now(),
	},
	updated_at: {
		type: Date,
		default: Date.now(),
	},
	author_id: {
		type: Number,
		required: true,
	},
});

// model function

autoIncrement.initialize(mongoose.connection);
PostSchema.plugin(autoIncrement.plugin, "Post");
module.exports = mongoose.model("Post", PostSchema);
