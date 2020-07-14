// Create a map object
var myMap = L.map("map", {
  center: [1.957709, 37.297204],
  zoom: 3
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(myMap);

// Country data
var countries = [
  {
    name: "Benin",
    location: [10.338383, 2.426674],
  },
  {
    name: "Burkina Faso",
    location: [12.933333, 0.000000],

  },
  {
    name: "Cameroon",
    location: [4.061536, 4.061536],

  },
  {
    name: "Central African Republic",
    location: [6.571341, 20.482826],

  },
  {
    name: "Chad",
    location: [15.361167, 18.664479],
   
  },
  {
    name: "Cote d'Ivoire",
    location: [7.806563, -5.379007],

  },
  {
    name: "Djibouti",
    location: [11.749677, 42.577765],

  },
  {
    name: "Egypt",
    location: [26.494184, 29.871903],
  },
  {
    name: "Eritrea",
    location: [15.680513, 38.584156],
 
  },
  {
    name: "Ethiopia",
    location: [8.62622, 39.616032],

  },
  {
    name: "Gambia",
    location: [13.444526, -15.912854],

  },
  {
    name: "Ghana",
    location: [6.880854, -1.167594],

  },
  {
    name: "Guinea",
    location: [9.945587, -9.696645],

  },
  {
    name: "Guinea-Bissau",
    location: [11.721634, -15.035075],

  },
  {
    name: "Iraq",
    location: [33.048056, 43.404716],

  },
  {
    name: "Kenya",
    location: [-1.286389, 36.817223],

  },
  {
    name: "Liberia",
    location: [6.300774, -10.797160],

  },
  {
    name: "Mali",
    location: [23.12729, 104.70139],

  },
  {
    name: "Maldives",
    location: [1.924992, 73.399658],

  },
  {
    name: "Mauritania",
    location: [19.757472, -10.532793],

  },
  {
    name: "Niger",
    location: [9.59396, 8.105306],
  },
  {
    name: "Nigeria",
    location: [9.59396, 8.105306],
  },
  {
    name: "Senegal",
    location: [14.716677, -17.467686],
  },
  {
    name: "Sierra Leone",
    location: [8.484444, -13.234444],
  },
  {
    name: "Somalia",
    location: [2.046934, 45.318161],
  },
  {
    name: "Sudan",
    location: [4.859363, 31.571251],
  },
  {
    name: "Togo",
    location: [8.766221, 1.042553],
  },
  {
    name: "Uganda",
    location: [-1.28538, 34.66659],
  },
  {
    name: "Tanzania",
    location: [-6.270353, 34.823454],
  },
  {
    name: "Yemen",
    location: [15.369445, 44.191006],
  }
];

for (var i=0; i<countries.length; i++)
{
  var prevalence = countries[i];
    L.circleMarker((prevalence.location),{
      color: "Purple",
      fillColor: "Orange",
      fillOpacity: 0.83,
      radius: 4})
    .addTo(myMap)

}
  // Add circles to map
  