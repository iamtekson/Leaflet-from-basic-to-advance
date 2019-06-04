var map = L.map('map').setView([28.2521, 83.9774], 18);
mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaWFtdGVrc29uIiwiYSI6ImNqdjV4YzI4YjB0aXk0ZHBtNnVnNWxlM20ifQ.FjQJyCTodXASYtOK8IrLQA'
var mapbox = L.tileLayer(mapboxUrl, {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.mapbox.com">Mapbox</a> contributors'
}).addTo(map);

