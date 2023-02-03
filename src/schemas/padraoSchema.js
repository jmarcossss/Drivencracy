import joi from "joi";

//Formato especificado de uma votação
export const padraoSchemaPoll = joi.object({
  //Colocar o min(1) para garantir que só possam ser registrados títulos com ao menos uma letra
  //, ou seja, para garantir que não hajam títulos vazios
  title: joi.string().min(1).required(),
  expireAt: joi
    .string()
    .pattern(
      //Aqui serve para deixar no formato de ano/mês/dia e o horário que é solicitado
      new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}$")
    )
}); 

//Formato especificado de uma enquete
export const padraoSchemaChoice = joi.object({
  title: joi.string().min(1).required(),
  pollId: joi.string().required()
}); 

