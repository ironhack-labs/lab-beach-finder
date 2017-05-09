/*jshint esversion: 6*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newBeach = {
    name: req.body.name,
    location: location
  };

  const beach = new Beach(newBeach);

  beach.save((error) => {
    if(error) {console.log(error);
    } else {
      console.log(location);
      res.redirect('/');
    }
  });
});

module.exports = router;
