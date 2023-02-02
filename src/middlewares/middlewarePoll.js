import dayjs from "dayjs";
import { padraoSchemaPoll } from "../schemas/padraoSchemaPoll.js";

export function middlewarePoll(require, response, func) {
const body = require.body;
const { error } = padraoSchemaPoll.validate(body, { abortEarly: false });

if(error) {
    const errors = error.details.map(detail => detail.message);
    //Erro 400, sintaxe incorreta de alguma coisa
    return response.status(400).json({ errors });
}

if(!body.expireAt) {
    body.expireAt = dayjs().add(30, "day").format("YYYY-MM-DD HH:mm");
}
response.locals.body = body;
func();
}