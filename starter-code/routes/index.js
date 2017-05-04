var express = require('express');
var router = express.Router();
var Biatch = require('../models/Biatch.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {

  var data = {
    search: req.body.search,
    flags: req.body.flags
  };
  console.log(data);
  res.render('index');
});

module.exports = router;
