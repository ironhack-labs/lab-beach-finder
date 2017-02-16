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
  autocomplete.addListener( 'place_changed', function() {
    var place = autocomplete.getPlace();
    globalName=place;
    if (!place.geometry.location) {
      return;
    }
    else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
    //it calls the marker already created and moves it.
    marker.setPlace({
      placeId: place.place_id,
      location: place.geometry.location
    });
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
    marker.setVisible(true);
  });
////
$(".round").click(function(e){
  e.preventDefault();
  var flagColor=($(this).attr("name"));
  // console.log(flagColor);
  var newBeach ={
    beachName: globalName.name,
    flag: flagColor
  };
   console.log(globalName.name);
  console.log(newBeach);
/////////////////////////////
$.ajax({
  url: "/beach",
  method: "POST",
  data:{beachName: globalName.name,flag: flagColor},
  success: function (response) {
    console.log(response);
  },
  error: function (err) {
    console.log(err);
  },
});

///////////////////
});

}
window.onload = function(){initialize();};
