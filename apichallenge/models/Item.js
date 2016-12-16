// {_id: "i1", category: "c1", name:{code: "height", text: "Altura"}, value: 1},
var mongoose = require("mongoose");
var Category = require("./Category");

var schema = mongoose.Schema({
    category: {type: mongoose.Schema.ObjectId, ref: "category"},
    name: {
        code: {type: String, required: true},
        text: {type: String, required: true}
    },
    value: {type: Number, required: false},
    coment: {type: String, required: false},
    image: {type: String, required: false}
});

module.exports = mongoose.model("item", schema, "item");
