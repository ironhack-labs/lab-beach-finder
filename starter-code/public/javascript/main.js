
// This example adds a search box to a map, using the Google Place Autocomplete
      // feature. People can enter geographical searches. The search box will return a
      // pick list containing a mix of places and predicted search terms.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13,
          mapTypeId: 'roadmap'
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

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
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }

/*function initMap() {
    const sol = {
      lat: 40.417080,
      lng: -3.703612
    };
  
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: sol
    });
  }
  
  var markers = []
  
  initMap();

  var defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(-33.8902, 151.1759),
    new google.maps.LatLng(-33.8474, 151.2631));
  
  var input = document.getElementById("pac-input");
  var options = {
    bounds: defaultBounds,
    types: ['establishment']
  };
  
  autocomplete = new google.maps.places.Autocomplete(input, options);

  function geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });
        autocomplete.setBounds(circle.getBounds());
      });
    }
  }

  
  $(document).ready(function(){
  
    // Create and Initialize Map
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: [41.3977381, 2.090471916]
    });
  
    // Add restaurant markers to map
    document.getElementById('submit').addEventListener('click', function() {
      $.ajax({
        url: "http://localhost:3000/api/search?lat=" + center.lat + "&lng=" + center.lng + "&dis=" + document.getElementById('maxDistance').value,
        method: 'GET',
        success: function(restaurants) {
          console.log('restaurants', restaurants);
          deleteMarkers();
          placeRestaurants(restaurants);
        },
        error: function(error) {
          console.log('error'); 
        }
      });
    });
  
    function deleteMarkers() {
      markers.forEach(function(marker) {
        marker.setMap(null);
        marker = null;
      })
      markers = [];
    }
  
    function getRestaurant() {
      $.ajax({
        url: "http://localhost:3000/api",
        method: 'GET',
        success: placeRestaurants,
        error: function(error) {
          console.log('error'); 
        }
      });
    }
  
    function placeRestaurants(restaurants){
      restaurants.forEach(function(restaurant){
        var center = {
          lat: restaurant.location.coordinates[1],
          lng: restaurant.location.coordinates[0]
        };
        var pin = new google.maps.Marker({
          position: center,
          map: map,
          title: restaurant.name
        });
        markers.push(pin)
      });
    }
  
  });*/