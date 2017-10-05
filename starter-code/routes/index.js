var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beach Finder' });
});

router.post('/', (req, res, next) => {
    const newBeach = new Beach({
      name: req.body.name,
      flag: req.body.flag,
    });
    newBeach.save();
});

// To get name of place: place.formatted_address

module.exports = router;
