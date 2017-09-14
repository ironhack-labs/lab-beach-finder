const express = require('express');
const router = express.Router();
const Beach = require('../models/beach');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.post('/save', (req, res, next) => {

  const beachInfo = new Beach ({
  name: req.body.name,
  flag: req.body.flag
  });

  beachInfo.save((err) => {
    if (err) {
      next(err);
    }
    else {
    res.redirect('/');
  }
  });
});

router.get('/', (req, res, next) =>{
  Beach.find({}, (err, beaches) => {
    if (err) { next(err); }
    else {
      res.render('index', {beaches}); }
  });
});




module.exports = router;
