const mongoose = require("mongoose");
const Meal = require("./meal");
const User = require("./user");

mongoose.connect("mongodb://127.0.0.1/lunchcrunch", {useNewUrlParser: true});

exports.Meal = Meal;
exports.User = User;