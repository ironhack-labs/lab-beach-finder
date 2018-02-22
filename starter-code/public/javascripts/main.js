

function startMap(){
  var ironhackMEX = {
    lat: 19.4021721, 
    lng: -99.1891731
  };
  if (myBeach!=null){
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: {
        lat: myBeach.location.coordinates[1],
        lng: myBeach.location.coordinates[0]
      }
    });
    document.getElementById("searchBar").value = myBeach.name;
    document.getElementById("latitude").value = myBeach.location.coordinates[1];
    document.getElementById("longitude").value = myBeach.location.coordinates[0];
    document.getElementById("flag").value = myBeach.flag;
  } else{
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: ironhackMEX
    });
  }
  
  var input = document.getElementById("searchBar");

    function autocomplete(input){
        const dropdown = new google.maps.places.Autocomplete(input);
        dropdown.addListener("place_changed", ()=>{
            const place = dropdown.getPlace();
            console.log(place.geometry.location.lat());

            console.log(place.geometry.location.lng());

            console.log(place);

            const newCenter = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            };
            map.setCenter(newCenter);

            document.getElementById("latitude").value = place.geometry.location.lat()
            document.getElementById("longitude").value = place.geometry.location.lng()
            
        })
    }
    autocomplete(input);

    let markers = [];
    myBeaches.forEach(function(beach){
      let title = beach.name
      let position = {
        lat: beach.location.coordinates[1],
        lng: beach.location.coordinates[0]
      };
      var pin = new google.maps.Marker({ 
        position: position,
        map: map,
        label: title,
        draggable: false,
        animation: google.maps.Animation.DROP});
      markers.push(pin)
    });
}

startMap()

$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});