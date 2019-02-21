const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Meal = require('./meal');

const UserSchema = new Schema({
    username: {type: String, unique:true},
    password: String,
    email: String,
    name: String,
    budget: Number,
    image: String,
    meals: [Meal.schema]
});

const User = mongoose.model('User', UserSchema);
module.exports = User;