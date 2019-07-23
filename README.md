# Introduction
This repo contain all the __basic ideas__ about the leaflet. I added various functionalities about the __leaflet.js__. 
## Basic
Inside this folder I added following functionalities.
* Adding base map
```
var map = L.map('map').setView([28.2521, 83.9774], 18);
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 
```
* Adding multiple base layers
```
var baseLayers = {
	"OSM Mapnik": osmMap,
	"Landscape": landMap
	};

L.control.layers(baseLayers).addTo(map);

```
* Adding multiple markers
```
var markers = [
			["7C6B07",-40.99497,174.50808],
			["7C6B38",-41.30269,173.63696],
			["C820B6",-41.51285,173.53274]
		];
		for (var i = 0; i<markers.length; i++){
			marker = new L.marker([markers[i][1], markers[i][2]])
			.bindPopup(markers[i][0])
			.addTo(map);
		}
```
* Adding lines on leaflet map
```
var polyline = L.polyline([
	[-40.286, 175.796],
	[-41.281, 176.086],
	[-41.279, 175.776],
	[-41.290, 174.075],
	[-42.292, 174.788]
	],
		{
			color: 'red',
			weight: 10,
			opacity: .7,
			dashArray: '20,15',
			lineJoin: 'round'
		}
).addTo(map);
```
## GeoJSON
Inside this folder I added following functionalities.
* Adding Geojson in map
```
L.geoJSON(json_data).addTo(map);
```
* Custom Popup in Geojson
* Custom style in Geojson
## Geolocation
Inside this folder, I write the code to redirect the user location. It takes the user location and shows on map.
## Responsive sidebar for leaflet
This is actually a plugin. This plugin can be found at [leaflet-sidebar-v2] (https://github.com/Turbo87/sidebar-v2)
## Search box
This is also a plugin for searching the [OpenStreetMap] (https://osm.org) locations. For more information goto [leaflet-search] (https://github.com/stefanocudini/leaflet-search)
## Animation Routing 
Inside this folder, I use [leaflet-router-machine] (http://www.liedman.net/leaflet-routing-machine/tutorials/) plugin. for more information goto [leaflet-routing-machine] (http://www.liedman.net/leaflet-routing-machine/tutorials/) 
## Draw
This is also a [draw] (https://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html) plugin. This plugin supports the Drawing feature in map. There are lots of features in this plugin. The user can add the point, line, polygons, edit this layers, delete the layer etc. 
## Leaflet Routing Machine
This plugin is very useful for the navigation. for more goto [leaflet-routing-machine] (http://www.liedman.net/leaflet-routing-machine/tutorials/) 
## mapbox base map
In this code, I use [mapbox] (https://mapbox.com) layer as base layer. The general style for showing the mapbox layer on leaflet is 
``` 
var map = L.map('map').setView([28.2521, 83.9774], 12);
        L.tileLayer('https://api.tiles.mapbox.com/styles/v1/{username}/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            username: 'iamtekson',
            id: 'cjwhym7s70tae1co8zf17a3r5',
            accessToken: 'pk.eyJ1IjoiaWFtdGVrc29uIiwiYSI6ImNqdjV4YzI4YjB0aXk0ZHBtNnVnNWxlM20ifQ.FjQJyCTodXASYtOK8IrLQA'
        }).addTo(map); 
``` 
## Marker Cluster
The leaflet plugin named as [marker-cluster] (https://github.com/Leaflet/Leaflet.markercluster) is very useful for the multiple markers. This plugin helps to manage the multiple markers on the map.

