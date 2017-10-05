function startMap() {

  var ironhackParis = {
    lat: 48.8745686,
    lng: 2.335433
  };

  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 15,
      center: ironhackParis
    }
  );

  var input = document.getElementById('beach-search');

  var searchBox = new google.maps.places.SearchBox(input);

  //create markers
  var markers = [];

  searchBox.addListener('places_changed', () => {

    var places = searchBox.getPlaces();
    console.log("places_changed");
    console.log("places", places);
    console.log(places[0].address_components[0].long_name);

    if (places.length == 0) {
      return;
    }

    //clear markers
    markers.forEach((marker) => {
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

      let showFlags = document.getElementById('flag-div');
      console.log("show flags ", showFlags);
      console.log("show flags class name", showFlags.className);

      if(showFlags.className === "flags hidden"){
        showFlags.className = "flags";
      }

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


startMap();


//document.getElementById("red").addListener('click').className()








//
// <% if( <%= places[0].address_components[0].long_name %>.indexOf("beach") >=0 || <%= places[0].address_components[0].long_name %>.indexOf("Beach") >=0){ %>
//
//   <div class="flag-div">
//
//     <button class="flag" type="button" name="button" id="red">Danger</button>
//     <button class="flag" type="button" name="button" id="yellow">Be Careful</button>
//     <button class="flag" type="button" name="button" id="green">A-OK</button>
//
// <!-- <p>&#9872;</p> -->
//
//   </div>
//   <br>
