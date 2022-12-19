"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
let vehicles = [];
router.post("/add", (req, res) => {
    const body = req.body;
    let vehicle;
    const { model, color, year, power } = body;
    vehicle = { model, color, year, power };
    vehicles.push(vehicle);
    res.status(201).send('Vehicle added');
});
module.exports = router;
