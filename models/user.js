const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Meal = require('./meal');

const UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    name: String,
    budget: Number,
    streak: Number,
    image: String,
    // meals: [Meal.schema]
});

const User = mongoose.model('User', UserSchema);
module.exports = User;