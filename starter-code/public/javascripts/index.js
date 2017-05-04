/*jshint esversion: 6*/

function getLocation() {
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
}
function startMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.5, lng: -3.7},
    zoom: 6
  });
  var input = /** @type {!HTMLInputElement} */(
      document.getElementById('pac-input'));

  var types = document.getElementById('type-selector');
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

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
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
    marker.setIcon(/** @type {google.maps.Icon} */({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);
  });

  autocomplete.setTypes(['geocode']);
  
}






function createMarker (latitude, longitude, objMap, sTitle){
  console.log(latitude + ", " + longitude+ ", " + objMap.toString() + ", " + sTitle);
  var marker= new google.maps.Marker({position: {lat:latitude, lng:longitude}, map:objMap, title:sTitle});
  return marker;
}
