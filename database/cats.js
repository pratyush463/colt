var mongoose = require("mongoose");
var mongoDB = 'mongodb://127.0.0.1/cat_app';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

var Schema = mongoose.Schema;

var catSchema = new Schema({
    name: {
        type: String,
        required: [
            true, "Name is required!!!"
        ]
    },
    age: Number,
    temper: String
});
var Cat = mongoose.model("cat", catSchema);

var george = new Cat({
    //name: "pussy",
    age: 11,
    temper: "grouchy"
});
george.save((err, cat) => {
    console.log(err ? "Error : " + err : "Success : " + cat);
});

/* Cat.find({}, (err, cats) => {
    if (err) return handleError(err);
    console.log(cats);
})
 */
