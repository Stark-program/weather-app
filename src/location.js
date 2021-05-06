const NodeGeocoder = require("node-geocoder");
const axios = require("axios").default;
require("dotenv").config();

const options = {
  provider: "google",
  apiKey: process.env.GOOGLE_API_KEY,
};
const geocoder = NodeGeocoder(options);

const res = async function test() {
  const api_key = process.env.WEATHER_API_KEY;
  const result = await geocoder.geocode("Bishop, CA");
  const lat = result[0].latitude;
  const long = result[0].longitude;
  console.log(lat, long);

  const weather = axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=hourly,daily,minutely{part}&appid=${api_key}`
    )
    .then((response) => {
      console.log("test");
      const currentWeather = response.data.current.weather[0].main;
      const currentTemp = response.data.current.temp;
      console.log(currentWeather, currentTemp);
    });
};

res();
