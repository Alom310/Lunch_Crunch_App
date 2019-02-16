const mongoose = require('mongoose');
Schema = mongoose.Schema;

const MealSchema = new Schema({
    name: String,
    date: Date,
    Price: Number,
    location: String,
    image: String
});

const Meal = mongoose.model('Meal', MealSchema);
module.exports = Meal;