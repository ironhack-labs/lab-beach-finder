var express = require('express');
var router = express.Router();
const Beach = require('../models/beach');
const mongoose = require('mongoose');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/' , (res,req,next) => {
  const newBeach = new Beach ({
    name : req.body.name,
    flag : req.body.flag
  })
  // router.findOne({ username }, "username", (err, beach) => {
  //   if (beach !== null) {
  //     res.render("passport/signup", { message: "The username already exists" });
  //     return;
  //   }
  //
  //   const salt = bcrypt.genSaltSync(bcryptSalt);
  //   const hashPass = bcrypt.hashSync(password, salt);
  //
  //   newBeach.save((err) => {
  //     if (err) { return next(err)}
  //
  //   });
  // });
});

module.exports = router;
