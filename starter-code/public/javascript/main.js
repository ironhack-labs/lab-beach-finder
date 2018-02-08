function startMap(){
    const location={lat:42.827586, lng:-9.105653};
    const map = new google.maps.Map(document.getElementById('map'),
    {
      zoom: 13,
      center:location
    });
    }
    let defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(42.827533, -9.105644),
    )
    
let options= {
    bounds:defaultBounds
};

let input= document.getElementById("pac-input")

    startMap();