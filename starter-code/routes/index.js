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
  flag: 'red'
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




module.exports = router;
