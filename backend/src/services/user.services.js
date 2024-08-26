import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const createUser = async (userInfo) => {
    const user = await User.create(userInfo);
    return user;
}

const getUserById = async (id) => {
    const userId = new mongoose.Types.ObjectId(id);

    const user = await User.aggregate([
        {
            $match: { _id: userId }
        },
        {
            $project: {
                name: 1,
                email: 1,
                bio: 1,
                profilePicture: 1,
                coverImage: 1,
                followers: { $size: "$followers" },
                following: { $size: "$following" },
                savedTweets: { $size: "$savedTweets" }
            }
        }
    ]);

    return user.length ? user[0] : null;
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

export { createUser, getUserByEmail, hashPassword, generateToken, getUserById };