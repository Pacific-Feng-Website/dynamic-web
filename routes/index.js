// to import the "express" library
var express = require('express');
var router = express.Router();      // create a "router" instance

/* get home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Todo page */
// 建立 todos data
const todos = ['first todo', 'second todo', 'third todo']

router.get('/todos', (req, res) => {
  res.render('todos', { todos })  // 尋找名為 todos 的視圖模板文件
})

module.exports = router;
