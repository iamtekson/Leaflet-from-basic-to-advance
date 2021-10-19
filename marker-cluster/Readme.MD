const s_light_style = {
radius: 8,
fillColor: "#ff7800",
color: "#000",
weight: 1,
opacity: 1,
fillOpacity: 0.8,
};

const markers = L.markerClusterGroup();
L.geoJSON(street, {
onEachFeature: function (feature, layer) {
const popupContent =
'<h4 class = "text-primary">Street Light</h4>' +
'<div class="container"><table class="table table-striped">' +
"<thead><tr><th>Properties</th><th>Value</th></tr></thead>" +
"<tbody><tr><td> Name </td><td>" +
feature.properties.Name +
"</td></tr>" +
"<tr><td>Elevation </td><td>" +
feature.properties.ele +
"</td></tr>" +
"<tr><td> Power (watt) </td><td>" +
feature.properties.Power_Watt +
"</td></tr>" +
"<tr><td> Pole Height </td><td>" +
feature.properties.pole_hgt +
"</td></tr>" +
"<tr><td> Time </td><td>" +
feature.properties.time +
"</td></tr>";
layer.bindPopup(popupContent);
},
pointToLayer: function (feature, latlng) {
return markers.addLayer(L.circleMarker(latlng, s_light_style));
},
});

// map.addLayer(markers);
markers.addTo(map);
