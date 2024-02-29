"use strict";
// import {createApp} from './commands/createApp.ts';
// import installDependencies from './commands/installDependencies.js';
// import setupDirectories from './configurations/directories.js';
// import setupFiles from './configurations/files.js';
// import { createFiles, createDirectories } from './utilities/fileOperations.js';
// import { modifyTsConfig, modifyViteConfig, removerArquivosGerados, modifyMainTxt } from './utilities/configModifications.js';
Object.defineProperty(exports, "__esModule", { value: true });
const createApp_1 = require("./commands/createApp");
const installDependencies_1 = require("./commands/installDependencies");
const directories_1 = require("./configurations/directories");
const files_1 = require("./configurations/files");
const configModifications_1 = require("./utilities/configModifications");
const fileOperations_1 = require("./utilities/fileOperations");
const appName = process.argv[2] || 'my-react-app';
const packageManager = process.argv[3] || 'npm';
/**
 * Initializes a new React + TypeScript project.
 * @returns {Promise<void>} A promise that resolves when the project initialization is complete.
 */
async function initReact() {
    console.log(`Creating a new React + TypeScript project named ${appName}...`);
    (0, createApp_1.createApp)(appName);
    console.info('Setting up directories...');
    (0, fileOperations_1.createDirectories)({ basePath: appName, directories: directories_1.directories });
    console.info('Creating initial files...');
    (0, fileOperations_1.createFiles)({ basePath: appName, files: files_1.files });
    console.info('Modifying configuration files...');
    (0, configModifications_1.modifyTsConfig)(appName);
    (0, configModifications_1.modifyViteConfig)(appName);
    (0, configModifications_1.modifyMainTxt)(appName);
    console.info('Removing generated files...');
    (0, configModifications_1.removerArquivosGerados)(appName);
    console.info('Installing dependencies...');
    (0, installDependencies_1.installDependencies)(appName, packageManager);
    console.log('Project initialization complete.');
}
initReact();
