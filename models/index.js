const mongoose = require("mongoose");
const Meal = require("./meal");
const User = require("./user");

mongoose.connect( process.env.MONGODB_URI || "mongodb://127.0.0.1/lunchcrunch", {useNewUrlParser: true});
// mongoose.connect("mongodb://127.0.0.1/lunchcrunch", {useNewUrlParser: true});

exports.Meal = Meal;
exports.User = User;