const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let autoIncrement = require("mongoose-auto-increment");

// Schema definition
const UserSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	confirmPassword: {
		type: String,
		required: true,
		select:false,
	},
});


autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, "user");
module.exports = mongoose.model("user", UserSchema);
