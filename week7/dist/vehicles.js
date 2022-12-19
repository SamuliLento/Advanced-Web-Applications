"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
let vehicles = [];
router.post("/add", (req, res) => {
    let vehicle = {
        model: req.body.model,
        color: req.body.color,
        year: req.body.year,
        power: req.body.power
    };
    vehicles.push(vehicle);
    console.log(vehicles);
    res.status(201).send('Vehicle added');
});
module.exports = router;
