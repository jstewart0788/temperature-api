const mongoose = require("mongoose");
const Temp = require("../models/temp");
require("./node_modules/dotenv").config();

mongoose.connect(
    `mongodb://${process.env.MONGO_USER_NAME}:${
    process.env.MONGO_PASSWORD
    }@ds333248.mlab.com:33248/heroku_3vcm7bjb`,
    { useNewUrlParser: true }
);

Temp.create(
    {
        temperature: 0,
        fan: false,
        turnOn: 85,
    },
    function (err, temp) {
        if (err) console.log("Error", err);
        else console.log("Success", temp);
    }
);
