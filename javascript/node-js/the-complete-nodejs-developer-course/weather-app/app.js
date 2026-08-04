const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

geocode(address, (error, { latitude, longitude, location } = {}) => {
  if (address === undefined) {
    console.log(`Please provide a location!`);
  } else {
    if (error) {
      return console.log(error);
    }
    forecast(longitude, latitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  }
});
