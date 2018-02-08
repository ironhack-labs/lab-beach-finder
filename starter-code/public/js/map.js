function startMap() {

  const map = new google.maps.Map(
      document.getElementById('map'),
      {
          zoom: 15,
          center: {
              lat: 25.825986,
              lng: -80.182716
          }
  })
}


