import { createUser, getUserByEmail } from "../services/user.services.js";
import hashPassword from "../utils/hashPassword.js";

/* HELPER FUNCTIONS START */

const validatePasswords = (password, confirmPassword) => {
    if(password !== confirmPassword) {
        const error = new Error("Password and confirm password do not match");
        error.status = 400;
        throw error;
    }
}

const checkUserExists = async (email) => {
    const existingUser = await getUserByEmail(email);

    if(existingUser) {
        const error = new Error("An account with this email already exists. Please try to login");
        error.status = 400;
        throw error;
    }
}

/* HELPER FUNCTIONS END */


/* MAIN FUNCTIONS START */

const register = async (req, res, next) => {
    try {
        const { email, password, confirmPassword } = req.body;

        validatePasswords(password, confirmPassword);

        await checkUserExists(email);

        const hashedPassword = await hashPassword(password);

        const userInfo = { ...req.body, password: hashedPassword }
        
        const newUser = await createUser(userInfo);

        const { password: _, createdAt, updatedAt, __v, ...userResponse } = newUser._doc;

        return res.status(201).json(userResponse);

    } catch(error) {
        console.error("Error registering user: ", error);
        next(error);
    }
}

/* MAIN FUNCTIONS END */

export { register };