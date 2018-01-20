var express = require('express');
var router = express.Router();
var Beach = require('../models/beach');

/* POST flags */
router.post('/', (req, res, next) => {

  const newBeach = {
    name: req.body.name,
    flag: req.body.flag
  };

  const beach = new Beach(newBeach);

  beach.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  });

});

/* GET home page. & flags */
router.get('/', (req, res, next) => {

  if (req.body.name !== undefined) {

    Beach.findOne({"name": req.body.name}, (error, beaches) => {
      if (error) {
        console.error(error);
      } else {
        res.redirect('/');
        console.log('Trouvé : ', beaches.data.flag);
      }
    });
  } else {
    res.render('index');
  }

});



module.exports = router;