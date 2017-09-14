function initialize() {
  var globalName="";
  var mapOptions = {
    center: {lat: 42.75873, lng: -9.075063},
    zoom: 13,
    scrollwheel: false
  };

  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

  var marker = new google.maps.Marker({
       map: map
     });
     
  var input =  document.getElementById('pac-input');

  // Create the autocomplete helper, and associate it with
  // an HTML text input box.
  var autocomplete = new google.maps.places.Autocomplete(input);



/////////////////////////


}
window.onload = function(){
  initialize();
};
