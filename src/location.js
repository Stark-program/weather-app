const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "google",
  apiKey: "AIzaSyDm88CgE7BiYzsiWG77_DhonqhVc6slEOo",
};
const geocoder = NodeGeocoder(options);

const res = async function test() {
  const result = await geocoder.geocode("Littleton, CO");
  const lat = result[0].latitude;
  const long = result[0].longitude;

  return console.log(result, lat, long);
};

res();
