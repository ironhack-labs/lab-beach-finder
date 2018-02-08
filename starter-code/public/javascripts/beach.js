function startMap() {

  // Creo un mapa, lo centro en BCN y coloco un marcador en BCN
  const ironhackMAD = {
      lat: 40.3923463,
      lng: -3.6984743999999994
  };
  const map = new google.maps.Map(
      document.getElementById('map'),
      {
          zoom: 15,
          center: ironhackMAD
      }
  );
  const bounds = new google.maps.LatLngBounds();

  /*place.forEach( p => {
      console.log("entramos en el for de map");
      console.log(p);
      bounds.extend(p.location);
      createWindow(map, p.location, `<h2>${p.name}</h2>`);
  });
  map.fitBounds(bounds);*/

}