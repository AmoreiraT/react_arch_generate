import { execSync } from 'child_process';

export function createApp(appName: string) {
    const createAppCommand = `npm create vite@latest ${appName} -- --template react-ts`;
    console.log(`Creating a new React + TypeScript project named ${appName}...`);
    execSync(createAppCommand, { stdio: 'inherit' });
}

