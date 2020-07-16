const request = require("request");

const url = [
  "http://api.weatherstack.com/current?access_key=08d4f0c107bfb486eafb2bc98d318866&query=37.8267,-122.4233",
];

request({ url: url[0], json: true }, function (error, response) {
  //   const data = JSON.parse(response.body);
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log("Code: " + response.body.error.code);
    console.log(response.body.error.type);
  } else {
    const data = response.body.current;
    console.log(
      `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out. `
    );
  }
});

const geocodeURL = [
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWxsZW5saW45MCIsImEiOiJja2NvZGE3Y3QwM3JuMzBxaTV6Ym81eWV2In0.7nYUE26c5bCIpZFkOxPIpA&limit=1",
];

request({ url: geocodeURL[0], json: true }, function (error, response) {
  if (error) {
    console.log("Unable to connect to Mapbox");
  } else if (response.body.features.length === 0) {
    console.log("No location match");
  } else {
    const coord = response.body.features[0].center;
    console.log(
      `Coordinate of ${response.body.features[0].text} is Longitude: ${coord[0]}, Latitude: ${coord[1]}`
    );
  }
});
