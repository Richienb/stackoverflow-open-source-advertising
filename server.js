// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const https = require('https')

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {

  https.get('https://stackoverflow.com/ossads/300x250', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(data + "<style>body, </style>");
    response.send(data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
  
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});