// to import the "express" library
var express = require('express');
var router = express.Router();      // create a "router" instance

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
