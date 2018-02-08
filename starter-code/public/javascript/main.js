function startMap(){
    const location={lat:42.827586, lng:-9.105653};
    const map = new google.maps.Map(document.getElementById('map'),
    {
      zoom: 13,
      center:location
    });
    
let input= document.getElementById('pac-input');
let autocomplete = new  google.maps.places.Autocomplete(input);
 };
  startMap();