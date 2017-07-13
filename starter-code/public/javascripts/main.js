$(document).ready(function() {

    const sol = {
      lat: 40.417080,
      lng: -3.703612
    };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: sol
    });

    var markers = [];

    var center = {
      lat: undefined,
      lng: undefined
    };

    var myMarker = new google.maps.Marker({
      position: {
        lat: 41.3977381,
        lng: 2.190471916
      },
      map: map,
      title: "I'm here"
    });

    let searchInput = document.getElementById('autocomplete');
    const places = new google.maps.places.PlacesService(map);
    const search = new google.maps.places.SearchBox(searchInput);

    search.addListener('places_changed', e => {
      console.log(search.getPlaces());
      const location = search.getPlaces()[0].geometry.location;
      console.log(location.lat());
      map.setCenter(location);

    });

});
