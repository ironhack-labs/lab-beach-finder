var express = require('express');
var router = express.Router();
var Beach = require("../models/beach");

/* GET home page. */
router.get('/', function(req, res, next) {
  Beach.find((error, beaches) =>{
    if (error) { next(error);
    } else {
      res.render('index', {beaches});
    }
  });
});

router.post("/add-beach", (req, res, next) => {

 let location = {
   type: 'Point',
   coordinates: [req.body.longitude, req.body.latitude]
 };

   const beachInfo = {
     name     : req.body.name,
     flag     : req.body.flag,
     location : location
   };
 const beach = new Beach(beachInfo);

 beach.save((error) => {
   if (error) { console.log(error) }
   else {
     res.redirect('/');
   }
 });
});

router.get('/api/beaches',(req, res, next) => {
  Beach.find((error, beaches) => {
    if (error) { next(error);
    } else {
      res.json(beaches);
    }
  });
});



module.exports = router;
