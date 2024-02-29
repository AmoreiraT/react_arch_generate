"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const child_process_1 = require("child_process");
function createApp(appName) {
    const createAppCommand = `npm create vite@latest ${appName} -- --template react-ts`;
    console.log(`Creating a new React + TypeScript project named ${appName}...`);
    (0, child_process_1.execSync)(createAppCommand, { stdio: 'inherit' });
}
exports.createApp = createApp;
