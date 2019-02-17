// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const http = require('http')

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  var options = {
  host: 'stackoverflow.com',
  port: 443,
  path: '/ossads/300x250'
};

http.get(options, function(res) {
  // console.log("Got response: " + res.statusCode);
  // console.log(res)
  // response.send(res.statusCode)
  let data = '';

  // A chunk of data has been recieved.
  res.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  res.on('end', () => {
    console.log(data);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});