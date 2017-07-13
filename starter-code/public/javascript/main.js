function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 40.404301,
      lng: -3.707333
    },
    zoom: 13,
    mapTypeId: 'roadmap'
  });

  const input = document.getElementById('autocomplete');
  const places = new google.maps.places.PlacesService(map);
  const searchBox = new google.maps.places.SearchBox(input);

  searchBox.addListener('places_changed', function() {
    console.log(searchBox.getPlaces());
    var places = searchBox.getPlaces()[0].geometry.location;
    map.setCenter(places);
  });
}

initAutocomplete();
