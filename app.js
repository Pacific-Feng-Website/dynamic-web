var createError = require('http-errors');     // 用於創建HTTP錯誤對象的module
var express = require('express');             // Express框架的主要module
var path = require('path');                   // Node.js內置的用於處理文件路徑的module
var cookieParser = require('cookie-parser');  // Express 中的 cookie 解析中間件
var logger = require('morgan');               // Express 中的日誌中間件

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// create Express application instance
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));  // set the view folder as "views"
app.set('view engine', 'ejs');                    // set the template engine (樣板引擎)

// 使用中間件 (middleware)
app.use(logger('dev'));                                     // 輸出HTTP請求日誌 (格式為dev)
app.use(express.json());                                    // 解析請求的 JSON 數據
app.use(express.urlencoded({ extended: false }));           // 解析 URL 編碼的請求數據
app.use(cookieParser());                                    // 解析請求中的 cookie
app.use(express.static(path.join(__dirname, 'public')));    // 提供靜態文件的服務

// define the router
app.use('/', indexRouter);
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
