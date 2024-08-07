const validateRegister = (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;

    if(!name) {
        return res.status(400).json({ message: "Name is a required field" });
    }

    else if(!email) {
        return res.status(400).json({ message: "Email is a required field" });
    }

    else if(!password) {
        return res.status(400).json({ message: "Password is a required field" });
    }

    else if(password !== confirmPassword) {
        return res.status(400).json({ message: "Password and confirm password do not match!" });
    }

    delete req.body.confirmPassword;

    next();
}

export default validateRegister;