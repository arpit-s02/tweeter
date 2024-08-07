import { createUser } from "../services/user.services.js";

const register = (req, res) => {
    try {
        const userInfo = req.body;
        const user = createUser(userInfo);
        res.status(201).json(user);

    } catch(error) {
        res.status(500).json({message: "Couldn't create user"});
    }
}

export { register };