"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTransporter = void 0;
require('dotenv').config();
const host = process.env.EMAIL_HOST;
const port = Number(process.env.EMAIL_PORT);
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;
exports.emailTransporter = {
    host: host,
    port: port,
    secure: true,
    auth: {
        user: user,
        pass: pass,
    },
    tls: { rejectUnauthorized: false },
};
