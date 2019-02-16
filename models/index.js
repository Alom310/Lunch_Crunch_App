const mongoose = require("mongoose");
const Meal = require("./meal");
const User = require("./user");

mongoose.connect("mongodb://localhost/lunchcrunch", {useNewUrlParser: true});

exports.Meal = Meal;
exports.User = User;