$(document).ready(function(){
  const florida = {
    lat: 25.805066, 
    lng: -80.122720
  };
//IzaSyBrAAqnQXzz9Vf9rVVtpKon6G4M3HmkcRw API GOOGLE PLACES KEY
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: florida
  });

  const autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById('autocomplete')));

  const places = new google.maps.places.PlacesService(map);

  function onPlaceChanged(){
    console.log("Playa")
  }

  autocomplete.addListener('place_changed', onPlaceChanged);

// Add a DOM event listener to react when the user selects a country.
//document.getElementById('country').addEventListener(
  //  'change', setAutocompleteCountry);


});
