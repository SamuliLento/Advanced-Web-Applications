
let hello = {
    msg: "Hello world"
};

const express = require("express");
const os = require("os");
const path = require("path");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
    res.json(hello);
});

app.get("/echo/:id", (req, res) => {
    res.json(req.params);
});

app.use(express.static(path.join(__dirname, "hello")));

app.listen(port, () => console.log(`Server listening a port ${port}!`));