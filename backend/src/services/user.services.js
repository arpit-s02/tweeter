import User from "../models/user.model.js";

const createUser = async (userInfo) => {
    const user = await User.create(userInfo);
    return user;
}

const getUserByEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
}

export { createUser, getUserByEmail };