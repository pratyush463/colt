var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");


app.get("/", function (req, res) {
    res.render("search");
})

app.get("/results", function (req, res) {

    var query = req.query.Search;
    request("http://www.omdbapi.com/?apikey=2f16c556&s=" + query, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body)
            res.render("results", { data: data });
        }
    })
})


app.listen(6789 || process.env.PORT, process.env.IP, function () {
    console.log("server started");
})