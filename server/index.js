const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

/* ----- Import Routes ----- */
const getCategory = require('./routes/api/category/getCategory');

const app = express();

/* ----- Port ----- */
const port = process.env.PORT || 4000;

/* ----- Middlewares ----- */
const middleware = [
  morgan('dev'),
  helmet(),
  cors(),
  express.urlencoded({ extended: true }),
  express.json()
];
app.use(middleware);

/* ----- Routes ----- */
app.use('/', getCategory);

/* ----- Listen ----- */
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
