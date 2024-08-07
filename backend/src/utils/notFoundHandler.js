const handleNotFound = (req, res, next) => {
    return res.status(404).send("<h1>Page Not Found<h1>");
}

export default handleNotFound;