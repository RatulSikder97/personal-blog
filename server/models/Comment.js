const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let autoIncrement = require("mongoose-auto-increment");

// Schema definition
const CommentSchema = Schema({
	user_id: {
        type: Number,
		required: true,
    },
    post_id: {
		type: Number,
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
	}
});

// model function

autoIncrement.initialize(mongoose.connection);
CommentSchema.plugin(autoIncrement.plugin, "comments");
module.exports = mongoose.model("comments", CommentSchema);
