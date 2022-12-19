import express, {Express, Request, Response, Router} from "express";

const router: Router = express.Router();

interface Vehicle {
    model: string,
    color: string,
    year: number,
    power: number
}

let vehicles: Vehicle[] = [];

router.post("/add", (req: Request, res: Response) => {
    
    let vehicle: Vehicle = {
        model: req.body.model,
        color: req.body.color,
        year: req.body.year,
        power: req.body.power
    }

    vehicles.push(vehicle);

    res.status(201).send('Vehicle added');
})

module.exports = router;