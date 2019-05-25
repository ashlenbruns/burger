const express = require('express');
var router = express.Router();    
var burger = require('../models/burger');    

// ROUTES
router.get("/", function(req, res){
    var burgerMenu = [];
    var burgersEaten = [];
    
    burger.all(function(data){
    
    data.forEach(burger => {
        if(burger.devoured == 1){
            burgersEaten.push(burger);
            console.log("Devoured: " +burger.burger_name);
        }
        else{
            burgerMenu.push(burger);
            console.log("Available: " +burger.burger_name);
        }
    });

        var hbsObject = {
            burgerMenu: burgerMenu,
            burgersEaten: burgersEaten
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    console.log(req.body.burger_name + " | " +req.body.devoured);
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured] ,function(result){
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " +req.params.id;
    console.log("condition: " + condition);

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if(result.changeRows === 0){
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

// Export
module.exports = router;