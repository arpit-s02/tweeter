import User from "../models/user.model.js";

const createUser = async (userInfo) => {
    const user = await User.create(userInfo);
    return user;
}

const isEmailPresent = async (email) => {
    const user = await User.findOne({ email });
    if(user) return true;
    else return false;
}

export { createUser, isEmailPresent };