const request = require("request");

function forecast(long, lat, callback) {
  const url = `http://api.weatherstack.com/current?access_key=//&query=${lat},${long}`;

  request({ url, json: true }, function (error, { body }) {
    const data = body.current;
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find the location", undefined);
    } else {
      callback(
        undefined,
        `${body.location.name}: ${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out.`
      );
    }
  });
}

module.exports = forecast;
