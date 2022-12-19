import express, {Express, Request, Response, Router} from "express";

const router: Router = express.Router();

interface Vehicle {
    model: string,
    color: string,
    year: number,
    power: number
}

interface Car {
    model: string,
    color: string,
    year: number,
    power: number
    bodyType: string,
    wheelCount: number
}

interface Boat {
    model: string,
    color: string,
    year: number,
    power: number,
    draft: number
}

interface Plane {
    model: string,
    color: string,
    year: number,
    power: number,
    wingspan: number
}

let vehicles: Vehicle[] = [];

router.post("/add", (req: Request, res: Response) => {

    const body = req.body;
    let vehicle: Vehicle;

    if ('bodyType' in body && 'wheelCount' in body) {
        const { model, color, year, power, bodyType, wheelCount } = body;
        vehicle = { model, color, year, power, bodyType, wheelCount } as Car;
    } else if ('draft' in body) {
        const { model, color, year, power, draft } = body;
        vehicle = { model, color, year, power, draft } as Boat;
    } else if ('wingspan' in body) {
        const { model, color, year, power, wingspan } = body;
        vehicle = { model, color, year, power, wingspan } as Plane;
    } else {
        const { model, color, year, power } = body;
        vehicle = { model, color, year, power };
    }

    vehicles.push(vehicle);

    res.status(201).send(vehicle);
})

module.exports = router;