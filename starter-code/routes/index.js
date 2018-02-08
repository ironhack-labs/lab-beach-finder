var express = require("express");
var router = express.Router();
const Beach = require("../models/beach");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Google Places" });
});

router.get("/beaches", (req, err) => {
  Beach.find({}, (res, err) => {
    if (err) throw err;
    res.render("show");
  });
});

module.exports = router;
