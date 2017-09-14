const express        = require("express");
const beach         = express.Router();
const Beach          = require("../models/beach");

beach.get('/', (req, res, next) => {
  Beach.find({}, (err, beach) => {
   
    if (err) {return next(err);}
    res.render('beaches', {beach});
  });
});


beach.post('/save', (req, res, next) => {
  console.log('saving');

  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const new = new Place({
    name: req.body.name,
    category: req.body.category,
    location: location
  });

  newPlace.save((err) => {
    if (err) {
      res.render("places", { message: "Something went wrong" });
    } else {
      res.redirect("/places");
    }
  });

});

module.exports = places;