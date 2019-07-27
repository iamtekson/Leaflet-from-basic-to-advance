var map = L.map('map').setView([28.2521, 83.9774], 18);
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// to get the height of the window
var height = $(window).height();
console.log(`the height of the pc is: ` + height);


    // var point = map.on('click', function(e){
    //     return(new L.marker([e.latlng.lat, e.latlng.lng]).addTo(map));
    // });

var marker = null;
var line = L.polyline([]).addTo(map);
    function draw(){
        map.on('click', function(e){
            var point = {lat: e.latlng.lat, lng: e.latlng.lng};
            if(!marker) {
                marker = L.marker(point).addTo(map);
            }
        line.addLatLng(point);
        });
            
    }
draw();

// map.on('click', function(e){
//     var point = {lat: e.latlng.lat, lng: e.latlng.lng},
//         marker = L.marker([e.latlng.lat, e.latlng.lng]);
//     line.addLatLng(point);
// });