var express = require("express"),
    app = express(),
    bodyparser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    seedDB = require("./seeds")

seedDB();


var mongoDB = 'mongodb://127.0.0.1/yelp_camp';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");




app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("campgrounds", { campgrounds: allCampgrounds });
        }
    });
});

app.post("/campgrounds", function (req, res) {


    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newcampground = { name: name, image: image, description: desc }

    Campground.create(newcampground, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new");
})

app.get("/campgrounds/:id", function (req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            console.log(foundCampground);
            res.render("show", { campground: foundCampground });
        }
    });
})
app.listen(6789 || process.env.PORT, process.env.IP, function () {
    console.log("yelpcamp server has started!!!!!");
})