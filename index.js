import express from "express";
const app = express()
const port = 3000

app.use(express.json())

import {
    create
} from "./controllers/create_controller.js";
create(app)

import {
    mostraTip
} from "./controllers/tips_controller.js";
mostraTip(app)

app.listen(port, () => {
    console.log("Rodando  3000, se divirta")
});