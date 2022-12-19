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

    const body = req.body;
    let vehicle: Vehicle;

    const { model, color, year, power } = body;
    vehicle = { model, color, year, power };

    vehicles.push(vehicle);

    res.status(201).send(vehicle);
})

module.exports = router;