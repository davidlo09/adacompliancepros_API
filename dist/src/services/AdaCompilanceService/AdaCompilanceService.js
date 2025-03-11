"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const axios_1 = __importDefault(require("axios"));
require("dotenv").config();
const EmailService_1 = __importDefault(require("../EmailService"));
const cfg = __importStar(require("./configs"));
const consts = __importStar(require("./constants"));
class AdaCompilanceService {
    constructor() {
        this.waveApiKey = process.env.WAVE_API_KEY;
    }
    getAdaReport(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios_1.default.get(`${consts.waveApiBaseUrl}?key=${this.waveApiKey}&url=${url}`);
            }
            catch (error) {
                throw new Error(`There was an error getting report: ${error.message}`);
            }
        });
    }
    handleRequest(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, url, fullName }) {
            const report = yield this.getAdaReport(url);
            const formattedReport = this.formatCategories(report.data.categories);
            if (!report.data.status.success) {
                throw new Error(`Cannot generate report for URL ${url}. Please check it's correctness`);
            }
            const emailPayload = cfg.generateAdaEmailPayload(formattedReport, { email, url, fullName });
            const { response } = yield EmailService_1.default.sendMail(Object.assign(Object.assign({}, emailPayload), { to: email }));
            if (response.startsWith("250 OK")) {
                return `The report for ${url} was successfully sent to ${email}`;
            }
        });
    }
    formatCategories(categories) {
        return Object.entries(categories).map(([key, value]) => {
            const { title, description } = this.getCategoryTitleAndDescription(key);
            return {
                title,
                description,
                count: value.count,
            };
        });
    }
    getCategoryTitleAndDescription(category) {
        switch (category) {
            case "error":
                return {
                    title: "Errors within the code",
                    description: "for the web page itself such as empty links, missing spaces, unlabeled form elements, or alternative text.",
                };
            case "contrast":
                return {
                    title: "Contrast errors",
                    description: "that make elements of pages difficult or impossible for people with low vision to see or use.",
                };
            case "alert":
                return {
                    title: "Alerts",
                    description: "such as possible headers that aren’t identified or underlined text that can cause issues with screen readers or other required accessibility tools.",
                };
            case "feature":
                return {
                    title: "Feature issues",
                    description: "such as missing information or missing alternative text to explain images that blind people can’t see.",
                };
            case "structure":
                return {
                    title: "Structural problems",
                    description: "with headers, footers, lists, search capabilities and tables that make navigating a website with a screen reader impossible to see or use.",
                };
            case "aria":
                return {
                    title: "Incorrect usages",
                    description: "of special annotations that enable digital accessibility, such as Accessible Rich Internet Applications (ARIA).",
                };
        }
    }
}
exports.default = new AdaCompilanceService();
