var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  const place = "";
  res.render("index", { place: place });
});

router.post("/", (req, res) => {
  const place = req.body.search ? req.body.search : "";
  console.log(place);
  res.render("index", { place: place });
});

module.exports = router;
