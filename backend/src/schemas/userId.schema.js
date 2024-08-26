import Joi from "joi";

const validateUserId = (value, helper) => {
    const regex = /^[0-9a-fA-F]{24}$/;

    if(!regex.test(value)) {
        return helper.message("User id should be a valid mongo id");
    }

    return value;
}

const userIdSchema = Joi.object().keys({
    id: Joi.string().custom(validateUserId).required()
});

export default userIdSchema;