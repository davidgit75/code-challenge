var router = require("express").Router();
var Category = require("./models/Category");
var Item = require("./models/Item");

router.get("/items", function(req, res){
    var dataResponse = {status: "error", data: {}};
    Category.find({})
    .then(function(cats){
        Item.find({})
        .then(function(items){
            dataResponse.status = "success";
            dataResponse.data.categories = cats;
            dataResponse.data.items = items;
            res.send(dataResponse);
        })
        .catch(function(err){
            res.send(dataResponse);
        });
    })
    .catch(function(err){
        res.send(dataResponse);
    });
});

router.post("/items", function(req, res){
    console.log("ADD COMMENT");
    console.log(req.body);
    res.send({msg: "Testing PUT comment"});
});

module.exports = router;
