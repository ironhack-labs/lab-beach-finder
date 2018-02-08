function startMap() {
  var mainBeach = {
    lat: 36.532526,
    lng: -6.306595
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: mainBeach
  });
  var input = document.getElementById("pac-input");
  var autocomplete = new google.maps.places.Autocomplete(input);
var marker = new google.maps.Marker({
  map: map,
  anchorPoint: new google.maps.Point(0, -29)
});

autocomplete.addListener("place_changed", function() {
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
    map.setZoom(17); // Why 17? Because it looks good.
  }
  marker.setIcon({
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(35, 35)
  });
  marker.setPosition(place.geometry.location);
  marker.setVisible(true);

  var address = "";
  if (place.address_components) {
    address = [
      (place.address_components[0] && place.address_components[0].short_name) ||
        "",
      (place.address_components[1] && place.address_components[1].short_name) ||
        "",
      (place.address_components[2] && place.address_components[2].short_name) ||
        ""
    ].join(" ");
  }
});
}


