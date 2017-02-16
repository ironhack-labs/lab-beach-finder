$.ajax({
  url:     'http://localhost:3000/api/beaches',
 type:    'GET',
 success: function (response) {
   let markers = [];
   var myBeaches = response;

   // Create and Initialize Map
   const map = new google.maps.Map(document.getElementById('map'), {
     zoom: 2,
     center: {lat: 40.417080, lng: -3.703612}
   });

   // Add restaurant markers to map
  myBeaches.forEach(function(beach){
   let title = beach.name;
   let position = {
     lat: beach.location.coordinates[1],
     lng: beach.location.coordinates[0]
   };
   var pin = new google.maps.Marker({ position, map, title });
   if(beach.flag === "GREEN"){
     pin.setIcon("http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_green.png");}
    else if(beach.flag === "RED"){
       pin.setIcon("http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_red.png");}
       else if(beach.flag === "YELLOW"){
          pin.setIcon("http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_yellow.png");}
   markers.push(pin);
 });

   //Autocomplete Search
   var input = document.getElementById('searchTextField');
   var autocomplete = new google.maps.places.Autocomplete(input);

   //Updates Map
   var infowindow = new google.maps.InfoWindow();
   var marker = new google.maps.Marker({
     map: map
   });

   // Get the full place details when the user selects a place from the
   // list of suggestions.
   google.maps.event.addListener(autocomplete, 'place_changed', function() {
     infowindow.close();
     var place = autocomplete.getPlace();
     $( "input[name='longitude']" ).val(place.geometry.location.lng());
     $( "input[name='latitude']" ).val(place.geometry.location.lat());
     $( "input[name='name']" ).val(place.name);

     if (!place.geometry) {
       return;
     }

     if (place.geometry.viewport) {
       map.fitBounds(place.geometry.viewport);
     } else {
       map.setCenter(place.geometry.location);
       map.setZoom(17);
     }

     // Set the position of the marker using the place ID and location.
     marker.setPlace({
       placeId: place.place_id,
       location: place.geometry.location
     });

     marker.setVisible(true);
     infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
         'Place ID: ' + place.place_id + '<br>' +
         place.formatted_address + '</div>');
     infowindow.open(map, marker);
   });
 },
 error: function (err) {console.log(err);}
});
