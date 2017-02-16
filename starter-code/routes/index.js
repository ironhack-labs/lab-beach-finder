const express = require('express');
const router = express.Router();
const Bitches = require('../model/bitch');
/* GET home page. */
router.get('/', function(req, res, next) {
  Bitches.find((error, bitches) => {
            if (error) {
                next(error);
            } else {
                res.render('index', { bitches });
            }
        })
});

router.post('/', function(req, res, next) {
  const newBitch = {
    name: req.body.name,
    flagColor: req.body.color
  };
  const bitch = new Bitches(newBitch);
  bitch.save((error) => {
         if (error) {
             next(error);
         } else {
             res.redirect('/');
         }
     })
  console.log(req.body)
});

router.get('/list', function(req, res, next) {
  ;});

module.exports = router;
