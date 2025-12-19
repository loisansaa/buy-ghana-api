import Joi from "joi";

export const productValidator = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(10).max(500).required(),  
    price: Joi.number().min(0).required(),
    category: Joi.string().hex().length(24).required(),
    image: Joi.string().uri().required(),
    isInStock: Joi.boolean()
});
