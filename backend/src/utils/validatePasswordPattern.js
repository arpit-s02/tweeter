const validatePasswordPattern = (value, helpers) => {
    const pattern = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}/;

    const isPatternValid = pattern.test(value);

    if(!isPatternValid) {
        return helpers.error("Password must have atleast one lowercase alphabet, one uppercase alphabet, one number and one special character and length should be atleast 8 characters");
    }

    return value;
}

export default validatePasswordPattern;