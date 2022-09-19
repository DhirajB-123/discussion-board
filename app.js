require('dotenv').config()
console.log(process.env)
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')

const dbUsername = process.env.MY_DB_USERNAME
const dbPass = process.env.MY_DB_PASSWORD

const connectionURL = `mongodb+srv://${dbUsername}:${dbPass}@cluster0.ggjd4wq.mongodb.net/board?retryWrites=true&w=majority`
mongoose.connect(connectionURL)
  .then((result)=> console.log('connected to db'))
  .catch((err)=>console.log(err))

var indexRouter = require('./routes/index');
var newRouter = require('./routes/new');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}))

app.use('/', indexRouter);
app.use('/new', newRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
