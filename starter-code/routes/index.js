var express = require('express');
var router = express.Router();
const Beach = require('../models/beach');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/save', (req, res, next)=> {
    let name = req.body.name;
    let flag = req.body.flag;

    var newBeaches = new Beach({
      name,
      flag
    });

    Beach.findOne({"name": name}, (err, beach)=>{
      if (err) {console.log('error finding beach');}

      if (!beach) {
        newBeaches.save((err)=>{
          if(err){
            console.log("error here");
          }
        });
      } else {
        if (beach){
          Beach.findOneAndUpdate({"name": name}, {$set: {"flag": flag}}, (err)=>{
            if(err){console.log('error updating beach flag');}
          });
        }
      }
    });
  res.redirect('/');
});



module.exports = router;
