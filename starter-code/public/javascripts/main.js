// javascripts/main.js
$(document).ready(function(){

    // Create and Initialize Map
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: [41.3977381, 2.090471916]
    });
  
    // Add restaurant markers to map
    let markers = [];
    myRestaurants.forEach(function(restaurant){
      let title = restaurant.namerestaurant.name
      let position = {
        lat: restaurant.location.coordinates[1],
        lng: restaurant.location.coordinates[0]
      };
      var pin = new google.maps.Marker({ position, map, title  });
      markers.push(pin)
    });
  });