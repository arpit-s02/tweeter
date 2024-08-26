import bcrypt from "bcrypt";
import { JWT_SECRET } from "../../config.js";
import { createUser, generateToken, getUserByEmail, getUserById, hashPassword } from "../services/user.services.js";

/* HELPER FUNCTIONS START */

const validatePasswords = (password, confirmPassword) => {
    if(password !== confirmPassword) {
        const error = new Error("Password and confirm password do not match");
        error.status = 400;
        throw error;
    }
}

const verifyPassword = async (password, hashedPassword) => {
    const result = await bcrypt.compare(password, hashedPassword);

    if(!result) return false;

    return true;
}

/* HELPER FUNCTIONS END */


/* MAIN FUNCTIONS START */

const register = async (req, res, next) => {
    try {
        const { email, password, confirmPassword } = req.body;

        validatePasswords(password, confirmPassword);

        const user = await getUserByEmail(email);

        if(user) {
            const error = new Error("An account with this email already exists. Please try to login");
            error.status = 400;
            throw error;
        }

        const hashedPassword = await hashPassword(password);

        const userInfo = { ...req.body, password: hashedPassword }
        
        const newUser = await createUser(userInfo);

        const { password: _, createdAt, updatedAt, __v, ...userResponse } = newUser._doc;

        return res.status(201).json(userResponse);

    } catch(error) {
        console.error("Error registering user:", error);
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await getUserByEmail(email);

        if(!user) {
            const error = new Error("Invalid email or password");
            error.status = 400;
            throw error;
        }

        const passwordVerificationResult = await verifyPassword(password, user.password);

        if(!passwordVerificationResult) {
            const error = new Error("Invalid email or password");
            error.status = 400;
            throw error;
        }

        const token = generateToken(user._id, JWT_SECRET);

        return res.json({ name: user.name, token });
        
    } catch(error) {
        console.error("Error logging in user:", error);
        next(error)
    }
}

const getUserDetails = async (req, res, next) => {
    try {
        const { id } = req.params;

        const user = await getUserById(id);

        if(!user) {
            const err = new Error("User Not Found!");
            err.status = 404;
            throw err;
        }

        return res.json(user);

    } catch(error) {
        console.error(error);
        next(error);
    }
}

/* MAIN FUNCTIONS END */

export { register, login, getUserDetails };