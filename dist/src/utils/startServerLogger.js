"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServerLogger = exports.setHost = void 0;
const os_1 = __importDefault(require("os"));
const isLocal = () => os_1.default.hostname().split('.').pop() === 'local';
const setHost = () => isLocal() ? `http://localhost` : `http://${os_1.default.hostname()}`;
exports.setHost = setHost;
const startServerLogger = (port) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('');
    console.log(`server ${(0, exports.setHost)()}:${port} is running`);
    console.log('');
});
exports.startServerLogger = startServerLogger;
