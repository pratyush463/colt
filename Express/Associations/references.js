var mongoose = require("mongoose");
var mongoDB = 'mongodb://127.0.0.1/restful_blog_demo2';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })

var postSchema = new mongoose.Schema({
    title: String,
    content: String

});

var postModel = mongoose.model("post", postSchema);

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
});

var user = mongoose.model("user", userSchema);

postModel.create({
    title: "How to cook the best burger",
    content: "blah blah blah"
}, function (err, post) {
    console.log(post);

});

