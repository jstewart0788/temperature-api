const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const api = require('./routes');
//DB Conenction
mongoose.connect(
    `mongodb://${process.env.MONGO_USER_NAME}:${
      process.env.MONGO_PASSWORD
    }@ds333248.mlab.com:33248/heroku_3vcm7bjb`,
    { useNewUrlParser: true }
  );

//Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Initialize API Routes
app.use('/api', api)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err);
});

/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT || "3001";
app.listen(port, () => console.log(`Server running on ${port}!`));

