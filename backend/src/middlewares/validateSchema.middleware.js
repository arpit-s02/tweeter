const validateSchema = (schema, key) => (req, res, next) => {
    try {
        const data = req[key];
        
        const { error } = schema.validate(data);
    
        if(error) {
            const err = new Error(error.details[0].message);
            err.status = 400;
            throw err;
        }
    
        next();

    } catch (error) {
        next(error);
    }
}

export default validateSchema;