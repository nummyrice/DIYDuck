const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const questionRouter = require('./routes/question')
const categoryRouter = require('./routes/categories')
const commentRouter = require('./routes/comments');
const answersRouter = require('./routes/answers');
const { restoreUser, requireAuth } = require('./auth');



const { sessionSecret } = require('./config');
// const { like } = require('sequelize/types/lib/operators');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, 'public')));


// view engine setup
app.set('view engine', 'pug');



// set up session middleware
const store = new SequelizeStore({ db: sequelize });


app.use(
  session({
    name: 'diy-duck.sid',
    secret: sessionSecret,
    store,
    saveUninitialized: false,
    resave: false,
  })
  );



  // create Session table if it doesn't already exist
  store.sync();


app.use(restoreUser);
app.use('/', indexRouter);
app.use(usersRouter);
app.use('/questions', questionRouter);
app.use(categoryRouter);
app.use(commentRouter);
app.use(answersRouter);

// catch 404 and forward to error handler
app.use(errorHandler = (req,res,next) => {
  const err = new Error()
  err.message = "The requests page couldn't be found"
  err.status = 404
  return next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  if(err.status === 404){
    res.render('404Page')
  }
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
