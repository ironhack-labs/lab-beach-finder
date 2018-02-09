function startMap() {
  var beach = {
  	lat: 40.416894,
  	lng: -3.703488};
  var map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 12,
      center: beach
    }
  );
}