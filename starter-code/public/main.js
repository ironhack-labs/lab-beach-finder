var autocomplete
var map
var marker

function startMap() {
  var ironhackBCN = {
  	lat: 41.3977381,
  	lng: 2.190471916};
  map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 15,
      center: ironhackBCN
    }
  );
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autoInput'), {}
  )
}

function update () {
  let place = autocomplete.getPlace()
  if (place.geometry) {
    map.panTo(place.geometry.location)
    map.setZoom(15)
    marker = new google.maps.Marker({
    position: place.geometry.location,
    map: map,
    })
  }
  console.log(place)
}


startMap();
