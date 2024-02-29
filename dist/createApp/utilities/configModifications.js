"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removerArquivosGerados = exports.modifyMainTxt = exports.modifyTsConfig = exports.modifyViteConfig = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const arquivosGerados = [
    'src/vite-env.d.ts',
    'src/index.css',
    'src/App.tsx',
    'src/App.css',
];
function modifyViteConfig(basePath) {
    const viteConfigPath = `${basePath}/vite.config.ts`;
    const viteConfigFilePath = path_1.default.join(__dirname, 'templates', 'vite.config.txt');
    const viteConfigContent = fs_1.default.readFileSync(viteConfigFilePath, 'utf8');
    fs_1.default.writeFileSync(viteConfigPath, viteConfigContent);
    console.log('vite.config.ts modified successfully.');
}
exports.modifyViteConfig = modifyViteConfig;
function modifyTsConfig(basePath) {
    const tsConfigPath = `${basePath}/tsconfig.json`;
    const tsConfigFilePath = path_1.default.join(__dirname, 'templates', 'tsconfig.txt');
    const tsConfigContent = fs_1.default.readFileSync(tsConfigFilePath, 'utf8');
    fs_1.default.writeFileSync(tsConfigPath, tsConfigContent);
    const tsConfigNodePath = `${basePath}/tsconfig.node.json`;
    const tsConfigNodeFilePath = path_1.default.join(__dirname, 'templates', 'tsconfig.node.txt');
    const tsConfigNodeContent = fs_1.default.readFileSync(tsConfigNodeFilePath, 'utf8');
    fs_1.default.writeFileSync(tsConfigNodePath, tsConfigNodeContent);
    console.log('tsconfig.json modified successfully.');
}
exports.modifyTsConfig = modifyTsConfig;
function modifyMainTxt(basePath) {
    const mainPath = `${basePath}/src/main.tsx`;
    const mainFilePath = path_1.default.join(__dirname, 'templates', 'main.txt');
    const mainContent = fs_1.default.readFileSync(mainFilePath, 'utf8');
    fs_1.default.writeFileSync(mainPath, mainContent);
    console.log('main.tsx modified successfully.');
}
exports.modifyMainTxt = modifyMainTxt;
function removerArquivosGerados(appName) {
    arquivosGerados.forEach((arquivo) => {
        const caminhoArquivo = path_1.default.join(appName, arquivo);
        if (fs_1.default.existsSync(caminhoArquivo)) {
            fs_1.default.unlinkSync(caminhoArquivo);
            console.log(`Arquivo removido: ${caminhoArquivo}`);
        }
    });
}
exports.removerArquivosGerados = removerArquivosGerados;
