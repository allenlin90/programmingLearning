const request = require("request");

const geocode = function (address, callback) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.//.7nYUE26c5bCIpZFkOxPIpA&limit=1`;

  request({ url: url, json: true }, function (error, response) {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

function forecast(long, lat, callback) {
    const url = `http://api.weatherstack.com/current?access_key=08d4f0c107bfb486eafb2bc98d318866&query=${lat},${long}`;

    request({url: url, json: true,}, function(error, response) {
        response.body.
        if(error) {
            callback(error); 
        } else if ()
    })
}

module.exports = {
  geocode: geocode,
  forecast: forecast,
};
