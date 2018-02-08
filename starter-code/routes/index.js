var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post((req, res, next) => {
  console.log(req.body);
  const newBeach = new Beach({
    name: req.body.name,
    flag: req.body.flag
  });
});

module.exports = router;