// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.
var placeObject;

function initAutocomplete() {
       var map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: -33.8688, lng: 151.2195},
         zoom: 13,
         mapTypeId: 'roadmap'
       });

       // Create the search box and link it to the UI element.
       var input = document.getElementById('pac-input');
       var searchBox = new google.maps.places.SearchBox(input);
       map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

       // Bias the SearchBox results towards current map's viewport.
       map.addListener('bounds_changed', function() {
         searchBox.setBounds(map.getBounds());
       });

       var markers = [];
       // Listen for the event fired when the user selects a prediction and retrieve
       // more details for that place.
       searchBox.addListener('places_changed', function() {
         var places = searchBox.getPlaces();

         if (places.length == 0) {
           return;
         }

         // Clear out the old markers.
         markers.forEach(function(marker) {
           marker.setMap(null);
         });
         markers = [];

         // For each place, get the icon, name and location.
         var bounds = new google.maps.LatLngBounds();
         places.forEach(function(place) {
           if (!place.geometry) {
             console.log("Returned place contains no geometry");
             return;
           }
           var icon = {
             url: place.icon,
             size: new google.maps.Size(71, 71),
             origin: new google.maps.Point(0, 0),
             anchor: new google.maps.Point(17, 34),
             scaledSize: new google.maps.Size(25, 25)
           };

           // Create a marker for each place.
           markers.push(new google.maps.Marker({
             map: map,
             icon: icon,
             title: place.name,
             position: place.geometry.location
           }));
          //  console.log(place);
           placeObject = place;



           if (place.geometry.viewport) {
             // Only geocodes have viewport.
             bounds.union(place.geometry.viewport);
           } else {
             bounds.extend(place.geometry.location);
           }
         });
         map.fitBounds(bounds);
       });
     }

     $(document).ready(function(){
       $('.button').on('click', (e)=>{
         let type = e.currentTarget.id;

         console.log(type);
         let name = placeObject.name;

         const chosenBeach = {
           name : name,
           type : type
         };
         $.ajax({
           type: 'POST',
           url: 'http://localhost:27017',
           data: chosenBeach,
           success: showFeedback,
           error: handleError
         });
       });
       function showFeedback(postResponse){
         console.log('post succes');
         console.log(postResponse);
       }
       function handleError(err){
         console.log('error');
         console.log(err);
       }
     });




// let markers = myLocals.map(item =>{
//   let name = item.name;
//   let position = {
//     lat: parseInt(item.location.coordinates[1]),
//     lng: parseInt(item.location.coordinates[0])
//   };
//   let pin = new google.maps.Marker({position, map, name});
//
//   return pin;
// });
// console.log(markers);
