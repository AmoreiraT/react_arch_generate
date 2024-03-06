import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const arquivosGerados = [
  'src/vite-env.d.ts',
  'src/index.css',
  'src/App.tsx',
  'src/App.css',
];

export function modifyViteConfig(basePath: string) {
  const viteConfigPath = `${basePath}/vite.config.ts`;
  const viteConfigFilePath = join(__dirname, 'templates', 'vite.config.txt');
  const viteConfigContent = readFileSync(viteConfigFilePath, 'utf8');

  writeFileSync(viteConfigPath, viteConfigContent);
  console.log('vite.config.ts modified successfully.');
}

export function modifyTsConfig(basePath: string) {
  const tsConfigPath = `${basePath}/tsconfig.json`;
  const tsConfigFilePath = join(__dirname, 'templates', 'tsconfig.txt');
  const tsConfigContent = readFileSync(tsConfigFilePath, 'utf8');

  writeFileSync(tsConfigPath, tsConfigContent);

  const tsConfigNodePath = `${basePath}/tsconfig.node.json`;
  const tsConfigNodeFilePath = join(__dirname, 'templates', 'tsconfig.node.txt');
  const tsConfigNodeContent = readFileSync(tsConfigNodeFilePath, 'utf8');

  writeFileSync(tsConfigNodePath, tsConfigNodeContent);
  console.log('tsconfig.json modified successfully.');
}

export function modifyMainTxt(basePath: string) {
  const mainPath = `${basePath}/src/main.tsx`;
  const mainFilePath = join(__dirname, 'templates', 'main.txt');
  const mainContent = readFileSync(mainFilePath, 'utf8');

  writeFileSync(mainPath, mainContent);

  console.log('main.tsx modified successfully.');
}

export function removerArquivosGerados(appName: string) {
  arquivosGerados.forEach((arquivo) => {
    const caminhoArquivo = join(appName, arquivo);
    if (existsSync(caminhoArquivo)) {
      unlinkSync(caminhoArquivo);
      console.log(`Arquivo removido: ${caminhoArquivo}`);
    }
  });
}


