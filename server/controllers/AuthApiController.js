const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//Models imports
const User = require("../models/User");
/**
 * REST Functions
 */

// @route: auth/
//@desc: crate user
//Access:
exports.REGISTER = async function (req, res) {
	const { name, email, password, confirmPassword } = req.body;

	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		res.status(400).send(errors);
		return;
	}

	// password hash
	const salt = await bcrypt.genSalt();
	const hashedPassword = await bcrypt.hash(password, salt);
	const hashedConfirmPassword = await bcrypt.hash(confirmPassword, salt);

	const user = new User({
		name: name,
		email: email,
		password: hashedPassword,
		confirmPassword: hashedConfirmPassword,
	});
	try {
		await user.save();

		// const token = jwt.sign(
		// 	{
		// 		user: name,
		// 	},
		// 	process.env.JWT_SECRET,
		// );

		// res.cookie("token", token, {
		// 	httpOnly: true,
		// });
		res.json({ message: "User Registration successfully!!!!" }).send();
	} catch (error) {
		res.status(500).send({ message: "There is some error happened" });
	}
};

// @route: auth/login
//@desc: Login and set cookies
//Access:
exports.LOGIN = async function (req, res) {
	try {
		const { email, password } = req.body;
		const existUser = await User.findOne({ email: email });
		console.log(existUser.email);
		if (!existUser) {
			return res
				.status(400)
				.send({ message: "There is no user exist with this email" });
		}

		// check password
		const passwordCorrect = await bcrypt.compare(password, existUser.password);

		if (!passwordCorrect) {
			return res.status(401).send({ message: "Password is not correct" });
		}

		// login
		// set token
		const token = jwt.sign(
			{
				user: existUser._id,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "60s" },
		);

		res.cookie("token", token, {
			httpOnly: true,
		});
		res.json({ message: "User Login successfully!!!!" }).send();
	} catch (error) {
		res.status(500).send({ message: "There is some error happened" });
	}
};

// @route: auth/logout
//@desc: Login and set cookies
//Access:
exports.LOGOUT = async function (req, res) {
	res.cookie("token", "", {
		httpOnly: true,
		expires: new Date(0),
	});
	res.json({ message: "User Logout successfully!!!!" }).send();
};
