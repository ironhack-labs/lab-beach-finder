var express = require('express');
var router = express.Router();
var Beach = require ('../models/beach');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/beach', function(req, res, next) {
  var nameB= req.body.beachName;
  var flagB= req.body.flag;

  console.log(req.body);
  const beach =new Beach({beachName:nameB,flag:flagB});

  Beach.findOne({"beachName": nameB},function(err,doc){
    if (err) {
      return next(err);
      } else {
        if(doc){
          console.log("REPEATED");
          Beach.findOneAndUpdate({beachName: nameB},{flag:flagB},function(err,doc){
            if (err)
              return next(err);
          });////CHeck
        } else{
          beach.save((error) => {
            if (error) {
              return next(error);
              } else {
                  console.log(beach);
                }
            });
        }
     }
  });
});

module.exports = router;
