var express = require('express');
var router = express.Router();
var Beach = require('../models/Beach');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/save',function(req, res, next) {
  var beach = new Beach({
    name : req.body.name,
    flag : req.body.flag
  });
    beach.save().then(() => red.redirect("/"));
});

module.exports = router;
