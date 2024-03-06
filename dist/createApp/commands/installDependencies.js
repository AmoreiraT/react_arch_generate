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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.installDependencies = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dependencies = [
    '@emotion/react',
    '@emotion/styled',
    '@mdx-js/rollup',
    '@react-hooks-library/core',
    'axios',
    'formik',
    'i18next',
    'react-device-detect',
    'react-error-boundary',
    'react-grid-layout',
    'react-hook-form',
    'react-i18next',
    'react-is',
    'react-jwt',
    'react-query',
    'react-router-dom',
    'styled-components',
    'uuid',
    'webpack',
    'yup',
    'zustand'
];
const devDependencies = [
    '@babel/core',
    '@jest/globals',
    '@testing-library/jest-dom',
    '@testing-library/react',
    '@types/jest',
    '@types/node',
    '@types/react',
    '@types/react-dom',
    '@types/react-grid-layout',
    '@types/styled-components',
    '@types/uuid',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    '@vitejs/plugin-react',
    '@vitest/ui',
    'babel-loader',
    'cross-env',
    'env-cmd',
    'eslint',
    // 'eslint-config-airbnb',
    // 'eslint-config-airbnb-typescript',
    'eslint-config-prettier',
    'eslint-plugin-import',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-prettier',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'jest',
    'jsdom',
    'prettier',
    'prop-types',
    'typescript',
    'vite',
    'vitest'
];
const additionalPackages = {
    "scripts": {
        "dev": "env-cmd -f .env vite --host",
        "dev:uat": "env-cmd -f .env.uat vite --host",
        "dev:sit": "env-cmd -f .env.sit vite --host",
        "dev:prod": "env-cmd -f .env.prod vite --host",
        "dev:local": "env-cmd -f .env.local vite --host",
        "build": "tsc && vite build",
        "build:uat": "env-cmd -f .env.uat vite build",
        "build:sit": "env-cmd -f .env.sit vite build",
        "build:prod": "env-cmd -f .env.prod vite build",
        "build:local": "env-cmd -f .env.local vite build",
        "preview": "vite preview --host",
        "lint": "eslint src --ext .ts,.tsx",
        "lint:fix": "eslint --fix src --ext .ts,.tsx",
        "format": "prettier --write 'src/**/*.{ts,tsx}' --config .prettierrc.cjs",
        "test": "vitest",
        "vitest-ui": "vitest --ui"
    },
};
async function installDependencies(appName, packageManager = 'npm') {
    process.chdir(appName);
    const packageJsonPath = path_1.default.join(process.cwd(), 'package.json');
    const packageJson = require(packageJsonPath);
    Object.assign(packageJson.scripts, additionalPackages.scripts);
    fs_1.default.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.info('Updated package.json scripts.');
    const dotEnv = 'npm i @dotenvx/dotenvx --save';
    // execSync(dotEnv, { stdio: 'inherit' });
    const execa = (await Promise.resolve().then(() => __importStar(require('execa')))).default;
    await execa.execa(dotEnv, { stdio: 'inherit' });
    console.info(`to futher implements chooses btween yarn pnpm and npm ...`);
    console.info(`Installing dependencies using ${packageManager}...`);
    let installCommand;
    switch (packageManager) {
        case 'yarn':
            installCommand = 'npm install';
            break;
        case 'pnpm':
            installCommand = 'npm install';
            break;
        default:
            installCommand = 'npm install';
    }
    // execSync(installCommand, { stdio: 'inherit' });
    await execa.execa(installCommand, { stdio: 'inherit' });
    console.info('Dependencies installed successfully.');
    await execa.execa(`${packageManager} audit fix --force`, { stdio: 'inherit' });
    console.info('Dependencies audit fixed successfully.');
    console.info(`Installing another necessaries dependencies using ${packageManager}...`);
    for (const dependency of dependencies) {
        console.info(`Installing  ${dependency}...`);
        await execa.execa(`${packageManager} i ${dependency} --save`, { stdio: 'inherit' });
    }
    console.info(`Installing another necessaries devDependencies using ${packageManager}...`);
    for (const devDependency of devDependencies) {
        console.info(`Installing  ${devDependency}...`);
        await execa.execa(`${packageManager} i ${devDependency} --save`, { stdio: 'inherit' });
    }
    console.log(`%cAll ready!`, "color: yellow; font-style: italic; background-color: blue;padding: 2px");
}
exports.installDependencies = installDependencies;
