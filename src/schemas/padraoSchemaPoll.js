import joi from "joi";

//Formato especificado de uma votação
export const padraoSchemaPoll = joi.object({
  //Colocar o min(1) para garantir que só possam ser registrados títulos com ao menos uma letra
  //, ou seja, para garantir que não hajam títulos vazios
  title: joi.string().min(1).required(),
  expireAt: joi
    .string()
    .pattern(
      new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}$")
    )
});

