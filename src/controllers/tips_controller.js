import {
    Tip
} from "../models/create_models.js";
import {
    bd
} from "../infra/bd.js";

export const Tip = (app) => {
    app.get("/tips", (req, res) => {
        res.send(bd.tips[Math.floor(Math.random() * bd.tips.length)])
    })
};