var express = require('express');
var router = express.Router();

const Beach = require('../models/Beach');

/* GET home page. */
router.get('/', function(req, res, next) {
  Beach.find((error, beaches) => {
    if (error) {
      next(error);
    } else {
      res.render('index', { beaches, beach: null });
    }
  })
});

router.post("/new", function(req, res, next) {
  Beach.findOne({name:req.body.name}, (err, beach) => {
    console.log(beach)
    if (beach!=undefined) {
      beach.flag=req.body.flag,
      beach.save((error) => {
        if (error) {
          next(error);
        } else {
          res.redirect('/');
        }
      })
    } else {
      let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
        };
    
        const newBeach = {
          name:        req.body.name,
          flag: req.body.flag,
          location:    location
        };
    
        const beachNu = new Beach(newBeach);
    
        beachNu.save((error) => {
          if (error) {
            next(error);
          } else {
            res.redirect('/');
          }
        })
    }
  })
});

router.get("/:id", function(req, res, next){
  Beach.find((error, beaches) => {
    if (error) {
      next(error);
    } else {
      Beach.findOne({_id:req.params.id}, (err, beach) => {
        if (err) {
          next(err);
        } else {
          res.render('index', { beaches, beach });
        }
      })
    }
  })
  
})

module.exports = router;
