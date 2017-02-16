const greenFlag = $('#green');
const yellowFlag = $('#yellow');
const redFlag = $('#red');
var myPlaceName;

greenFlag.hover(function(e) {
  greenFlag.css('background-color','green');
}, function(e) {
  if (greenFlag.hasClass('selected')) return;
  greenFlag.css('background-color', '');
});

yellowFlag.hover(function(e) {
  yellowFlag.css('background-color','yellow');
}, function(e) {
  if (yellowFlag.hasClass('selected')) return;
  yellowFlag.css('background-color', '');
});

redFlag.hover(function(e) {
  redFlag.css('background-color','red');
}, function(e) {
  if (redFlag.hasClass('selected')) return;
  redFlag.css('background-color', '');
});

greenFlag.on('click', function(e) {
  yellowFlag.removeClass('selected');
  yellowFlag.css('background-color','');
  redFlag.removeClass('selected');
  redFlag.css('background-color','');
  greenFlag.addClass('selected');
  $.ajax({
    url: '/create',
    type: "POST",
    data: {placeName: myPlaceName, color: 'green'} ,
    success: function (response) {
      console.log(response);
    },
    error: function (err) {
      console.log(err);
    },
  });
});

yellowFlag.on('click', function(e) {
  redFlag.removeClass('selected');
  redFlag.css('background-color','');
  greenFlag.removeClass('selected');
  greenFlag.css('background-color','');
  yellowFlag.addClass('selected');
  $.ajax({
    url: '/create',
    type: "POST",
    data: {placeName: myPlaceName, color: 'yellow'} ,
    success: function (response) {
      console.log(response);
    },
    error: function (err) {
      console.log(err);
    },
  });
});

redFlag.on('click', function(e) {
  yellowFlag.removeClass('selected');
  yellowFlag.css('background-color','');
  greenFlag.removeClass('selected');
  greenFlag.css('background-color','');
  redFlag.addClass('selected');
  $.ajax({
    url: '/create',
    type: "POST",
    data: {placeName: myPlaceName, color: 'red'} ,
    success: function (response) {
      console.log(response);
    },
    error: function (err) {
      console.log(err);
    },
  });
});



function initialize() {
  var mapOptions = {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13,
    scrollwheel: false
  };
  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

  var input = /** @type {HTMLInputElement} */(
      document.getElementById('beach-search'));

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
    myPlaceName = place.name;
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
        'Place ID: ' + place.place_id + '<br>' +
        place.formatted_address + '</div>');
    infowindow.open(map, marker);
  });
}

// Run the initialize function when the window has finished loading.
google.maps.event.addDomListener(window, 'load', initialize);
