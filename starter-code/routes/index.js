var express = require('express');
var router = express.Router();
const Beach = require('../models/beach');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beach finder' });
});

router.post('/create', (req, res, next) => {
  console.log('Hola Anthony');
  const placeName = req.body.placeName;
    const flagColor = req.body.color;

    const newBeach = new Beach({name: placeName, flag: flagColor});

    Beach.findOne({name: placeName}, function(error, doc) {
      if (error) return next(error);
      if (doc) {
        if (doc.flag === flagColor) {
          return next(null);
        }
        Beach.updateOne({name: placeName}, {flag: flagColor}, function (error, doc) {
          if (error) return next(error);
          return next(null);
        });
      }
      newBeach.save(function(error){
        if (error) return next(error);
        return next(null);
      });
    });
});

module.exports = router;
