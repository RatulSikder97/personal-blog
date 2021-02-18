const { body } = require("express-validator");
const User = require("../models/User");

// register validation

exports.registerValidate = [
	body("name").not().isEmpty().withMessage("Name Required"),
	body("email")
		.isEmail()
		.withMessage("Please enter a valid email.")
		.custom((value, { req }) => {
			return User.findOne({ email: value }).then((userDoc) => {
				if (userDoc) {
					return Promise.reject(
						"E-Mail exists already, please pick a different one.",
					);
				}
			});
		}),
	body("password").not().isEmpty().withMessage("Password Required"),
	body(
		"confirmPassword",
		"Confirm Password field must have the same value as the password field",
	).custom((value, { req }) => value === req.body.password),
];

// login data validation
exports.loginValidate = [
	body("email").isEmail().withMessage("Please enter a valid email address."),

	body("password", "Password has to be valid.")
		.isLength({ min: 5 })
		.isAlphanumeric(),
];
