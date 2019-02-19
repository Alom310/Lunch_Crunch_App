const express = require('express');
const app = express();
var db = require('./models')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
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

////////////get ONE user
app.get('/api/user/:id', function (req, res) {
    console.log('Found User', req.params);
    db.User.findOne({_id: req.params.id},(err, data)=>{
      if(err){
        console.log("User Not Found");
      }
      res.json(data);
    })
  });

///////////create user
app.post('/api/user', function (req, res) {
  var newUser = new db.User({
    name: req.body.name,
    budget: req.body.budget,
    streak: req.body.streak,
    // image: req.body.image,
    // meals: [Meal.schema]
  })
    newUser.save(function(err) {
      if (err)
          res.send(err);

      res.json({ message: 'User created!' });
    })
  });

///////////delete user
app.delete('/api/user/:id', function (req, res) {
  console.log('User deleted', req.params);
  const userId = req.params.id;
  db.User.findOneAndDelete({_id: userId},(err, deletedBook) => {
      res.json(deletedBook);
});
});








  app.listen(process.env.PORT || 3000, function () {
    console.log('Lunch_Crunch_app is listening!!!!!');
  });