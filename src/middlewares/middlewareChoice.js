import { padraoSchemaChoice } from "../schemas/padraoSchema.js";

export default function middlewareChoice(require, response, func) {
const choiceData = require.body;
const { error } = padraoSchemaChoice.validate(choiceData, { abortEarly: false });

if(error) {
    const leg = error.details.map(detail => detail.message);
    return response.status(400).json({ leg });
}
response.locals.choiceData = choiceData;
func();
} 