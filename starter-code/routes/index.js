var express = require('express');
var router = express.Router();
const Beach = require('../models/beaches');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res, next) => {
  // Get Params from POST
  console.log("this works!");

  var input = document.getElementById('searchTextField');
  var autocomplete = new google.maps.places.Autocomplete(input);
  var result = autocomplete.getPlace();

  console.log(result);

  // $.ajax({
  //   // url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-${lat},${lng}&radius=500&keyword=${searchTerm}&key=AIzaSyBec4hE7ufbNyW5QlI7vrcQQr0pe5_lkdg`,
  //   method: GET,
  //   success: function (response) {
  //   //The callback function that will be executed if the request is completed succesfully
  //   //This function will have a parameter with the server response.
  //     let location = {
  //       type: 'Point',
  //       coordinates: [req.body.longitude, req.body.latitude]
  //     };
  //
  //     // Create a new Place with location
  //     const newBeach = {
  //       name:        req.body.name,
  //       description: req.body.description,
  //       type:        req.body.type,
  //       location:    location,
  //     };
  //
  //     const beach = new Beach(newBeach);
  //
  //     // Save the restaurant to the Database
  //     beach.save((error) => {
  //       if (error) { console.log(error) }
  //       else {
  //         res.redirect('/');
  //       }
  //     })
  //   },
  //   error: function (err) {
  //   //The callback function that will be executed if the request fails, whether it was a client or a server error
  //   //It will have a parameter with error that caused the request to fail
  //   },
  // });

});


module.exports = router;
