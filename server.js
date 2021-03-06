// init project
const express = require("express")
const app = express()
const https = require("https")

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {

    let width = request.query.width ? request.query.width : '300'
    let height = request.query.height ? request.query.height : '250'
    let extracss = ""
    extracss += request.query.margin === 'true' ? "" : "<style>body, .ad-container { margin: 0 }</style>"
    extracss += request.query.footer === 'false' ? "<style>div.footer { display: none }</style>" : ""

    https.get(`https://stackoverflow.com/ossads/${width}x${height}`, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.80 Safari/537.36"
        }
    }, (resp) => {
        let data = ""

        // A chunk of data has been recieved.
        resp.on("data", (chunk) => {
            data += chunk
        })

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
            response.send(data + extracss)
        })

    }).on("error", (err) => {
        response.send("An error occurred: " + err.message)
    })

})

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
    // console.log('Your app is listening on port ' + listener.address().port)
})