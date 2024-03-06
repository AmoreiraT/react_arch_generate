"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removerArquivosGerados = exports.modifyMainTxt = exports.modifyTsConfig = exports.modifyViteConfig = void 0;
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const arquivosGerados = [
    'src/vite-env.d.ts',
    'src/index.css',
    'src/App.tsx',
    'src/App.css',
];
function modifyViteConfig(basePath) {
    const viteConfigPath = `${basePath}/vite.config.ts`;
    const viteConfigFilePath = (0, node_path_1.join)(__dirname, 'templates', 'vite.config.txt');
    const viteConfigContent = (0, node_fs_1.readFileSync)(viteConfigFilePath, 'utf8');
    (0, node_fs_1.writeFileSync)(viteConfigPath, viteConfigContent);
    console.log('vite.config.ts modified successfully.');
}
exports.modifyViteConfig = modifyViteConfig;
function modifyTsConfig(basePath) {
    const tsConfigPath = `${basePath}/tsconfig.json`;
    const tsConfigFilePath = (0, node_path_1.join)(__dirname, 'templates', 'tsconfig.txt');
    const tsConfigContent = (0, node_fs_1.readFileSync)(tsConfigFilePath, 'utf8');
    (0, node_fs_1.writeFileSync)(tsConfigPath, tsConfigContent);
    const tsConfigNodePath = `${basePath}/tsconfig.node.json`;
    const tsConfigNodeFilePath = (0, node_path_1.join)(__dirname, 'templates', 'tsconfig.node.txt');
    const tsConfigNodeContent = (0, node_fs_1.readFileSync)(tsConfigNodeFilePath, 'utf8');
    (0, node_fs_1.writeFileSync)(tsConfigNodePath, tsConfigNodeContent);
    console.log('tsconfig.json modified successfully.');
}
exports.modifyTsConfig = modifyTsConfig;
function modifyMainTxt(basePath) {
    const mainPath = `${basePath}/src/main.tsx`;
    const mainFilePath = (0, node_path_1.join)(__dirname, 'templates', 'main.txt');
    const mainContent = (0, node_fs_1.readFileSync)(mainFilePath, 'utf8');
    (0, node_fs_1.writeFileSync)(mainPath, mainContent);
    console.log('main.tsx modified successfully.');
}
exports.modifyMainTxt = modifyMainTxt;
function removerArquivosGerados(appName) {
    arquivosGerados.forEach((arquivo) => {
        const caminhoArquivo = (0, node_path_1.join)(appName, arquivo);
        if ((0, node_fs_1.existsSync)(caminhoArquivo)) {
            (0, node_fs_1.unlinkSync)(caminhoArquivo);
            console.log(`Arquivo removido: ${caminhoArquivo}`);
        }
    });
}
exports.removerArquivosGerados = removerArquivosGerados;
