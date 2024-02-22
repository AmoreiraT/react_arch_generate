const fs = require('fs');
const path = require('path');

function modifyViteConfig(basePath) {
  const viteConfigPath = `${basePath}/vite.config.ts`;
  const viteConfigFilePath = path.join(__dirname, 'templates', 'vite.config.txt');
  const viteConfigContent = fs.readFileSync(viteConfigFilePath, 'utf8');

  fs.writeFileSync(viteConfigPath, viteConfigContent);
  console.log('vite.config.ts modified successfully.');
}

function modifyTsConfig(basePath) {
  const tsConfigPath = `${basePath}/tsconfig.json`;
  const tsConfigFilePath = path.join(__dirname, 'templates', 'tsconfig.txt');
  const tsConfigContent = fs.readFileSync(tsConfigFilePath, 'utf8');

  fs.writeFileSync(tsConfigPath, tsConfigContent);

  const tsConfigNodePath = `${basePath}/tsconfig.node.json`;
  const tsConfigNodeFilePath = path.join(__dirname, 'templates', 'tsconfig.node.txt');
  const tsConfigNodeContent = fs.readFileSync(tsConfigNodeFilePath, 'utf8');

  fs.writeFileSync(tsConfigNodePath, tsConfigNodeContent);
  console.log('tsconfig.json modified successfully.');
}

module.exports = { modifyViteConfig, modifyTsConfig };
