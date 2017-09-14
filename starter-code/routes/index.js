var express = require('express');
var router = express.Router();
var Beach = require ('../models/beach');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Beaches' });
});

router.post('/beach', function(req, res, next) {
  var beachName= req.body.beachName;
  var color= req.body.flag;
  console.log(req.body);

  var beach = new Beach({
    beachName: beachName,
    flag: color
  });

  Beach.findOne({beachName: beachName}, function(err, doc){
    if (err) {
      return next(error);
    } else {
      if (doc) {
        Beach.findOneAnddUpdate({beachName: beachName}, {flag: flagColor}, function(err, doc){
          if(err){
            return next(err);
          } else {
            beach.save((err), function(){
              if (err) {
                return next(err);
              } else {
                console.log(beach);
              }
            });
          }
        });
      }
    }
  });

  $.ajax({
  url: "/beach",
  method: "POST",
  data:{
    newBeach
  },
  success: function (response) {
    console.log(response);
  },
  error: function (err) {
    console.log(err);
    }
  });

});

module.exports = router;
