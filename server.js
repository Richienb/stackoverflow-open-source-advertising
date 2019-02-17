// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const request = require("request");

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
request({
            url: "https://stackoverflow.com/ossads/300x250",
            method: 'GET',
            headers: {
                'User-Agent': 'rosav (nodejs)'
            }
        },
    function(error, response, body) {
        response.send(body);
    });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});