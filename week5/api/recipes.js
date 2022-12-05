const express = require("express");
const mongoose = require("mongoose");
const Recipe = require("../models/Recipe");
const router = express.Router();

router.get('/:food', function(req, res, next) {
    res.send({
        name: req.params.food,
        ingredients: ["frozen pizza base", "tomato sauce", "mozzarellas"],
        instructions: ["preheat oven 225C", "slice mozzarella", "put tomato sauce on pizza base",
    "put mozzarella slices on pizza", "bake for 15 min"]
    });
  });

router.post("/", (req, res, next) => {
    Recipe.findOne({ name: req.body.name }, (err, name) => {
        if(err) return next(err);
        if(!name) {
            new Recipe({
                name: req.body.name,
                ingredients: req.body.ingredients,
                instructions: req.body.instructions
            }).save((err) => {
                if(err) return next(err);
                return res.send(req.body);
            });

        } else {
            return res.status(403).send("Already has that recipe!");
        }
    });
})

module.exports = router;