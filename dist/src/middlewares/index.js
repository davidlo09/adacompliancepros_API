"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateName = exports.validateURL = exports.validateEmail = void 0;
const validator_1 = require("validator");
const validateEmail = (req, res, next) => {
    const { email } = req.body;
    if (!(0, validator_1.isEmail)(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }
    next();
};
exports.validateEmail = validateEmail;
const validateURL = (req, res, next) => {
    const { url } = req.body;
    if (!(0, validator_1.isURL)(url)) {
        return res.status(400).json({ error: 'Invalid URL' });
    }
    next();
};
exports.validateURL = validateURL;
const validateName = (req, res, next) => {
    const { fullName } = req.body;
    if (!fullName ||
        typeof fullName !== "string" ||
        fullName.length < 2 ||
        fullName.length > 50) {
        return res
            .status(400)
            .json({ error: "Invalid fullName. Name should contain only letters and be 2-50 characters long." });
    }
    next();
};
exports.validateName = validateName;
