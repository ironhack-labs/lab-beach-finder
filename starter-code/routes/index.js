var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});



// router.post('/search', (req, res, next) => {
//   res.render('index');
// });

// router.post('/search', (req, res, next) => {
//   const beachInfo = {
//   name: req.body.name,
//   flag: req.body.flag
//   };
//   beachInfo.save((err) => {
//     if (err) {
//       next(err);
//     }
//     else {
//     res.redirect('index');
//
//     }
//   });
// });




module.exports = router;
