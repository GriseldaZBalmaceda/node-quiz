/**
 * Author: Griselda
 * Date: 9/24/2019
 * Description: App.js, creating mongoose connection
 */
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Employee=require('../models/employee')
const Quizes= require ('../models/quiz')
const Summary= require ('../models/summary')
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../dist/nodequiz')));
app.use('/', express.static(path.join(__dirname, '../dist/nodequiz')));

// Global variables
const serverPort = process.env.PORT || 3000;
/************************* Mongoose connection strings go below this line  ***************/
const connString='mongodb+srv://user:newPassword!6@cluster0-yv2fv.mongodb.net/nodeQuiz?retryWrites=true&w=majority'
mongoose.connect(connString, {promiseLibrary: require('bluebird'), useNewUrlParser: true})
        .then(() => console.debug('Connection to the MongoDB instance was successful'))
        .catch((err) => console.debug('MongoDB Error: ' + err.message));
/************************* API routes go below this line ********************/






/**adding a new employee */
app.post('/api/employees',function(req,res,next){
  const employee={
    employeeId:req.body.employeeId,
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    quizes:req.body.quizes
  }

  //creating an employee
Employee.create(employee,function(err,employees){
  if(err){
    console.log(err);
    return next(err);
  }else{
    console.log(employees);
    res.json(employees);
  }
})
})
//get request that accepts id
app.get('/api/employees/:id', function(req, res, next) {
  Employee.findOne({'employeeId': req.params.id}, function(err, employee) {
    if (err) {
      console.log(err);
      return next(err);
    }  else {
      console.log(employee);
      res.json(employee);
    }
  })
});

app.post('/api/summary',function(req,res,next){
  console.log(req)
  const summary={
    employeeId:req.body.employeeId,
    quizId:req.body.quizId,
    quizName:req.body.quizName,
    date:req.body.date,
    score:req.body.score
  }

  //creating an employee
Summary.create(summary,function(err,summary){
  if(err){
    console.log(err);
    return next(err);
  }else{
    res.json(summary);
  }
})
})

app.get('/api/summary',function(req,res,next){
  Summary.find(function(err,summaries){
    if(err){
      return next(err)
    }else{
      console.log('EEEKK'+summaries)
      res.json(summaries)
    }
  })
})
//Quiz get request that accepts id
app.get('/api/quiz/:id', function(req, res, next) {

 Quizes.findOne({'quizId': req.params.id}, function(err, quiz) {
    if (err) {
      console.log(err);
      return next(err);
    }  else {
      console.log(quiz);
      res.json(quiz);
    }
  })
});



http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});
