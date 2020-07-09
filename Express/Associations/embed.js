var mongoose = require("mongoose");
var mongoDB = 'mongodb://127.0.0.1/restful_blog_app';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })

var postSchema = new mongoose.Schema({
    title: String,
    content: String

});

var postModel = mongoose.model("post", postSchema);

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var user = mongoose.model("user", userSchema);

// var newUser = new user({
//     email: "charlie@brown.edu",
//     name: "Charlie Brown"

// });

// newUser.posts.push({
//     title: "how to polyjuice",
//     content: "just kidding"
// });

// newUser.save(function (err, user) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new postModel({
//     title: "reflections on apples",
//     content: "they are delicious"
// });

// newPost.save(function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

user.findOne({ name: "Charlie Brown" }, function (err, user) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(user);
    }

});