const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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
    "dependencies": {
        "@emotion/react": "^11.10.5",
        "@emotion/styled": "^11.10.5",
        "@mdx-js/rollup": "^3.0.0",
        "@react-hooks-library/core": "^0.5.2",
        "axios": "^1.6.7",
        "formik": "^2.4.5",
        "i18next": "^22.4.10",
        "react-device-detect": "^2.2.3",
        "react-error-boundary": "^4.0.12",
        "react-grid-layout": "^1.3.4",
        "react-hook-form": "^7.50.1",
        "react-i18next": "^12.2.0",
        "react-is": "^18.2.0",
        "react-jwt": "^1.1.8",
        "react-query": "^3.39.3",
        "react-refresh": "^0.14.0",
        "react-router-dom": "^6.22.0",
        "styled-components": "^5.3.6",
        "uuid": "^9.0.0",
        "webpack": "^5.90.1",
        "yup": "^1.0.2",
        "zustand": "^4.5.0"
    },
    "devDependencies": {
        "@babel/core": "^7.23.9",
        "@jest/globals": "^29.7.0",
        "@testing-library/jest-dom": "^6.4.2",
        "@testing-library/react": "^14.2.1",
        "@types/jest": "^29.5.12",
        "@types/node": "^18.13.0",
        "@types/react": "^18.0.28",
        "@types/react-dom": "^18.2.19",
        "@types/react-grid-layout": "^1.3.2",
        "@types/styled-components": "^5.1.26",
        "@types/uuid": "^9.0.1",
        "@typescript-eslint/eslint-plugin": "^5.52.0",
        "@typescript-eslint/parser": "^5.62.0",
        "@vitejs/plugin-react": "^4.2.1",
        "@vitest/ui": "^1.2.2",
        "babel-loader": "^9.1.3",
        "cross-env": "^7.0.3",
        "env-cmd": "^10.1.0",
        "eslint": "^8.34.0",
        "eslint-config-airbnb": "^19.0.4",
        "eslint-config-airbnb-typescript": "^17.0.0",
        "eslint-config-prettier": "^8.6.0",
        "eslint-plugin-import": "^2.27.5",
        "eslint-plugin-jsx-a11y": "^6.7.1",
        "eslint-plugin-prettier": "^4.2.1",
        "eslint-plugin-react": "^7.32.2",
        "eslint-plugin-react-hooks": "^4.6.0",
        "jest": "^29.7.0",
        "jsdom": "^24.0.0",
        "prettier": "^2.8.4",
        "prop-types": "^15.8.1",
        "typescript": "^5.2.2",
        "vite": "^5.0.12",
        "vitest": "^1.2.2"
    }
};

function installDependencies(appName, packageManager = 'npm') {
    process.chdir(appName);


    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = require(packageJsonPath);

    Object.assign(packageJson.scripts, additionalPackages.scripts);

    Object.assign(packageJson.dependencies, additionalPackages.dependencies);
    Object.assign(packageJson.devDependencies, additionalPackages.devDependencies);

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.info('Updated package.json scripts.');


    const dotEnv = 'npm i @dotenvx/dotenvx --save';

    execSync(dotEnv, { stdio: 'inherit' });

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

    execSync(installCommand, { stdio: 'inherit' });
    console.info('Dependencies installed successfully.');
}

module.exports = installDependencies;
