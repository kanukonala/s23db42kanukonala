var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bookRouter = require('./routes/book');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var book = require("./models/book");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/book', bookRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

//We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await book.deleteMany();
let instance1 = new book({book_name:"Revolution 2020",year_published:2011,author:"Chetan Bhagat"});
instance1.save().then( () => {
  console.log('Everything went well');
}).catch( (e) => {
  console.log('There was an error', e.message);
});
}
let instance2 = new
book({book_name:"Wings of fire",year_published :2012,author:"Tui T. Sutherland"});
instance2.save().then( () => {
  console.log('Everything went well');
}).catch( (e) => {
  console.log('There was an error', e.message);
});
let instance3 = new
book({book_name:"Quiet",year_published:2012,author:"Susan Cain"});
instance3.save().then( () => {
  console.log('Everything went well');
}).catch( (e) => {
  console.log('There was an error', e.message);
 });
let reseed = true;
if (reseed) { recreateDB();}



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
