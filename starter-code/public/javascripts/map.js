// const Beach = require('./models/Beach.js')
// const mongoose = require('mongoose');


function startMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: {
      lat: 40.3923,
      lng: -3.6984
    }
  });
  let markers = [];
  var defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(-33.8902, 151.1759),
    new google.maps.LatLng(-33.8474, 151.2631)
  );
  var input = document.getElementById("searchTextField");
  var options = {
    bounds: defaultBounds,
    types: ["establishment"]
  };
  var searchBox = new google.maps.places.SearchBox(input, {
    bounds: defaultBounds
  });
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", function() {
    var places = searchBox.getPlaces();
    console.log(places);
    if (places.length == 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];
    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        })
      );
      markers.forEach(m => {
        let infowindow = new google.maps.InfoWindow({
          content: $(".flag option:selected").text()
        });
        m.addListener("click", function() {
          infowindow.open(map, m);
            beach = new Beach ({
                name:m.map,
                flag: $(".flag option:selected").text()
            })
        });
      });
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

  autocomplete = new google.maps.places.Autocomplete(input, options);

  //const bounds = new google.maps.LatLngBounds();
  // myPlaces.forEach(p => {
  //         loc ={ lat: p.loc.coordinates[0], lng: p.loc.coordinates[1] }
  //     bounds.extend(loc);
  //     createWindow(map,loc , `<h2>${p.name}</h2><h2>${p.kindOf}</h2>`);
  // });
  // map.fitBounds(bounds);
  // function createWindow(map, pos, content) {
  //     var infowindow = new google.maps.InfoWindow({
  //         content: content
  //     });
  //     var marker = new google.maps.Marker({
  //         position: pos,
  //         map: map,
  //         content: content
  //     });
  //     marker.addListener('click', function () {
  //         infowindow.open(map, marker);
  //     });
  // }
}
