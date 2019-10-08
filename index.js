const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();

//Middleware
app
  .use(logger("dev"))
  .use(bodyParser.json({limit: '50mb'}))
  .use(bodyParser.urlencoded({limit: '50mb', extended: true}))

//Initialize API Routes
app.post('/temperature', (req, res) => res.send('temperature is:', req.body.temp))


// error handler
app.use(function(err, req, res, next) {
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

