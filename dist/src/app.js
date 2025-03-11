"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)(), express_1.default.json(), (0, morgan_1.default)('dev'));
app.get('/', (_, res) => {
    res.send(true);
});
app.use('/api', (_, __, next) => next(0), routes_1.default);
app.use('/assets', express_1.default.static('assets'));
app.use((_, res) => res.status(404).json({ error: `Not found` }));
app.use((e, _, res) => {
    const msg = e.message || 'Internal Server Error';
    return res.status(500).json({ error: msg });
});
exports.default = app;
