$(document).ready(() => {
    function startMap() {
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: {
                lat: 25.761681,
                lng: -80.191788
            }
        });

        const input = document.getElementById('name-beach');

        const autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        const infowindow = new google.maps.InfoWindow();
        const infowindowContent = document.getElementById('name-beach');
        infowindow.setContent(infowindowContent);

        const marker = new google.maps.Marker({
            map: map,
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
        autocomplete.addListener('place_changed', function () {
            infowindow.close();
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                return;
            }

            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);
            }
            marker.setPlace({
                placeId: place.place_id,
                location: place.geometry.location
            });
            marker.setVisible(true);

            infowindowContent.children['place-name'].textContent = place.name;
            infowindowContent.children['place-id'].textContent = place.place_id;
            infowindowContent.children['place-address'].textContent =
                place.formatted_address;
            infowindow.open(map, marker);
        });
    }
    startMap();
});