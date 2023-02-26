const express = require('express');
const mongoose = require("mongoose");
const Book = require("../models/Book");
const router = express.Router();

router.get('/:name', (req, res, next) => {
    Book.findOne({ name: req.params.name }, (err, book) => {
        if(err) return next(err);
        if(book) {
            return res.json(book);
        } else {
            return res.status(404).send("Book not found!");
        }
    });
});

module.exports = router;