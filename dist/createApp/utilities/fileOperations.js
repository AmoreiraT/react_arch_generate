"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFiles = exports.createDirectories = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function createDirectories({ basePath, directories }) {
    directories.forEach(dir => {
        const dirPath = path_1.default.join(basePath, dir);
        if (!fs_1.default.existsSync(dirPath)) {
            fs_1.default.mkdirSync(dirPath, { recursive: true });
            console.log(`Created directory: ${dirPath}`);
        }
    });
}
exports.createDirectories = createDirectories;
function createFiles({ basePath, files }) {
    files.forEach(file => {
        const filePath = path_1.default.join(basePath, file.path);
        fs_1.default.writeFileSync(filePath, file.content);
        console.log(`Created file: ${filePath}`);
    });
}
exports.createFiles = createFiles;
