/** @format */

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");

// config .env
require("dotenv").config();

/* ----- Import Routes ----- */
// const getCategory = require('./routes/api/category/getCategory');
const postRoute = require("./routes/api/postRoute");

const app = express();

/* ----- Port ----- */
const port = process.env.PORT || 4000;

/* ----- Middlewares ----- */
const middleware = [
	morgan("dev"),
	helmet(),
	cors(),
	express.urlencoded({ extended: true }),
	express.json(),
];
app.use(middleware);

/* ----- Routes ----- */
app.use("/api/post/", postRoute);

/* ----- Listen ----- */
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});

// connect to db
let dbParam = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
};
mongoose.connect(process.env.DB_URL, dbParam, () => {
	console.log("Connected to database ");
});
