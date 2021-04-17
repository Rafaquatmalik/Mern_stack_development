var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose=require('mongoose');
var session=require('express-session');

var indexRouter = require('./routes/index');
var productRouter= require('./routes/product.routes');
var usersRouter = require('./routes/users');

var app = express();

app.use(session(
  {
  name:'sid',
  secret: 'malik', //this is needed for making a session key
  saveUninitialized: false, //for login sessions set it to false, setting to true means store blank sessions
  resave: false, 
  cookie: {
      expires: 600000 //or use maxAge ( takes in milliseconds value)
    }
  }
)
);

// Database Connection Here
mongoose.connect('mongodb+srv://rafaquatmalik:abcd1234@cluster0.pitfk.mongodb.net/ABCProject?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
  console.log("Connected to the Database");
})
.catch(err=>{
  console.log("Cannot Connect to the Database", err);
  process.exit();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/products',productRouter);
app.use('/users', usersRouter);

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
