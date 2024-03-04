"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initReact = void 0;
const createApp_1 = require("./commands/createApp");
const installDependencies_1 = require("./commands/installDependencies");
const directories_1 = require("./configurations/directories");
const files_1 = require("./configurations/files");
const configModifications_1 = require("./utilities/configModifications");
const fileOperations_1 = require("./utilities/fileOperations");
async function initReact(appName, packageManager) {
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
exports.initReact = initReact;
// initReact(appName, packageManager);
