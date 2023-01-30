const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require('bcrypt');
const router = express.Router();

router.post("/register/", (req, res, next) => {
    User.findOne({ email: req.body.email }, async (err, user) => {
        if (err) {
            console.log(err);
            throw err;
        };
        if (user) {
            return res.status(403).json({ email: "Email already in use."});
        } else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    if (err) throw err;
                    User.create(
                        {
                            email: req.body.email,
                            password: hash
                        },
                        (err, ok) => {
                            if (err) throw err;
                            return res.redirect("/");
                        }
                    );
                });
            });
        }
    });
});

module.exports = router;
