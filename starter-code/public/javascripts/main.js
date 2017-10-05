$(document).ready(function() {
  const sol = {
    lat: 40.41708,
    lng: -3.703612
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: sol
  });

  const autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("searchBox")
  );

  var infowindow = new google.maps.InfoWindow();

  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete.addListener("place_changed", function() {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    function setupClickListener(id, types) {
      var radioButton = document.getElementById(id);
      radioButton.addEventListener("click", function() {
        autocomplete.setTypes(types);
      });
    }
  });




});
