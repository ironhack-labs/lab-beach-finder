function startMap() {
    const ironhackMIAMI = {
      lat: 25.761681,
      lng: -80.191788
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: ironhackMIAMI
    });
  }


  function initialize() {
    const input = document.getElementById('searchTextField');
    new google.maps.places.Autocomplete(input);
  }
  
  google.maps.event.addDomListener(window, 'load', initialize);
  
  autocomplete = new google.maps.places.Autocomplete(input, options);