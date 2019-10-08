const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

const app = express();

//Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Initialize API Routes
app.post('/temperature', (req, res) => {
    console.log('TEST', req.body);
    res.json({ msg: `temperature is: ${req.body.temp}` });
})
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

