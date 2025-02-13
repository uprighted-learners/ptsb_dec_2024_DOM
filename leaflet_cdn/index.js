// Using leaflets CDN,  we now have access to a global "L" variable
console.log(L);

// Setting up map view
let myMap = L.map("map").setView([51.505, -0.09], 13);
// Setting the particular tile

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 25,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(myMap);

// Adding a marker to the map
let marker = L.marker([51.5, -0.09]).addTo(myMap);

// Using bindPopup to add set marker text
marker.bindPopup("<b>Hello World</b> <br>I am a popup!").openPopup();

// Remove marker
// marker.remove()

// Creating polygon shape, based on various coordinates
let polygon = L.polygon(
  [
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047],
  ],
  { color: "red" }
).addTo(myMap);

// Remove polygon shape
// polygon.remove()

let line = L.polyline(
  [
    [51.513, -0.06],
    [51.61, -0.047],
  ],
  { color: "purple" }
).addTo(myMap);
