import {//importando
    Tip
} from "../models/create_models.js";
import { //importando
    bd
} from "../infra/bd.js";

export const create = (app) => {
    app.post('/create', (req, res) => {
        const body = req.body
        const novoTip = new Tip(body.tip)
        bd.tips.push(novoTip)
        res.send({
            "Dica/Info": novoTip
        })
    })
};