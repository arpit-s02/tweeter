const handleError = (err, req, res) => {
    // console.log("error handler")
    const status = err.status || 500;
    const message = err.message || "Something went wrong. Please try again later."

    res.status(status).json({message});
    // res.send("error");
}

export default handleError;