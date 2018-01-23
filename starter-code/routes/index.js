var express = require('express');
var router = express.Router();
var Beach = require('../models/beach');

/* GET home page. */
router.get('/', function (req, res, next) {
  Beach.find((error, beaches) => {
    if (error) {
      next(error);
    } else {
      res.render('index', {
        beaches
      });
    }
  })
});

router.post('/', function (req, res, next) {
  const newBeach = {
    name: req.body.name,
    flagColor: req.body.color
  };
  const beach = new Beach(newBeach);
  beach.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  })
  console.log(req.body)
});

router.get('/list', function (req, res, next) {;
});

module.exports = router;