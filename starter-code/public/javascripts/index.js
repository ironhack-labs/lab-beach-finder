function startMap() {
    var ironhackBCN = {
        lat: 31.3977381,
        lng: 2.190471916};

    var map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 15,
        center: ironhackBCN
      }
    );
    var input = document.getElementById('pac-input');
    var autocomplete = new google.maps.places.Autocomplete(input);


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const user_location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          // Center map with user location
          map.setCenter(user_location);

          // Add a marker for your user location
          var ironHackBCNMarker = new google.maps.Marker({
            position: {
              lat: user_location.lat,
              lng: user_location.lng
            },
            map: map,
            title: "You are here"
          });

        }, function () {
          console.log('Error in the geolocation service.');
        });
    } else {
        console.log('Browser does not support geolocation.');
    }

    var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);
        var marker = new google.maps.Marker({
          map: map
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
            
        autocomplete.addListener('place_changed', function() {
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

   //THIS SETS THE MARKER ON THE NEW LOCATION
    marker.setPlace({
           placeId: place.place_id,
           location: place.geometry.location
         });
         marker.setVisible(true);

         infowindowContent.children['place-name'].textContent = place.name;
         infowindowContent.children['place-id'].textContent = place.place_id;
         infowindowContent.children['place-address'].textContent =
             place.formatted_address;
         infowindow.open(map, marker);
       });
}

startMap();
