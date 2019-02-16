const express = require('express');
const bodyParser = require('body-parser');
var db = require('./models')




app.get('/api/user/:id', function (req, res) {
    console.log('Found User', req.params);
    db.User.findOne({_id: req.params.id},(err, data)=>{
      if(err){
        console.log("User Not Found");
      }
      res.json(data);
    })
  });