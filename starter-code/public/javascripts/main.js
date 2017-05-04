var map;
// function initMap() {
//   var myLatLng = {lat: -25.363, lng: 131.044};
//
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 7,
//     center: myLatLng
//   });
//
//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: 'Hello World!'
//   });
//   google.maps.event.addDomListener(window, 'load', initialize);
// }
//
// function initialize(map) {
// var input = document.getElementById('searchTextField');
// var autocomplete = new google.maps.places.Autocomplete(input);
// }


function initMap() {
  var markers = [];

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 15
  });
  var input = document.getElementById('searchTextField');

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);
  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });
  autocomplete.addListener('place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    // var latitude = marker.latLng.lat();
    // var longitude = marker.latLng.lng();
    // console.log( latitude + ', ' + longitude );
    // if (!place.geometry) {
    //   // User entered the name of a Place that was not suggested and
    //   // pressed the Enter key, or the Place Details request failed.
    //   window.alert("No details available for input: '" + place.name + "'");
    //   return;
    // }
    // // If the place has a geometry, then present it on a map.
    // if (place.geometry.viewport) {
    //   map.fitBounds(place.geometry.viewport);
    // } else {
    //   map.setCenter(place.geometry.location);
    //   map.setZoom(8);  // Why 17? Because it looks good.
    // }
    // marker.setIcon(/** @type {google.maps.Icon} */({
    //   url: place.icon,
    //   size: new google.maps.Size(71, 71),
    //   origin: new google.maps.Point(0, 0),
    //   anchor: new google.maps.Point(17, 34),
    //   scaledSize: new google.maps.Size(35, 35)
    // }));
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
      console.log(place.formatted_address);
    }
    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);
  });
}
