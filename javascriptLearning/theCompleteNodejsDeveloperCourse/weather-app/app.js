const request = require("request");
const geocode = require("./utils/geocode");
// const url = [
//   "http://api.weatherstack.com/current?access_key=//&query=37.8267,-122.4233",
// ];

// request({ url: url[0], json: true }, function (error, response) {
//   //   const data = JSON.parse(response.body);
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Code: " + response.body.error.code);
//     console.log(response.body.error.type);
//   } else {
//     const data = response.body.current;
//     console.log(
//       `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out. `
//     );
//   }
// });

geocode.geocode("Taipei", (error, data) => {
  console.log(data);
});

geocode.forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
