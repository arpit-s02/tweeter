import { createUser, isEmailPresent } from "../services/user.services.js";
import hashPassword from "../utils/hashPassword.js";

const register = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({ message: "Password and confirm password do not match" });
        }

        const isUserRegistered = await isEmailPresent(email);
        
        if(isUserRegistered) {
            return res.status(400).json({ message: "An account with this email already exists. Please try to login" });
        }

        const hashedPassword = await hashPassword(password);

        const userInfo = { ...req.body, password: hashedPassword }
        
        const user = await createUser(userInfo);

        return res.status(201).json(user);

    } catch(error) {
        return res.status(500).json({message: "Couldn't create user"});
    }
}

export { register };