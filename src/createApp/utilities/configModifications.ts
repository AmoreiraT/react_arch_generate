import fs from 'fs';
import path from 'path';

const arquivosGerados = [
  'src/vite-env.d.ts',
  'src/index.css',
  'src/App.tsx',
  'src/App.css',
];

export function modifyViteConfig(basePath: string) {
  const viteConfigPath = `${basePath}/vite.config.ts`;
  const viteConfigFilePath = path.join(__dirname, 'templates', 'vite.config.txt');
  const viteConfigContent = fs.readFileSync(viteConfigFilePath, 'utf8');

  fs.writeFileSync(viteConfigPath, viteConfigContent);
  console.log('vite.config.ts modified successfully.');
}

export function modifyTsConfig(basePath: string) {
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

export function modifyMainTxt(basePath: string) {
  const mainPath = `${basePath}/src/main.tsx`;
  const mainFilePath = path.join(__dirname, 'templates', 'main.txt');
  const mainContent = fs.readFileSync(mainFilePath, 'utf8');

  fs.writeFileSync(mainPath, mainContent);

  console.log('main.tsx modified successfully.');
}

export function removerArquivosGerados(appName: string) {
  arquivosGerados.forEach((arquivo) => {
    const caminhoArquivo = path.join(appName, arquivo);
    if (fs.existsSync(caminhoArquivo)) {
      fs.unlinkSync(caminhoArquivo);
      console.log(`Arquivo removido: ${caminhoArquivo}`);
    }
  });
}


