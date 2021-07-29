# Introduction

Checkout the playlist on leafletjs from basic to advance below,

1. [Leaflet from basic to advance](https://youtube.com/playlist?list=PLyWyQBSWLw1NH1wsA0wkSMTlQ45P0AqCj)
2. [Leaflet Crash course](https://youtu.be/ls_Eue1xUtY)
3. [Advance spatial analysis in leaflet | turfjs](https://youtu.be/X_2M31p5w2M)
4. [What is GeoJSON, How to use, What is the important of GeoJSON? | geojson.io | mapshaper](https://youtu.be/B9uZCizEqWs)

This repo contain all the **basic ideas** about the leaflet. I added various functionalities about the [**leaflet.js**](leafletjs.com).

## Basic

Inside this folder I added following functionalities.

- Adding base map

```javascript
var map = L.map("map").setView([28.2521, 83.9774], 18);
var OpenStreetMap_Mapnik = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);
```

##### Adding multiple base layers

```js
var baseLayers = {
  "OSM Mapnik": osmMap,
  Landscape: landMap,
};

L.control.layers(baseLayers).addTo(map);
```

##### Adding multiple markers

```js
var markers = [
  ["7C6B07", -40.99497, 174.50808],
  ["7C6B38", -41.30269, 173.63696],
  ["C820B6", -41.51285, 173.53274],
];
for (var i = 0; i < markers.length; i++) {
  marker = new L.marker([markers[i][1], markers[i][2]])
    .bindPopup(markers[i][0])
    .addTo(map);
}
```

##### Adding lines on leaflet map

```js
var polyline = L.polyline(
  [
    [-40.286, 175.796],
    [-41.281, 176.086],
    [-41.279, 175.776],
    [-41.29, 174.075],
    [-42.292, 174.788],
  ],
  {
    color: "red",
    weight: 10,
    opacity: 0.7,
    dashArray: "20,15",
    lineJoin: "round",
  }
).addTo(map);
```

### GeoJSON

Inside this folder I added following functionalities.

- Adding Geojson in map

```
L.geoJSON(json_data).addTo(map);
```

- Custom Popup in Geojson
- Custom style in Geojson

## Geolocation

Inside this folder, I write the code to redirect the user location. It takes the user location and shows on map.

## Responsive sidebar for leaflet

This is actually a plugin. This plugin can be found at [leaflet-sidebar-v2](https://github.com/Turbo87/sidebar-v2)

## Animation Routing

Inside this folder, I use [leaflet-router-machine](http://www.liedman.net/leaflet-routing-machine/tutorials/) plugin. for more information goto [leaflet-routing-machine](http://www.liedman.net/leaflet-routing-machine/tutorials/)

## Draw

This is also a [draw](https://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html) plugin. This plugin supports the Drawing feature in map. There are lots of features in this plugin. The user can add the point, line, polygons, edit this layers, delete the layer etc.

## Leaflet Routing Machine

This plugin is very useful for the navigation. for more goto [leaflet-routing-machine](http://www.liedman.net/leaflet-routing-machine/tutorials/). This plugin can be initiated by using

```
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
<link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css" />
<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>
<script src="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js"></script>
```

## mapbox base map

In this code, I use [mapbox](https://mapbox.com) layer as base layer. The general style for showing the mapbox layer on leaflet is

```js
var map = L.map("map").setView([28.2521, 83.9774], 12);
var mapboxTile = L.tileLayer(
  "https://api.tiles.mapbox.com/styles/v1/{username}/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    username: "iamtekson",
    id: "cjwhym7s70tae1co8zf17a3r5",
    accessToken:
      "pk.eyJ1IjoiaWFtdGVrc29uIiwiYSI6ImNqdjV4YzI4YjB0aXk0ZHBtNnVnNWxlM20ifQ.FjQJyCTodXASYtOK8IrLQA",
  }
).addTo(map);
```

## Marker Cluster

The leaflet plugin named as [marker-cluster](https://github.com/Leaflet/Leaflet.markercluster) is very useful for the multiple markers. This plugin helps to manage the multiple markers on the map.
