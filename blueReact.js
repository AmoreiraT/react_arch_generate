const createApp = require('./commands/createApp.js');
const installDependencies = require('./commands/installDependencies.js');
const setupDirectories = require('./configurations/directories.js');
const setupFiles = require('./configurations/files.js');
const { createFiles, createDirectories } = require('./utilities/fileOperations.js');
const { modifyTsConfig, modifyViteConfig } = require('./utilities/configModifications.js');

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
    createDirectories(appName, setupDirectories);

    console.info('Creating initial files...');
    createFiles(appName, setupFiles);

    console.info('Modifying configuration files...');
    modifyTsConfig(appName);
    modifyViteConfig(appName);

    console.info('Installing dependencies...');
    installDependencies(appName, packageManager);

    console.log('Project initialization complete.');
}

initReact();
