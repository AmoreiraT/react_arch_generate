"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFiles = exports.createDirectories = void 0;
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
function createDirectories({ basePath, directories }) {
    directories.forEach(dir => {
        const dirPath = (0, node_path_1.join)(basePath, dir);
        if (!(0, node_fs_1.existsSync)(dirPath)) {
            (0, node_fs_1.mkdirSync)(dirPath, { recursive: true });
            console.log(`Created directory: ${dirPath}`);
        }
    });
}
exports.createDirectories = createDirectories;
function createFiles({ basePath, files }) {
    files.forEach(file => {
        const filePath = (0, node_path_1.join)(basePath, file.path);
        (0, node_fs_1.writeFileSync)(filePath, file.content);
        console.log(`Created file: ${filePath}`);
    });
}
exports.createFiles = createFiles;
