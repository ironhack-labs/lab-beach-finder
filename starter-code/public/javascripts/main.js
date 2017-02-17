$(document).ready(function(){

    var pyrmont = new google.maps.LatLng(41.390205, 2.154007);

    var map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15,
      scrollwheel: false
    });

    // Specify location, radius and place types for your Places API search.
    var request = {
      location: pyrmont,
      radius: '500',
      types: ['beach']
    };

    // Create the PlaceService and send the request.
    // Handle the callback with an anonymous function.
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, function(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          // If the request succeeds, draw the place location on
          // the map as a marker, and register an event to handle a
          // click on the marker.
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
          });
        }
      }
  });

  var input = /** @type {HTMLInputElement} */(
    document.getElementById('pac-input'));

// Create the autocomplete helper, and associate it with
// an HTML text input box.
var autocomplete = new google.maps.places.Autocomplete(input);
autocomplete.bindTo('bounds', map);

map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

var infowindow = new google.maps.InfoWindow();
var marker = new google.maps.Marker({
  map: map
});
google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map, marker);
});

// Get the full place details when the user selects a place from the
// list of suggestions.
google.maps.event.addListener(autocomplete, 'place_changed', function() {
  infowindow.close();
  var place = autocomplete.getPlace();
  if (!place.geometry) {
    return;
  }

  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
  } else {
    map.setCenter(place.geometry.location);
    map.setZoom(17);
  }

  // Set the position of the marker using the place ID and location.
  marker.setPlace(/** @type {!google.maps.Place} */ ({
    placeId: place.place_id,
    location: place.geometry.location
  }));
  marker.setVisible(true);

  infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
      // 'Place ID: ' + place.place_id + '<br>' +
      place.formatted_address + '</div>');
  infowindow.open(map, marker);

  $('.flag').on('click', function(event) {
    event.preventDefault();
    // console.log(place);
    var newBeach = {
      name : place.name,
      flag : $(this).attr('id')
    };

    $beaches = $('#beaches');

    $.ajax({
      type: 'GET',
      url: '/',
      success: function(place){
        $beaches.append('<li name="name">'+ newBeach.name +'</li>', '<li name="flag">' + newBeach.flag + '</li>');
        $beaches.html("");
      },
      error: function() {
        alert("Error loading beach");
      }
    });

    $.ajax({
      type: 'POST',
      url: '/save',
      data: {name: newBeach.name, flag: newBeach.flag},
      dataType: 'html',
      success: function() {
        console.log('saved');
      },
      error: function() {
        console.log('error saving');
        }
      });
    });
  });
});


// push.pin solution to pins
