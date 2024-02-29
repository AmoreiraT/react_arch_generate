const { execSync } = require('child_process');

function createApp(appName) {
    const createAppCommand = `npm create vite@latest ${appName} -- --template react-ts`;
    console.log(`Creating a new React + TypeScript project named ${appName}...`);
    execSync(createAppCommand, { stdio: 'inherit' });
}

module.exports = createApp;
