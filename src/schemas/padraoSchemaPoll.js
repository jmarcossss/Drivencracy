import joi from "joi";

export const padraoSchemaPoll = joi.object({
  title: joi.string().min(1).required(),
  expireAt: joi
    .string()
    .pattern(
      new RegExp("^[0-9]{4}[-][0-9]{2}[-][0-9]{2}[ ][0-9]{2}[:][0-9]{2}$")
    )
});

