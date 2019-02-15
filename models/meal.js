const mongoose = require('mongoose');
Schema = mongoose.Schema;

const MealSchema = new Schema({
    text: String,
    date: Date,
    Price: Number
});

const Meal = mongoose.model('Meal', MealSchema);
module.exports = Meal;