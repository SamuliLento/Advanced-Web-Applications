import express, {Express, Request, Response} from "express";

const app: Express = express();
const port: number = 5000;

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello world")
})

app.use("/vehicle", require("./vehicles.ts"));

app.listen(port, () => {
    console.log("Server is up'n'running at http://localhost:" + port)
})