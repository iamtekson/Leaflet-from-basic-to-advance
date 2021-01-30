var map = L.map('map').setView([28.2521, 83.9774], 18);
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = null;
var line = L.polyline([]).addTo(map);

map.on('click', function(e){
    var point = {lat: e.latlng.lat, lng: e.latlng.lng};
    if(!marker) {
        marker = L.marker(point).addTo(map);
    }
line.addLatLng(point);
});