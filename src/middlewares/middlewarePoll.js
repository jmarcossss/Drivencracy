import dayjs from "dayjs";
import { padraoSchemaPoll } from "../schemas/padraoSchema.js";

export function middlewarePoll(require, response, func) {
const body = require.body;
const { error } = padraoSchemaPoll.validate(body, { abortEarly: false });

if(error) {
    const leg = error.details.map(detail => detail.message);
    //Erro 400, sintaxe incorreta de alguma coisa
    return response.status(400).json({ leg });
}

if(!body.expireAt) {
    body.expireAt = dayjs().add(30, "day").format("YYYY-MM-DD HH:mm");
}
response.locals.body = body;
func();
}