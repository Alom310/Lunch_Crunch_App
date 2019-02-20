const express = require('express');
const app = express();
const db = require('./models')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
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

app.get('/dashboard', function dashboard(req, res) {
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

////////////login
  app.get('/api/user/:username/:password', function (req, res) {
    const userId = req.params.username;
    const userPassword = req.params.password;
    db.User.findOne({username: userId, password: userPassword},(err, foundUser) => {
      if(!foundUser) {
        return console.log('!!!!!!!!!!!User not found!!!!!!!!!!!')
      }
        res.json(foundUser);
        console.log('User Found', req.params);
    });
  });



///////////create user
app.post('/api/user', function (req, res) {
  var newUser = new db.User({
    username: req.body.username,
    password: req.body.password,

  })
    newUser.save(function(err, newUser) {
      if (err)
          res.send(err);

      res.json(newUser);
    })
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