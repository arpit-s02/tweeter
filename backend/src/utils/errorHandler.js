const handleError = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong. Please try again later."

    return res.status(status).json({ message, status });
}

export default handleError;