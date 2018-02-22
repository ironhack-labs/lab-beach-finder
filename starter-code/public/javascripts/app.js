
var input = document.getElementById("beachMap");
function autoComplete(autocomplete){
const dropdown = new google.maps.places.Autocomplete(autocomplete);
  dropdown.addListener("place_changed",()=>{
  const place = dropdown.getPlace();
  console.log(place.geometry.location.lat());
  console.log(place.geometry.location.lng());
  console.log(place);
});
}
autoComplete(input);