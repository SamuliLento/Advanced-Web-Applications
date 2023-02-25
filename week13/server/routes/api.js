const express = require('express');
const mongoose = require("mongoose");
const Book = require("../models/Book");
const router = express.Router();

router.post('/book/', (req, res, next) => {
    Book.findOne({ name: req.body.name }, (err, name) => {
        if(err) return next(err);
        if(!name) {
            new Book({
                name: req.body.name,
                author: req.body.author,
                pages: req.body.pages
            }).save((err) => {
                if(err) return next(err);
                return res.send(req.body);
            });
        } else {
            return res.status(403).send("Already has that book!");
        }
    });
});

module.exports = router;