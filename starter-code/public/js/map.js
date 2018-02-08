// function initMap() {
//   let map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 40.389269, lng: -3.701616 },
//     zoom: 8
//   });
//   console.log("funcion initMap dice hola")
//   autocomplete = new google.maps.places.Autocomplete(
//     /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
//     {types: ['geocode']});

// // When the user selects an address from the dropdown, populate the address
// // fields in the form.
// autocomplete.addListener('place_changed', fillInAddress);
// }

var map, places, infoWindow;
var markers = [];
var autocomplete;
// var countryRestrict = { country: "us" };
var MARKER_PATH =
  "https://developers.google.com/maps/documentation/javascript/images/marker_green";
var hostnameRegexp = new RegExp("^https?://.+?/");

function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.389269, lng: -3.701616 },
    zoom: 8,
    mapTypeControl: false,
    panControl: false,
    zoomControl: false,
    streetViewControl: false
  });

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById("info-content")
  });

  // Create the autocomplete object and associate it with the UI input control.
  // Restrict the search to the default country, and to place type "cities".
  autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */ (document.getElementById("autocomplete")),
    {
      types: ["(cities)"],

    }
  );
  places = new google.maps.places.PlacesService(map);

  autocomplete.addListener("place_changed", onPlaceChanged);

  // Add a DOM event listener to react when the user selects a country.
//   document
//     .getElementById("country")
//     .addEventListener("change", setAutocompleteCountry);
}

// When the user selects a city, get the place details for the city and
// zoom the map in on the city.
function onPlaceChanged() {
  var place = autocomplete.getPlace();
  if (place.geometry) {
    map.panTo(place.geometry.location);
    map.setZoom(15);
    search();
  } else {
    document.getElementById("autocomplete").placeholder = "Enter a city";
  }
}

// Search for hotels in the selected city, within the viewport of the map.
function search() {
  var search = {
    bounds: map.getBounds(),
  };

  places.nearbySearch(search, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      clearResults();
      clearMarkers();
      // Create a marker for each hotel found, and
      // assign a letter of the alphabetic to each marker icon.
      for (var i = 0; i < results.length ; i++) {
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
  places.getDetails({ placeId: marker.placeResult.place_id }, function(
    place,
    status
  ) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      return;
    }
    infoWindow.open(map, marker);
    buildIWContent(place);
  });
}
