const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const router = express.Router();

router.post("/register/", (req, res, next) => {
    User.findOne({ email: req.body.email }, async (err, email) => {
        if (err) return next (err);
        if (!email) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            new User ({
                email: req.body.email,
                password: hashedPassword
            }).save((err) => {
                if (err) return next (err);
                return res.send(req.body);
            });
        } else {
            return res.sendStatus(403);
        }
    });
});

module.exports = router;