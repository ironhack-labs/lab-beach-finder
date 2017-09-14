var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  var input = req.body.search
  console.log(input)
  res.redirect('/');
})

module.exports = router;
