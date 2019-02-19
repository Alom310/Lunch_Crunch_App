const db = require('./models');

const dummyUser = {
    name: 'User',
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
db.User.remove({}, (err,Users) => {
    console.log('removed all users!');
    if (err) return console.log(err);
    // make a dummyUser
    db.User.create(dummyUser, (err,newUser) => {
        if (err) return console.log(err);
        console.log(newUser);
    });
});


// //add dummyMeal to dummyUser
// db.User.findOne({name: "User"}, (err, foundUser) => {
//     if(err) return console.log(err);

//     //make meals array
//     db.Meal.create(dummyMeal, (err, newMeal) => {
//         if(err) return console.log(err);

//         foundUser.meals.push(newMeal);
//         foundUser.save((err, newUser) => {
//             if(err) return console.log(err);
//             console.log(newUser);
//         })
//     })
// })

// //display dummyUser with dummyMeal
// db.User.find({}, (err, users) => {
//     if (err) return console.log(err);

//     console.log(JSON.stringify(users));
// })

