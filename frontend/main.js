import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "3iq2cmvf",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
});

const data = await client.fetch(`count(*)`);
console.log(`Number of documents: ${data}`);

var map = L.map("map").setView([51.564656, -0.107868], 17);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Add a things to the map
var markerFAC = L.marker([51.56443, -0.108662]).addTo(map);
var markerStuffed = L.marker([51.563721, -0.108458]).addTo(map);
var markerStuffed = L.marker([51.565176, -0.108169]).addTo(map);

// var circle = L.circle([51.508, -0.11], {
//   color: "red",
//   fillColor: "#f03",
//   fillOpacity: 0.5,
//   radius: 500,
// }).addTo(map);

// var polygon = L.polygon([
//   [51.509, -0.08],
//   [51.503, -0.06],
//   [51.51, -0.047],
// ]).addTo(map);

markerFAC.bindPopup("<h1>👨‍💻</h1>").openPopup();
markerStuffed.bindPopup("<h1>Stuffd</h1>");

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

map.on("click", onMapClick);
