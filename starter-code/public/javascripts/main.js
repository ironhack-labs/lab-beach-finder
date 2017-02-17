$(document).ready(function(){
      // Create and Initialize Map

      var ironhackBCN = {
        lat: 41.3977351,
        lng: 2.1903
      };

      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: ironhackBCN
      });

      var input = document.getElementById('searchTextField');
      var options = {

      };

      var autocomplete = new google.maps.places.Autocomplete(input, options);


      // Add restaurant markers to map
      let markers = [];
      myPlaces.forEach(function(place){
        let title = place.name
        let position = {
          lat: place.location.coordinates[1],
          lng: place.location.coordinates[0]
        };
        var pin = new google.maps.Marker({ position, map, title  });
        if (place.type === "COFFEE") { pin.setIcon('http://maps.google.com/mapfiles/ms/micons/coffeehouse.png') }
        if (place.type === "BOOKS") { pin.setIcon('http://maps.google.com/mapfiles/kml/pal2/icon14.png') }
        markers.push(pin)
      });
      console.log(markers);

});
