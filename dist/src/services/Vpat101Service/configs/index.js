"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateVpat101EmailPayload = void 0;
const generateVpat101EmailLayout_1 = require("../utils/generateVpat101EmailLayout");
const generateVpat101EmailPayload = (data) => {
    return {
        subject: `VPAT 101 Explainer`,
        html: (0, generateVpat101EmailLayout_1.generateAdaEmailLayout)(data),
    };
};
exports.generateVpat101EmailPayload = generateVpat101EmailPayload;
