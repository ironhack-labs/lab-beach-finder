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

});
