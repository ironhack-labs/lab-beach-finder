
$(document).ready(function(){

  const sol = {
    lat: 40.417080,
    lng: -3.703612
  };

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: sol
  });

var input = document.getElementById('toSearch');

var autocomplete = new google.maps.places.Autocomplete(input);

var marker = {map: map};

autocomplete.addListener('place_changed', function() {
   var place = autocomplete.getPlace();
   globalName = place;
   if (!place.geometry.location){
     return;
   } else {
     map.setCenter(place.geometry.location);
     mpa.setZoom(15);
   }
  marker.setPlace({
  placeId: place.place_id,
  location: place.geometry.location
});
marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
marker.setVisible(true);
});


















var defaultBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(40, -3.8),
  new google.maps.LatLng(41, -3.4));



var options = {
  bounds: defaultBounds,
  //types: ['establishment']
};

var autocomplete = new google.maps.places.Autocomplete(input, options);

autocomplete.addListener( 'place_changed', function() {
   var place = autocomplete.getPlace();
   globalName=place;



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







/*
var myMarker = new google.maps.Marker({
  position: {
  	lat: 40.4177381,
  	lng: -3.700471916
  },
  map: map,
  title: "I'm here"
});

if (navigator.geolocation) {

  // Get current position
  // The permissions dialog will popup
  navigator.geolocation.getCurrentPosition(function (position) {
    // Create an object to match
    // google's Lat-Lng object format
    const center = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    console.log('center: ', center);
    // User granted permission
    // Center the map in the position we got
  }, function () {
    // If something else goes wrong
    console.log('Error in the geolocation service.');
  });
} else {
  // Browser says: Nah! I do not support this.
  console.log('Browser does not support geolocation.');
}
*/
