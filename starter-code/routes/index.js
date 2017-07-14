var express = require('express');
var router = express.Router();
var Beach = require ('../models/Beach');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/beach', function(req, res, next) {
  var name = req.body.name;
  var flag = req.body.flag;

  const beach = new Beach({ name, flag });

  Beach.findOne({name:name, function(err, i){
    if(err){return next(err);
    }else{
      if(i){Beach.findOneAndUpdate({name: name}, {flag:flag}, function(err, i){
        if(err){return next(err);
        }else{
          beach.save((e) => {
            if(e) {return next(e);}
          })
        }
      })}
    }
  }});

});

module.exports = router;
