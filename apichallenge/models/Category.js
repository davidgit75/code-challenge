var mongoose = require("mongoose");

var schema = mongoose.Schema({
    name: {
        code: {type: String, required: true},
        text: {type: String, required: true}
    }
});

module.exports = mongoose.model("category", schema, "category");
