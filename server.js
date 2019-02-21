const express = require('express');
const app = express();
const db = require('./models')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/views/dashboard.html');
 });


/////////////get all users
app.get('/api/user', (req,res) => {
  db.User.find({}, (err, allUsers) => {
    if(err){
        return console.log(err);
    }
    res.json(allUsers);
  });
});

///////////Find Users meal by name
app.get('/api/user/:username/meals/:name', (req,res) => {
  const mealName = req.params.name
  db.Meal.findOne({name: mealName}, (err, oneUserMeal) => {
    if(err){
        return console.log(err);
    }
    res.json(oneUserMeal);
  });
});

////////Find all of Users Meals
app.get('/api/user/:username/meals', (req,res) => {
  db.Meal.find({}, (err, allUserMeals) => {
    if(err){
        return console.log(err);
    }
    res.json(allUserMeals);
  });
});


///////Delete User meals
app.delete('/api/user/:username/meals/:id', function (req, res) {
  console.log('User deleted', req.params);
  const mealId = req.params.id;
  db.Meal.findOneAndDelete({_id: mealId},(err, deletedMeal) => {
      res.json(deletedMeal);
  });
});

/////////create User.meal
app.post('/api/user/:username/meals/', (req,res) => {
  
  db.User.findOne({'username': req.params.username}, (err,foundUser) => {
    
    if (err) return console.log(err);

    let newMeal = new db.Meal({
      name: req.body.name,
      date: req.body.date,
      Price: req.body.Price,
      location: req.body.location,
      image: req.body.image,
    });
    
    foundUser.meals.push(newMeal);

    foundUser.save((err, newMeal) => {
      if (err) return console.log(err);
      res.json(newMeal)
    });
  })
});

///////////create user
app.post('/api/user', function (req, res) {
  console.log('Post Requsting Working',req.body)
  var newUser = new db.User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    name: req.body.name,
    budget: req.body.budget,
  })
    newUser.save(function(err, newMeal) {
      if (err)
          res.send(err);
      res.json(newMeal);
    })
  });

////////////login
  app.get('/api/user/:username/:password', function (req, res) {
    const userId = req.params.username;
    const userPassword = req.params.password;
    db.User.findOne({username: userId, password: userPassword},(err, foundUser) => {
      if(!foundUser) {
        return console.log(req.params, '!!!!!!!!!!!User not found!!!!!!!!!!!')
      }
        res.json(foundUser);
        console.log('User Found', req.params);
    });
});

///////////delete user
app.delete('/api/user/:id', function (req, res) {
  console.log('User deleted', req.params);
  const userId = req.params.id;
  db.User.findOneAndDelete({_id: userId},(err, deletedUser) => {
      res.json(deletedUser);
  });
});

/////////update user
app.put('/api/user/:id', function(req,res){
  console.log('User update', req.params);
  console.log(`the body is ${req.body}`);
  const userId = req.params.id;
  db.User.findOneAndUpdate(
    {_id: userId},
    req.body,
    { new: true},
    (err, updatedUser) => {
      if(err) {throw err; }
      res.json(updatedUser);
  });
});






  app.listen(process.env.PORT || 3000, function () {
    console.log('Lunch_Crunch_app is listening!!!!!');
  });