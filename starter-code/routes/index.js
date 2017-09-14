var express = require('express');
var router = express.Router();
var Beach = require ('../models/beach');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Beaches' });
});

router.post('/beach', function(req, res, next) {
  var beachName= req.body.beachName;
  var flagColor= req.body.flag;
  console.log(req.body);
});

module.exports = router;
