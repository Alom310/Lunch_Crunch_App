const db = require('./models');
const moment = require('moment');

//log out current date to show if moment.js is connected
let now = moment();
let today = now.format("YYYY MM DD");
let yesterday = now.subtract(1, 'days').format("YYYY MM DD");
console.log(now, today, yesterday);

const dummyUser = {
    username: `username`,
    password: `password`,
    email: `email@gmail.com`,
    name: `User`,
    budget: 100,
    image: '',
    meals: []
}


const dummyMeals =
[
    {
        name: 'happy meal',
        date: moment().format("YYYY MM DD"),
        Price: 10,
        location: 'McDonalds',
        image: ''
    },
    {
        name: 'salad',
        date: moment().subtract(1, 'days').format("YYYY MM DD"),
        Price: 11,
        location: 'Chipotle',
        image: ''
    },
    {
        name: 'packed lunch',
        date: moment().subtract(2, 'days').format("YYYY MM DD"),
        Price: 0,
        location: 'n/a',
        image: ''
    },
    {
        name: 'happy meal',
        date: moment().subtract(3, 'days').format("YYYY MM DD"),
        Price: 10,
        location: 'McDonalds',
        image: ''
    },
    {
        name: 'Katsu Sushi Bento',
        date: moment().subtract(4, 'days').format("YYYY MM DD"),
        Price: 13,
        location: 'Tokyo Express',
        image: ''
    },
    {
        name: 'Cheeseburger Mini-Meal',
        date: moment().subtract(5, 'days').format("YYYY MM DD"),
        Price: 4,
        location: 'McDonalds',
        image: ''
    },
    {
        name: `Chick'n Soup`,
        date: moment().subtract(6, 'days').format("YYYY MM DD"),
        Price: 9,
        location: 'Ladle & Leaf',
        image: ''
    }
];

//reset seed data
db.Meal.deleteMany({}, (err) => {
    if (err) return console.log(err);
    console.log('removed all meals!');
});

db.User.deleteMany({}, (err) => {
    if (err) return console.log(err);
    console.log('removed all users!');

    
    // make a dummyUser
    db.User.create(dummyUser, (err,newUser) => {
        if (err) return console.log(err);
        
        //embedding dummyMeals
        dummyMeals.forEach( meal => {
            newUser.meals.push(meal);
            db.Meal.create(meal, (err, newMeal) => {
                if (err) return console.log(err);
            })
        })
        newUser.save();
        console.log(newUser);
    })
});
