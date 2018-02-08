$(document).ready(function(){
  const florida = {
    lat: 25.805066, 
    lng: -80.122720
  };
//IzaSyBrAAqnQXzz9Vf9rVVtpKon6G4M3HmkcRw API GOOGLE PLACES KEY
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: florida
  });

  const autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById('autocomplete')));

  const places = new google.maps.places.PlacesService(map);

  function onPlaceChanged(){

    let place = autocomplete.getPlace();

    let location = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    };

    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
    map.setCenter(location);
  }

  //autocomplete.addListener('place_changed', onPlaceChanged);
  $("#searchPlace").on('click', onPlaceChanged);

});
