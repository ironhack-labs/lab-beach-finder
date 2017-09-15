//
// var map;
//      function initMap() {
//        map = new google.maps.Map(document.getElementById('map'), {
//          center: {lat: -34.397, lng: 150.644},
//          zoom: 8
//        });
//      }
//   initMap();
function startMap(){
const center = {
  lat: 41.39,
  lng: 2.19
}

const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: center
})

var input = document.getElementById('autocomplete');
var autocomplete = new google.maps.places.Autocomplete(input);

// let markers = []
// myPlace.forEach(place => {
//   let position = {
//     lat: place.location
//   }
// })
}

// var defaultBounds = new google.maps.LatLngBounds(
//   new google.maps.LatLng(-33.8902, 151.1759),
//   new google.maps.LatLng(-33.8474, 151.2631));

// var input = document.getElementById('autocomplete');
// var options = {
//   bounds: defaultBounds,
//   types: ['beach']
// };
// var options ={}
//
//  var autocomplete = new google.maps.places.Autocomplete(input, options);
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}

startMap();
