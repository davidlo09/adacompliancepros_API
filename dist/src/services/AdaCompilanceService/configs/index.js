"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAdaEmailPayload = void 0;
// import path from "path";
// import fs from "fs";
const generateAdaEmailLayout_1 = require("../utils/generateAdaEmailLayout");
const generateAdaEmailPayload = (data, { email, url, fullName }) => {
    // const pdfFilePath = path.join("assets", "Website Accessibility Guide.pdf");
    // const attachment = {
    // 	filename: "Website Accessibility Guide.pdf",
    // 	content: fs.readFileSync(pdfFilePath),
    // 	contentType: "application/pdf",
    // };
    return {
        subject: `Personalized Web Accessibility Test Results for: ${url}`,
        html: (0, generateAdaEmailLayout_1.generateAdaEmailLayout)(data, { email, url, fullName }),
    };
};
exports.generateAdaEmailPayload = generateAdaEmailPayload;
