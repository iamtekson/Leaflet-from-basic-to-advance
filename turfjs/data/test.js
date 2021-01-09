//Nepal geoJson data
var nepalGeoJson = L.geoJSON(nepalGeoJsonData)
nepalGeoJson.addTo(map);
map.fitBounds(nepalGeoJson.getBounds())


//Layer control
var baseMaps = {
    "OSM": osm,
};
var overlayMaps = {
    "Nepal GeoJSON": nepalGeoJson,
};

L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);