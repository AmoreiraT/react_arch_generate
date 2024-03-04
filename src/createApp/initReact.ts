import { createApp } from "./commands/createApp";
import { installDependencies } from "./commands/installDependencies";
import { directories } from "./configurations/directories";
import { files } from "./configurations/files";
import { modifyTsConfig, modifyViteConfig, modifyMainTxt, removerArquivosGerados } from "./utilities/configModifications";
import { createDirectories, createFiles } from "./utilities/fileOperations";



export async function initReact(appName: string, packageManager: string)  {
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

// initReact(appName, packageManager);
