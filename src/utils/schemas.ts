import Joi from 'joi';

const MIN_AGE = 4;
const MAX_AGE = 130;

export const userSchema = Joi.object().keys({
    id: Joi.string(),
    login: Joi.string().required(),
    password: Joi.string()
        .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/)
        .required(),
    age: Joi.number().min(MIN_AGE).max(MAX_AGE).required(),
    isDeleted: Joi.boolean()
});
