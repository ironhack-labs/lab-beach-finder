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

  var autocomplete = new google.maps.places.Autocomplete(input);

  var geoObject= "";

  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    geoObject = place;
    console.log(geoObject);

    if(!place.geometry.location){
       window.alert("No details available for input: '" + place.name + "'");
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

  $.ajax({
  url: "/beach",
  type: "POST",
  data:{
    newBeach
  },
  success: function (response) {
    console.log(response);
  },
  error: function (err) {
    console.log(err);
    }
  });
  console.log(newBeach);
  });

}



window.onload = function(){

  initialize();

  var flagRating = Array.from(document.querySelectorAll('.flag'));
    flagRating.forEach(function(button){
       button.addEventListener('click', function(event){
          event.preventDefault();

          let input = document.getElementById("pac-input").value;
          let color = this.name;

          $.ajax({
            type:    'POST',
            url:     '/',
            data:    {name: input, color},
         });

         location.reload();

       });
    });

};
