const db = require('./models');

const dummyUser = {
    name: 'User',
    budget: 100,
    streak: 2,
    image: '',
    meals: []
}

let now = Date.now();
const dummyMeal = {
    name: 'happy meal',
    date: now,
    Price: 10,
    location: 'McDonalds',
    image: ''
}

//make a dummyUser
// db.User.create(dummyUser, (err,newUser) => {
//     if (err) return console.log(err);
//     console.log(newUser);
// });

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

//display dummyUser with dummyMeal
db.User.find({}, (err, users) => {
    if (err) return console.log(err);

    console.log(JSON.stringify(users));
})