import User from "../models/user.model.js";

const createUser = async (userInfo) => {
    const user = await User.create(userInfo);
    return user;
}

export { createUser };