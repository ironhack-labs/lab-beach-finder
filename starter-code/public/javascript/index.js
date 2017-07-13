const geocoder = new google.maps.Geocoder();

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('form')
  const address = document.getElementById('address')
  var marker = null;

  let searchedAddress =  null

  let sol = {
    lat: 40.4170441,
    lng: -3.7033601
  }

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: sol
  });

  var input = document.getElementById('address');

  const searchBox = new google.maps.places.SearchBox(input);

  searchBox.addListener('places_changed', (e)=>{
    console.log(searchBox.getPlaces());
    const location = searchBox.getPlaces()[0].geometry.location
    map.setCenter(location)

    
    if(marker) marker.setMap(null);
    marker = new google.maps.Marker({
          position: location,
          map: map,
          title: 'Beach'
        });
  })

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
  });
});
