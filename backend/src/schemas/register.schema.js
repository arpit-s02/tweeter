import Joi from "joi";
import validatePasswordPattern from "../utils/validatePasswordPattern.js";

const schema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().custom(validatePasswordPattern).required(),
    confirmPassword: Joi.string().required(),
    profilePicture: Joi.string(),
    coverImage: Joi.string()
});

export default schema;