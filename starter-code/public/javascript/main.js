// main.js
var autocomplete;
var places;
var map;
var markers = [];
var MARKER_PATH = "https://developers.google.com/maps/documentation/javascript/images/marker_green";
function startMap() {
  var ironhackBCN = {
    lat: 41.3977381,
    lng: 2.190471916
  };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: ironhackBCN
  });
  autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */ (document.getElementById("autocomplete")),
    {
      types: ["(cities)"]
    }
  );
  places = new google.maps.places.PlacesService(map);

  autocomplete.addListener("place_changed", onPlaceChanged);
}

// When the user selects a city, get the place details for the city and
// zoom the map in on the city.
function onPlaceChanged() {
  var place = autocomplete.getPlace();
  console.log(place);
  var beachMarker;
  if (place.geometry) {
    map.panTo(place.geometry.location);
    map.setZoom(15);
    clearMarkers();
    // search();
    beachMarker = new google.maps.Marker({
      position: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      },
      animation: google.maps.Animation.DROP,
      map: map,
      title: "Beach"
    });

    markers.push(beachMarker);
  } else {
    document.getElementById("autocomplete").placeholder = "Enter a city";
  }
}

// Search for hotels in the selected city, within the viewport of the map.
function search() {
  var search = {
    bounds: map.getBounds(),
    types: ["lodging"]
  };

  places.nearbySearch(search, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      clearResults();
      clearMarkers();
      // Create a marker for each hotel found, and
      // assign a letter of the alphabetic to each marker icon.
      for (var i = 0; i < results.length; i++) {
        var markerLetter = String.fromCharCode("A".charCodeAt(0) + i % 26);
        var markerIcon = MARKER_PATH + markerLetter + ".png";
        // Use marker animation to drop the icons incrementally on the map.
        markers[i] = new google.maps.Marker({
          position: results[i].geometry.location,
          animation: google.maps.Animation.DROP,
          icon: markerIcon
        });
        // If the user clicks a hotel marker, show the details of that hotel
        // in an info window.
        markers[i].placeResult = results[i];
        google.maps.event.addListener(markers[i], "click", showInfoWindow);
        setTimeout(dropMarker(i), i * 100);
        addResult(results[i], i);
      }
    }
  });
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    if (markers[i]) {
      markers[i].setMap(null);
    }
  }
  markers = [];
}

function dropMarker(i) {
  return function() {
    markers[i].setMap(map);
  };
}

function addResult(result, i) {
  var results = document.getElementById("results");
  var markerLetter = String.fromCharCode("A".charCodeAt(0) + i % 26);
  var markerIcon = MARKER_PATH + markerLetter + ".png";

  var tr = document.createElement("tr");
  tr.style.backgroundColor = i % 2 === 0 ? "#F0F0F0" : "#FFFFFF";
  tr.onclick = function() {
    google.maps.event.trigger(markers[i], "click");
  };

  var iconTd = document.createElement("td");
  var nameTd = document.createElement("td");
  var icon = document.createElement("img");
  icon.src = markerIcon;
  icon.setAttribute("class", "placeIcon");
  icon.setAttribute("className", "placeIcon");
  var name = document.createTextNode(result.name);
  iconTd.appendChild(icon);
  nameTd.appendChild(name);
  tr.appendChild(iconTd);
  tr.appendChild(nameTd);
  results.appendChild(tr);
}

function clearResults() {
  var results = document.getElementById("results");
  while (results.childNodes[0]) {
    results.removeChild(results.childNodes[0]);
  }
}

// Get the place details for a hotel. Show the information in an info window,
// anchored on the marker for the hotel that the user selected.
function showInfoWindow() {
  var marker = this;
  places.getDetails({ placeId: marker.placeResult.place_id }, function(place, status) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      return;
    }
    infoWindow.open(map, marker);
    buildIWContent(place);
  });
}

// function initAutocomplete() {
//   // Create the autocomplete object, restricting the search to geographical
//   // location types.
//   autocomplete = new google.maps.places.Autocomplete(
//     /** @type {!HTMLInputElement} */ (document.getElementById("autocomplete")),
//     { types: ["geocode"] }
//   );

//   // When the user selects an address from the dropdown, populate the address
//   // fields in the form.
//   autocomplete.addListener("place_changed", fillInAddress);
// }

// function fillInAddress() {
//   // Get the place details from the autocomplete object.
//   var place = autocomplete.getPlace();

//   for (var component in componentForm) {
//     document.getElementById(component).value = "";
//     document.getElementById(component).disabled = false;
//   }

//   // Get each component of the address from the place details
//   // and fill the corresponding field on the form.
//   for (var i = 0; i < place.address_components.length; i++) {
//     var addressType = place.address_components[i].types[0];
//     if (componentForm[addressType]) {
//       var val = place.address_components[i][componentForm[addressType]];
//       document.getElementById(addressType).value = val;
//     }
//   }
// }
