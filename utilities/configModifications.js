const fs = require('fs');
const path = require('path');

const arquivosGerados = [
  'src/vite-env.d.ts',
  'src/index.css',
  'src/App.tsx',
  'src/App.css',
];

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

function modifyMainTxt(basePath) {
  const mainPath = `${basePath}/src/main.tsx`;
  const mainFilePath = path.join(__dirname, 'templates', 'main.txt');
  const mainContent = fs.readFileSync(mainFilePath, 'utf8');

  fs.writeFileSync(mainPath, mainContent);

  console.log('main.tsx modified successfully.');
}

function removerArquivosGerados(appName) {
  arquivosGerados.forEach((arquivo) => {
    const caminhoArquivo = path.join(appName, arquivo);
    if (fs.existsSync(caminhoArquivo)) {
      fs.unlinkSync(caminhoArquivo);
      console.log(`Arquivo removido: ${caminhoArquivo}`);
    }
  });
}

module.exports = { modifyViteConfig, modifyTsConfig, removerArquivosGerados, modifyMainTxt };
