var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  const name = req.body.name;
  const flag = req.body.color;

  let newBeach = new Beach({
    name,
    flag,
  });

  Beach.findOne({'name':name}, (err,beach)=>{
    if(beach != null) {
      Beach.findByIdAndUpdate(beach._id, newBeach, (err, beach) => {
        res.redirect('/');
      })
    } else {
      newBeach.save().then(() => {
        res.redirect('/');
      });
    }
  })


});


module.exports = router;