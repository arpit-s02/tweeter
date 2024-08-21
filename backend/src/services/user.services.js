import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const createUser = async (userInfo) => {
    const user = await User.create(userInfo);
    return user;
}

const getUserByEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
}

const hashPassword = async (password) => {
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    return hashedPassword;
}

const generateToken = (id, secret) => {
    const payload = { id };
    
    const token = jwt.sign(payload, secret, { expiresIn: '1h' });

    return token;
}

export { createUser, getUserByEmail, hashPassword, generateToken };