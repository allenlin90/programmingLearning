const http = require("http");

const url = `http://api.weatherstack.com/current?access_key=//&query=40,-75`;
// Get access token from weather stack dashboard

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data); // response body
    console.log(body);
  });
});

// Error handler
request.on("error", function (error) {
  console.log("An error", error);
});

request.end();
