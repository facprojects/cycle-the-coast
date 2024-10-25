import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "3iq2cmvf",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2024-10-25", // use current date (YYYY-MM-DD) to target the latest API version
});

const data = await client.fetch(`*[_type == "restaurant"]`);
const restaurants = data;
console.log(`Restaurants: ${restaurants}`);

const map = L.map("map").setView([51.564115, -0.105958], 16);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Add a things to the map
let markerFAC = L.marker([51.56443, -0.108662]).addTo(map);
markerFAC.bindPopup("<h1>FAC</h1>").openPopup();

restaurants.map(x => {
  let marker = L.marker([x.location.lat, x.location.lng]).addTo(map);
  marker.bindPopup(`<h2>${x.name}</h2>`);
})

let circle = L.circle([51.564424, -0.108619], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.1,
  radius: 500,
}).addTo(map);

// let polygon = L.polygon([
//   [51.509, -0.08],
//   [51.503, -0.06],
//   [51.51, -0.047],
// ]).addTo(map);

// Lat and Lon on click function
// function onMapClick(e) {
//   alert("You clicked the map at " + e.latlng);
// }
// map.on("click", onMapClick);
