# Introduction
This repo contain all the __basic ideas__ about the leaflet. I added various functionalities about the __leaflet.js__. 
## Basic
Inside this folder I added following functionalities.
* Adding base map
* Adding multiple base layers
* Adding multiple markers
* Adding lines on leaflet map
## GeoJSON
Inside this folder I added following functionalities.
* Adding Geojson in map
* Custom Popup in Geojson
* Custom style in Geojson
## Geolocation
Inside this folder, I write the code to redirect the user location. It takes the user location and shows on map.
## Responsive sidebar for leaflet
This is actually a plugin. This plugin can be found at [leaflet-sidebar-v2] https://github.com/
## Search box
This is also a plugin for searching the [OpenStreetMap] https://osm.org locations. 
## Animation Routing 
Inside this folder, I use [leaflet-router-machine] https://github.com/ plugin. for more information goto [leaflet-routing-machine] https://github.com/ 
## Draw
This is also a [draw] https://github.com/ plugin. This plugin supports the Drawing feature in map. There are lots of features in this plugin. The user can add the point, line, polygons, edit this layers, delete the layer etc. 
## Leaflet Routing Machine
This plugin is very useful for the navigation. for more goto [leaflet-routing-machine] https://github.com/ 
## mapbox base map
In this code, I use [mapbox] https://mapbox.org layer as base layer. The general style for showing the mapbox layer on leaflet is 
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
The leaflet plugin named as [marker-cluster] https://github.com/ is very useful for the multiple markers. This plugin helps to manage the multiple markers on the map.

