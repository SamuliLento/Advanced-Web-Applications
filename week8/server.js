const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const session = require('express-session');
const port = 3000;

function getUserByUsername(username) {
    return users.find(user => user.username === username)
}

//const initializePassport = require('./passport-config');
//initializePassport();

const users = [];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/api/user/register', async (req, res) => {
    if(!getUserByUsername(req.body.username)) {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            users.push({
                id: Date.now().toString(),
                username: req.body.username,
                password: hashedPassword
            });
            res.send(getUserByUsername(req.body.username));
        } catch {
            res.redirect("/api/user/register");
        };
    } else {
        res.sendStatus(400);
    };
});

app.get('/api/user/list', (req, res) => {
    res.send(users);
});

app.listen(port);