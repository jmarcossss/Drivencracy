import joi from "joi";

//Formato especificado de uma enquete
export const padraoSchemaChoice = joi.object({
    title: joi.string().min(1).required(),
    pollId: joi.string().required()
}) 