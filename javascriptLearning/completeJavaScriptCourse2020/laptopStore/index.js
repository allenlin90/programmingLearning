const fs = require("fs");
const http = require("http");
const url = require("url");

const file = fs.readFileSync(`${__dirname}/data/data.json`, `utf-8`);

// another method to read JSON
// const str = fs.readFileSync(`${__dirname}/data/data.json`).toString();

const laptopData = JSON.parse(file);
// console.log(laptopData);

const server = http.createServer(function (req, res) {
  // get path on URL
  const pathName = url.parse(req.url, true).pathname;

  // get parameter(s) passed in the URL after question mark '?'
  const query = url.parse(req.url, true).query;
  const id = url.parse(req.url, true).query.id;

  // product overview
  if (pathName === "/products" || pathName === "/") {
    res.writeHead(200, { "content-type": "text/html" });

    fs.readFile(`${__dirname}/templates/template-overview.html`, `utf-8`, (err, data) => {
      let overviewOutput = data;

      fs.readFile(`${__dirname}/templates/template-card.html`, `utf-8`, (err, data) => {
        const cardsOutput = laptopData.map((item) => replaceTemplate(data, item)).join("");
        overviewOutput = overviewOutput.replace("{%CARD%}", cardsOutput);

        res.end(overviewOutput);
      });
    });
  }

  // laptop details
  else if (pathName === "/laptop" && id < laptopData.length) {
    res.writeHead(200, { "content-type": "text/html" });

    fs.readFile(`${__dirname}/templates/template-laptop.html`, `utf-8`, function (err, data) {
      const laptop = laptopData[id];
      const output = replaceTemplate(data, laptop);
      res.end(output);
    }
    );
  }

  // images
  else if ((/\.(jpg|jpeg|png|gif)$/i).test(pathName)) {
    fs.readFile(`${__dirname}/data/img/${pathName}`, (err, data) => {
      res.writeHead(200, { 'content-type': 'image/jpg' });
      res.end(data);
    });
  }

  // URL not found
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end(`URL was not found on the server!`);
  }
});

server.listen(1337, "127.0.0.1", function () {
  console.log("Listening for requests now");
});

function replaceTemplate(originalHTML, laptop) {
  let output = originalHTML.replace(/{%PRODUCTNAME%}/g, laptop.productName);
  output = output.replace(/{%IMAGE%}/g, laptop.image);
  output = output.replace(/{%PRICE%}/g, laptop.price);
  output = output.replace(/{%SCREEN%}/g, laptop.screen);
  output = output.replace(/{%CPU%}/g, laptop.cpu);
  output = output.replace(/{%STORAGE%}/g, laptop.storage);
  output = output.replace(/{%RAM%}/g, laptop.ram);
  output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
  output = output.replace(/{%ID%}/g, laptop.id);
  return output;
}
