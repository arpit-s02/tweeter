const handleNotFound = (req, res, next) => {
    return res.status(404).send("Not found");
}

export default handleNotFound;