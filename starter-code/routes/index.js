var express = require('express');
var router = express.Router();

const Beach = require('../models/Beach');

/* GET home page. */
router.get('/', function(req, res, next) {
  Beach.find((error, beaches) => {
    if (error) {
      next(error);
    } else {
      res.render('index', { beaches });
    }
  })
});

router.post("/new", function(req, res, next) {
  let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	  };

    const newBeach = {
      name:        req.body.name,
      flag: req.body.flag,
      location:    location
    };

  	const beach = new Beach(newBeach);

  	beach.save((error) => {
  		if (error) {
  			next(error);
  		} else {
  			res.redirect('/');
  		}
  	})
});

module.exports = router;
