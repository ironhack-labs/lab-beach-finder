var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/' function (req, res, next) {
  var name = req.body.name;
  var color = req.body.color;
});

module.exports = router;
