// import {createApp} from './commands/createApp.ts';
// import installDependencies from './commands/installDependencies.js';
// import setupDirectories from './configurations/directories.js';
// import setupFiles from './configurations/files.js';
// import { createFiles, createDirectories } from './utilities/fileOperations.js';
// import { modifyTsConfig, modifyViteConfig, removerArquivosGerados, modifyMainTxt } from './utilities/configModifications.js';

import { createApp } from "./commands/createApp";
import { installDependencies } from "./commands/installDependencies";
import { directories } from "./configurations/directories";
import { files } from "./configurations/files";
import { modifyTsConfig, modifyViteConfig, modifyMainTxt, removerArquivosGerados } from "./utilities/configModifications";
import { createDirectories, createFiles } from "./utilities/fileOperations";

const appName = process.argv[2] || 'my-react-app';

const packageManager = process.argv[3] || 'npm';

/**
 * Initializes a new React + TypeScript project.
 * @returns {Promise<void>} A promise that resolves when the project initialization is complete.
 */
async function initReact() {
    console.log(`Creating a new React + TypeScript project named ${appName}...`);
    createApp(appName);

    console.info('Setting up directories...');
    createDirectories({basePath: appName, directories});

    console.info('Creating initial files...');
    createFiles({basePath: appName,  files});

    console.info('Modifying configuration files...');
    modifyTsConfig(appName);
    modifyViteConfig(appName);
    modifyMainTxt(appName);

    console.info('Removing generated files...');
    removerArquivosGerados(appName);

    console.info('Installing dependencies...');
    installDependencies(appName, packageManager);

    console.log('Project initialization complete.');
}

initReact();
