"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const execa_1 = require("execa");
const createApp = async (name) => {
    // const execa = (await import('execa')).default;
    await (0, execa_1.execa)('npx', ['create-react-app', name], { stdio: 'inherit' });
};
exports.createApp = createApp;
