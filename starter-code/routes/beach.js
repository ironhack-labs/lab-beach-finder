var express = require('express');
var router = express.Router();
const Beach = require('../models/Beach');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/', (req, res) => {
  Beach.find({}, (error, places) => {
    if(error) console.log(error);
    res.render('index', {places:places});
  });
});
router.post('/new', (req, res) => {
  let location = {
    type: 'Point',
    enum : [req.body.long, req.body.lat]
  };
  const newPlace = Beach({
    name: req.body.name,
    flag: req.body.flag,

    localType: location,
  });
  newPlace.save((error) => {
    (error)? console.log(error):res.redirect('/');
  });
})
module.exports = router;
