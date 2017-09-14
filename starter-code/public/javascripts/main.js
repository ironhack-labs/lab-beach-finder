function initialize() {
  var mapOptions = {
    center: {lat: 42.75873, lng: -9.075063},
    zoom: 13,
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

  var geoObject= "";
  autocomplete.addListener( 'place_changed', function() {
    var place = autocomplete.getPlace();
    Name = place;
    console.log(Name);

    if (!place.geometry.location) {
       window.alert("No details available for input: '" + place.name + "'");
      return;
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
    marker.setPlace({
    placeId: place.place_id,
    location: place.geometry.location
  });
  });

  $(".flag").click(function(event){
  var color = ($(this).attr("name"));
  var newBeach = {
    beachName: geoObject.name,
    flag: color
  };
  console.log(newBeach);
  });
}

window.onload = function(){
  initialize();
};
