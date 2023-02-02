import { padraoSchemaChoice } from "../schemas/padraoSchemaChoice.js";

export default function middlewareChoice(require, response, func) {
const choiceData = require.body;
const { error } = padraoSchemaChoice.validate(choiceData, { abortEarly: false });

if(error) {
    const errors = error.details.map(detail => detail.message);
    return response.status(400).json({ errors });
}
response.locals.choiceData = choiceData;
func();
}