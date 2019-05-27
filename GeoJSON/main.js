var map = L.map('map').setView([28.2521, 83.9774], 18);
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// to get the height of the window
var height = $(window).height();
console.log(`the height of the pc is: ` + height);

var street = {"type":"FeatureCollection", "features": [
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97833571758883,28.252707666241346]},"properties":{"ele":969.947449,"time":"2019-05-13T00:00:00.000Z","Name":"SL1","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97827769191508,28.252452157174343]},"properties":{"ele":969.808594,"time":"2019-05-13T00:00:00.000Z","Name":"SL2","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.9781629749449,28.252283018791324]},"properties":{"ele":968.762085,"time":"2019-05-13T00:00:00.000Z","Name":"SL3","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97804840888527,28.252123729497736]},"properties":{"ele":968.237427,"time":"2019-05-13T00:00:00.000Z","Name":"SL4","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97795611959168,28.251950584850945]},"properties":{"ele":967.487244,"time":"2019-05-13T00:00:00.000Z","Name":"SL5","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97785598747244,28.25179957858717]},"properties":{"ele":965.998779,"time":"2019-05-13T00:00:00.000Z","Name":"SL6","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.9776498835402,28.25189808200904]},"properties":{"ele":965.863647,"time":"2019-05-13T00:00:00.000Z","Name":"SL7","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.9774990250551,28.25171440830532]},"properties":{"ele":966.90918,"time":"2019-05-13T00:00:00.000Z","Name":"SL8","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97730159737851,28.251744861037025]},"properties":{"ele":966.21582,"time":"2019-05-13T00:00:00.000Z","Name":"SL9","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97706546839115,28.251788861037024]},"properties":{"ele":966.358154,"time":"2019-05-13T00:00:00.000Z","Name":"SL10","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.9768634558636,28.25182313780306]},"properties":{"ele":967.428528,"time":"2019-05-13T00:00:00.000Z","Name":"SL11","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97664204697831,28.251875294977403]},"properties":{"ele":967.375732,"time":"2019-05-13T00:00:00.000Z","Name":"SL12","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97641446525927,28.25211835316862]},"properties":{"ele":967.645447,"time":"2019-05-13T00:00:00.000Z","Name":"SL13","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97618061616983,28.252032093956633]},"properties":{"ele":967.933899,"time":"2019-05-13T00:00:00.000Z","Name":"SL14","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97650484908942,28.25226643394038]},"properties":{"ele":967.143311,"time":"2019-05-13T00:00:00.000Z","Name":"SL15","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.976614,28.252443]},"properties":{"ele":967.229309,"time":"2019-05-13T00:00:00.000Z","Name":"SL16","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.976764,28.252648]},"properties":{"ele":967.09375,"time":"2019-05-13T00:00:00.000Z","Name":"SL17","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97686972323397,28.252821138383016]},"properties":{"ele":966.319031,"time":"2019-05-13T00:00:00.000Z","Name":"SL18","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97697686788075,28.252968421412824]},"properties":{"ele":967.748596,"time":"2019-05-13T00:00:00.000Z","Name":"SL19","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.976998,28.252705]},"properties":{"ele":967.057373,"time":"2019-05-13T00:00:00.000Z","Name":"SL20","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.977037,28.252896]},"properties":{"ele":966.999512,"time":"2019-05-13T00:00:00.000Z","Name":"SL21","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97708642141282,28.253035163438117]},"properties":{"ele":966.080566,"time":"2019-05-13T00:00:00.000Z","Name":"SL22","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.9772685723234,28.25302272323396]},"properties":{"ele":967.31073,"time":"2019-05-13T00:00:00.000Z","Name":"SL23","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.977473,28.252992]},"properties":{"ele":966.532227,"time":"2019-05-13T00:00:00.000Z","Name":"SL24","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.977373,28.252857]},"properties":{"ele":966.030273,"time":"2019-05-13T00:00:00.000Z","Name":"SL25","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.977307,28.252659]},"properties":{"ele":964.90564,"time":"2019-05-13T00:00:00.000Z","Name":"SL26","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.977268,28.252467]},"properties":{"ele":964.266174,"time":"2019-05-13T00:00:00.000Z","Name":"SL27","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.977669,28.252974]},"properties":{"ele":965.117859,"time":"2019-05-13T00:00:00.000Z","Name":"SL28","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97774,28.25277]},"properties":{"ele":963.222961,"time":"2019-05-13T00:00:00.000Z","Name":"SL29","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97768,28.252566]},"properties":{"ele":963.525024,"time":"2019-05-13T00:00:00.000Z","Name":"SL30","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.977636,28.252372]},"properties":{"ele":963.308533,"time":"2019-05-13T00:00:00.000Z","Name":"SL31","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.977907,28.252911]},"properties":{"ele":963.810547,"time":"2019-05-13T00:00:00.000Z","Name":"SL32","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97814,28.252845]},"properties":{"ele":963.318237,"time":"2019-05-13T00:00:00.000Z","Name":"SL33","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97838,28.252821]},"properties":{"ele":963.288208,"time":"2019-05-13T00:00:00.000Z","Name":"SL34","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.978203,28.252628]},"properties":{"ele":962.503479,"time":"2019-05-13T00:00:00.000Z","Name":"SL35","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.978061,28.252492]},"properties":{"ele":962.00061,"time":"2019-05-13T00:00:00.000Z","Name":"SL36","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97801529555737,28.252305]},"properties":{"ele":961.222595,"time":"2019-05-13T00:00:00.000Z","Name":"SL37","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.977867,28.252244]},"properties":{"ele":960.887939,"time":"2019-05-13T00:00:00.000Z","Name":"SL38","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.977615,28.252244]},"properties":{"ele":960.556824,"time":"2019-05-13T00:00:00.000Z","Name":"SL39","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97739810269498,28.25223141077989]},"properties":{"ele":960.330872,"time":"2019-05-13T00:00:00.000Z","Name":"SL40","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97721197432627,28.252277359432398]},"properties":{"ele":960.645813,"time":"2019-05-13T00:00:00.000Z","Name":"SL41","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97697305134749,28.252330256737427]},"properties":{"ele":960.525696,"time":"2019-05-13T00:00:00.000Z","Name":"SL42","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.978516,28.252946]},"properties":{"ele":959.930664,"time":"2019-05-13T00:00:00.000Z","Name":"SL43","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.978552,28.253074]},"properties":{"ele":960.522827,"time":"2019-05-13T00:00:00.000Z","Name":"SL44","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.978548,28.253125]},"properties":{"ele":960.059509,"time":"2019-05-13T00:00:00.000Z","Name":"SL45","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.978076,28.253048]},"properties":{"ele":959.729492,"time":"2019-05-13T00:00:00.000Z","Name":"SL46","Power_Watt":30,"pole_hgt":8}},
    {"type":"Feature","geometry":{"type":"Point","coordinates":[83.97675941291193,28.252381636428613]},"properties":{"ele":960.432324,"time":"2019-05-13T00:00:00.000Z","Name":"SL47","Power_Watt":30,"pole_hgt":8}}
	]};
	
var s_light_style = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

L.geoJSON(street, {
    onEachFeature : function(feature, layer){
        var popupContent =  '<h4 class = "text-primary">Street Light</h4>' +
                            '<div class="container"><table class="table table-striped">' +
                            '<thead><tr><th>Properties</th><th>Value</th></tr></thead>' +
                            '<tbody><tr><td> Name </td><td>'+ feature.properties.Name +'</td></tr>' +
                            '<tr><td>Elevation </td><td>' + feature.properties.ele +'</td></tr>' +
                            '<tr><td> Power (watt) </td><td>' + feature.properties.Power_Watt + '</td></tr>' +
                            '<tr><td> Pole Height </td><td>' + feature.properties.pole_hgt + '</td></tr>' +
                            '<tr><td> Time </td><td>' + feature.properties.time + '</td></tr>';
        layer.bindPopup(popupContent)
	},
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, s_light_style);
    }
}).addTo(map);
