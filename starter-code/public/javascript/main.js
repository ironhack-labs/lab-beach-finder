function startMap() {


    var ironhackMEX = {
        lat: 41.3977381,
        lng: 2.190471916};
    var map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 15,
        center: ironhackMEX  //aqui decimos donde ponemos la mapa cuando se carga
      }
    );
  

  
  //geolocation:

  
  
  // nuevo markador for use our geolocalisation:
  // Add a marker for Ironhack Barcelona
  // var IronHackMXNMarker = new google.maps.Marker({
  //   position: {
  //     lat: center.lat,
  //     lng: center.lng
  //   },
  //   map: map,
  //   title: "you are here"
  // });
  
  
  // // dibujar ruta:
  // var directionsService = new google.maps.DirectionsService;
  // var directionsDisplay = new google.maps.DirectionsRenderer;
  // var directionRequest = {
  // origin: ironhackMEX,
  // destination: 'Madrid, es',
  // travelMode: 'WALKING'
  // };
  
  // directionsService.route(
  // directionRequest,
  // function(response, status) {
  //   if (status === 'OK') {
  //     // everything is ok
  //     directionsDisplay.setDirections(response);
  
  //   } else {
  //     // something went wrong
  //     window.alert('Directions request failed due to ' + status);
  //   }
  // });
   //directionsDisplay.setMap(map);
  
  
  //geocode
  var input = document.getElementById("search-box");
  
  function autocomplete(input){
    const dropdown = new google.maps.places.Autocomplete(input);  //places es una libreria extrat de google, hay que pedir la en el index: &libraries=places qu’on rajoute au src du script
    dropdown.addListener("place_changed", ()=>{
      console.log(dropdown)
        const place = dropdown.getPlace();
        console.log(place);
        var lat = place.geometry.location.lat();
        var lng = place.geometry.location.lng();
        console.log(place.geometry.location.lat());
        console.log(place.geometry.location.lng());
        var beachlocation ={lat,lng};
        var myMarker = new google.maps.Marker({
          position: beachlocation,
          map: map,
          label: "I’m here",
          draggable: true,
          icon: "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Chartreuse.png",
          https:"//cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Chartreuse.png",
          animation:google.maps.Animation.DROP
        });
        
          
            map.setCenter(place.geometry.location);
            map.setZoom(17);
  
    });
  }

    

 autocomplete(input);




  
  }; // toujours startmap function
  
  startMap();