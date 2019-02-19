const db = require('./models');

const dummyUser = {
    username: `username`,
    password: `password`,
    email: `email@gmail.com`,
    name: `User`,
    budget: 100,
    streak: 2,
    image: '',
    meals: []
}

let now = Date.now();
const dummyMeals =
[
    {
        name: 'happy meal',
        date: now,
        Price: 10,
        location: 'McDonalds',
        image: ''
    },
    {
        name: 'salad',
        date: now,
        Price: 11,
        location: 'Chipotle',
        image: ''
    },
    {
        name: 'packed lunch',
        date: now,
        Price: 0,
        location: 'n/a',
        image: ''
    },
    {
        name: 'happy meal',
        date: now,
        Price: 10,
        location: 'McDonalds',
        image: ''
    },
    {
        name: 'Katsu Sushi Bento',
        date: now,
        Price: 13,
        location: 'Tokyo Express',
        image: ''
    },
    {
        name: 'Cheeseburger Mini-Meal',
        date: now,
        Price: 4,
        location: 'McDonalds',
        image: ''
    },
    {
        name: `Chick'n Soup`,
        date: now,
        Price: 9,
        location: 'Ladle & Leaf',
        image: ''
    }
];

//reset seed data
db.User.deleteMany({}, (err) => {
    console.log('removed all users!');
    if (err) return console.log(err);
    // make a dummyUser
    db.User.create(dummyUser, (err,newUser) => {
        if (err) return console.log(err);
        console.log(newUser);
    });
    //add dummyMeals to dummyUser
 
});



