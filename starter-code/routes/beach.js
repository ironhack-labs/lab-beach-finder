const express = require("express");
const beach = express.Router();
const Beach = require ('../models/Beach');

beach.get("/", function(req, res, next) {
  res.render("map", { title: "Express" });
});

beach.get("/", function(req, res, next) {
  Beach.find({},(err,places) =>{
    if(err){ console.log(err)}
    res.render('map',{places:places})
  })
});

beach.post("/", function(req, res, next) {
    let location = {
      type: 'Point',
      enum:[req.body.lng,req.body.lat]
    };

    const newBeach = Beach({
      name: req.body.name,
      flag: req.body.flag,
      localType: location
    })

    newBeach.save((err) =>{
      if(err){console.log(err)}
      res.redirect('/')
    })
});




module.exports = beach;