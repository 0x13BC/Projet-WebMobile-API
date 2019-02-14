let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let mongoose = require('mongoose');
let bodyParser = require('body-parser');

//let usersRoutes = require('./routes/users-routes');
//let eventsRoutes = require('./routes/events-routes');
//let authController = require('./controllers/authentication-controller');
let cors = require('cors')

let auth = require('./utils/validate-token');

let app = express();
app.use(cors());

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let newsRouter = require('./routes/news-routes');


const confMongo = require('./configurations/config-mongo');
// mongoose.Promise = global.Promise; V4
mongoose.connect(confMongo.database, { useNewUrlParser: true });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//app.use('/', indexRouter);
app.route('/').get((req, resp) => {
  resp.json('WEB API');
});
app.use('/users', usersRouter);
app.use('/api/news',newsRouter);

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

//app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;
