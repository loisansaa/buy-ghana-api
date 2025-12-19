import Joi from "joi";


export const categoryValidator = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    image: Joi.string().uri().required()
});