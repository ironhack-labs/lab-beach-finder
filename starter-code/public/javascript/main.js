/*jshint esversion: 6*/
$(document).ready(function() {
    const position = {
        lat: 40,
        lng: -4
    };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: position
    });
    const input = $('#beach');

    const markers = [];

    let autocomplete = new google.maps.places.Autocomplete(input[0]);
    function setMapOnAll(map){
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
    }
    function clearMarkers(){
      setMapOnAll(null);
    }

    autocomplete.bindTo('bounds', map);
    $('button').on('click', function() {

      $(".status").addClass("clickedstatus");

      clearMarkers();
      console.log(map);
        let latitude = autocomplete.getPlace().geometry.location.lat();
        let longitude = autocomplete.getPlace().geometry.location.lng();
        position.lat = latitude;
        position.lng = longitude;
        console.log(google.maps);
        var newMarker = new google.maps.Marker({
          position: {
            lat: latitude,
            lng: longitude
          },
          map: map,
          title: autocomplete.getPlace().address_components[0].long_name
        });
        markers.push(newMarker);

            map.setCenter(position);


        console.log(autocomplete.getPlace());
        //console.log(autocomplete.getPlace().geometry.location.lat());

    });
});
