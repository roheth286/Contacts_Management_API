const constants = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

    let title;

    switch (statusCode) {
        case constants.VALIDATION_ERROR: title = "Validation Failed"; break;
        case constants.NOT_FOUND: title = "Not Found"; break;
        case constants.FORBIDDEN: title = "Forbidden"; break;
        case constants.UNAUTHORIZED: title = "Unauthorized"; break;
        case constants.SERVER_ERROR: title = "Server Error"; break;
        default:
            title = "Error";
            break;
    }

    res.status(statusCode).json({
        title,
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    });
};

module.exports = errorHandler;
