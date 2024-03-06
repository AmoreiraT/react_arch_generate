"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.files = void 0;
const path_1 = require("path");
const node_fs_1 = require("node:fs");
// core/http/protocols
const protocolsIndexFilePath = (0, path_1.join)(__dirname, 'templates', 'core', 'http', 'protocols', 'index.txt');
const protocolsBodyFilePath = (0, path_1.join)(__dirname, 'templates', 'core', 'http', 'protocols', 'body.txt');
const protocolsDtoFilePath = (0, path_1.join)(__dirname, 'templates', 'core', 'http', 'protocols', 'dto.txt');
const protocolsRequestFilePath = (0, path_1.join)(__dirname, 'templates', 'core', 'http', 'protocols', 'request.txt');
const protocolsResponseFilePath = (0, path_1.join)(__dirname, 'templates', 'core', 'http', 'protocols', 'response.txt');
const protocolsMethodFilePath = (0, path_1.join)(__dirname, 'templates', 'core', 'http', 'protocols', 'method.txt');
const protocolsStatusCodeFilePath = (0, path_1.join)(__dirname, 'templates', 'core', 'http', 'protocols', 'status-code.txt');
const protocolsUrlFilePath = (0, path_1.join)(__dirname, 'templates', 'core', 'http', 'protocols', 'url.txt');
const protocolsIndexContent = (0, node_fs_1.readFileSync)(protocolsIndexFilePath, 'utf8');
const protocolsBodyContent = (0, node_fs_1.readFileSync)(protocolsBodyFilePath, 'utf8');
const protocolsDtoContent = (0, node_fs_1.readFileSync)(protocolsDtoFilePath, 'utf8');
const protocolsRequestContent = (0, node_fs_1.readFileSync)(protocolsRequestFilePath, 'utf8');
const protocolsResponseContent = (0, node_fs_1.readFileSync)(protocolsResponseFilePath, 'utf8');
const protocolsMethodContent = (0, node_fs_1.readFileSync)(protocolsMethodFilePath, 'utf8');
const protocolsStatusCodeContent = (0, node_fs_1.readFileSync)(protocolsStatusCodeFilePath, 'utf8');
const protocolsUrlContent = (0, node_fs_1.readFileSync)(protocolsUrlFilePath, 'utf8');
// core/http
const httpIndexFilePath = (0, path_1.join)(__dirname, 'templates', 'core', 'http', 'index.txt');
const httpIndexContent = (0, node_fs_1.readFileSync)(httpIndexFilePath, 'utf8');
// core/error
const errorIndexFilePath = (0, path_1.join)(__dirname, 'templates', 'core', 'error', 'index.txt');
const errorIndexContent = (0, node_fs_1.readFileSync)(errorIndexFilePath, 'utf8');
const errorApiFilePath = (0, path_1.join)(__dirname, 'templates', 'core', 'error', 'api.txt');
const errorApiContent = (0, node_fs_1.readFileSync)(errorApiFilePath, 'utf8');
const errorErrorResponseFilePath = (0, path_1.join)(__dirname, 'templates', 'core', 'error', 'errorResponse.txt');
const errorErrorResponseContent = (0, node_fs_1.readFileSync)(errorErrorResponseFilePath, 'utf8');
const errorStatusFilePath = (0, path_1.join)(__dirname, 'templates', 'core', 'error', 'status.txt');
const errorStatusContent = (0, node_fs_1.readFileSync)(errorStatusFilePath, 'utf8');
const errorTimeoutFilePath = (0, path_1.join)(__dirname, 'templates', 'core', 'error', 'timeout.txt');
const errorTimeoutContent = (0, node_fs_1.readFileSync)(errorTimeoutFilePath, 'utf8');
const errorUnknownFilePath = (0, path_1.join)(__dirname, 'templates', 'core', 'error', 'unknown.txt');
const errorUnknownContent = (0, node_fs_1.readFileSync)(errorUnknownFilePath, 'utf8');
// @types
const typesEnvFilePath = (0, path_1.join)(__dirname, 'templates', '@types', 'env.d.txt');
const typesEnvContent = (0, node_fs_1.readFileSync)(typesEnvFilePath, 'utf8');
// shared/utils
const sharedUtilsCrashCrashFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'crash', 'crash.txt');
const sharedUtilsCrashCrashContent = (0, node_fs_1.readFileSync)(sharedUtilsCrashCrashFilePath, 'utf8');
const sharedUtilsLocalStorageIndexFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'localStorage', 'index.txt');
const sharedUtilsLocalStorageIndexContent = (0, node_fs_1.readFileSync)(sharedUtilsLocalStorageIndexFilePath, 'utf8');
const sharedUtilsCopyTextToClipboardFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'copyTextToClipboard.txt');
const sharedUtilsCopyTextToClipboardContent = (0, node_fs_1.readFileSync)(sharedUtilsCopyTextToClipboardFilePath, 'utf8');
const sharedUtilsFunctionsFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'functions.txt');
const sharedUtilsFunctionsContent = (0, node_fs_1.readFileSync)(sharedUtilsFunctionsFilePath, 'utf8');
const sharedUtilsValidIsIntegerFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'validIsInteger.txt');
const sharedUtilsValidIsIntegerContent = (0, node_fs_1.readFileSync)(sharedUtilsValidIsIntegerFilePath, 'utf8');
const sharedUtilsValidNameAndLastNameFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'validNameAndLastName.txt');
const sharedUtilsValidNameAndLastNameContent = (0, node_fs_1.readFileSync)(sharedUtilsValidNameAndLastNameFilePath, 'utf8');
const sharedUtilsMasksCepMaskFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'masks', 'cepMask.txt');
const sharedUtilsMasksCepMaskContent = (0, node_fs_1.readFileSync)(sharedUtilsMasksCepMaskFilePath, 'utf8');
const sharedUtilsMasksCnpjMaskFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'masks', 'cnpjMask.txt');
const sharedUtilsMasksCnpjMaskContent = (0, node_fs_1.readFileSync)(sharedUtilsMasksCnpjMaskFilePath, 'utf8');
const sharedUtilsMasksCpfMaskFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'masks', 'cpfMask.txt');
const sharedUtilsMasksCpfMaskContent = (0, node_fs_1.readFileSync)(sharedUtilsMasksCpfMaskFilePath, 'utf8');
const sharedUtilsMasksCurrencyMaskFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'masks', 'currencyMask.txt');
const sharedUtilsMasksCurrencyMaskContent = (0, node_fs_1.readFileSync)(sharedUtilsMasksCurrencyMaskFilePath, 'utf8');
const sharedUtilsMasksDayOfMonthFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'masks', 'dayOfMonth.txt');
const sharedUtilsMasksDayOfMonthContent = (0, node_fs_1.readFileSync)(sharedUtilsMasksDayOfMonthFilePath, 'utf8');
const sharedUtilsMasksDocumentIdMaskFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'masks', 'documentIdMask.txt');
const sharedUtilsMasksDocumentIdMaskContent = (0, node_fs_1.readFileSync)(sharedUtilsMasksDocumentIdMaskFilePath, 'utf8');
const sharedUtilsMasksIndexFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'masks', 'index.txt');
const sharedUtilsMasksIndexContent = (0, node_fs_1.readFileSync)(sharedUtilsMasksIndexFilePath, 'utf8');
const sharedUtilsMasksNumericIdMaskFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'masks', 'numericIdMask.txt');
const sharedUtilsMasksNumericIdMaskContent = (0, node_fs_1.readFileSync)(sharedUtilsMasksNumericIdMaskFilePath, 'utf8');
const sharedUtilsMasksOnlyLettersFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'masks', 'onlyLetters.txt');
const sharedUtilsMasksOnlyLettersContent = (0, node_fs_1.readFileSync)(sharedUtilsMasksOnlyLettersFilePath, 'utf8');
const sharedUtilsMasksOnlyNumbersFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'masks', 'onlyNumbers.txt');
const sharedUtilsMasksOnlyNumbersContent = (0, node_fs_1.readFileSync)(sharedUtilsMasksOnlyNumbersFilePath, 'utf8');
const sharedUtilsMasksPhoneMaskFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'masks', 'phoneMask.txt');
const sharedUtilsMasksPhoneMaskContent = (0, node_fs_1.readFileSync)(sharedUtilsMasksPhoneMaskFilePath, 'utf8');
const sharedUtilsMasksPisMaskFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'masks', 'pisMask.txt');
const sharedUtilsMasksPisMaskContent = (0, node_fs_1.readFileSync)(sharedUtilsMasksPisMaskFilePath, 'utf8');
const sharedUtilsMasksRgMaskFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'masks', 'rgMask.txt');
const sharedUtilsMasksRgMaskContent = (0, node_fs_1.readFileSync)(sharedUtilsMasksRgMaskFilePath, 'utf8');
const sharedUtilsMasksUnCnpjMaskFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'masks', 'unCnpjMask.txt');
const sharedUtilsMasksUnCnpjMaskContent = (0, node_fs_1.readFileSync)(sharedUtilsMasksUnCnpjMaskFilePath, 'utf8');
const sharedUtilsMasksUnCurrencyMaskFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'masks', 'unCurrencyMask.txt');
const sharedUtilsMasksUnCurrencyMaskContent = (0, node_fs_1.readFileSync)(sharedUtilsMasksUnCurrencyMaskFilePath, 'utf8');
const sharedUtilsMasksUnMaskPhoneFilePath = (0, path_1.join)(__dirname, 'templates', 'shared', 'utils', 'masks', 'unMaskPhone.txt');
const sharedUtilsMasksUnMaskPhoneContent = (0, node_fs_1.readFileSync)(sharedUtilsMasksUnMaskPhoneFilePath, 'utf8');
// tests
const testsFilePath = (0, path_1.join)(__dirname, 'templates', 'tests', 'setup.txt');
const testsContent = (0, node_fs_1.readFileSync)(testsFilePath, 'utf8');
// vscode
const vscodesettingsFilePath = (0, path_1.join)(__dirname, 'templates', 'vscode', 'settings.txt');
const vscodesettingsContent = (0, node_fs_1.readFileSync)(vscodesettingsFilePath, 'utf8');
const vscodetaskFilePath = (0, path_1.join)(__dirname, 'templates', 'vscode', 'task.txt');
const vscodetaskContent = (0, node_fs_1.readFileSync)(vscodetaskFilePath, 'utf8');
const vscodelaunchFilePath = (0, path_1.join)(__dirname, 'templates', 'vscode', 'launch.txt');
const vscodelaunchContent = (0, node_fs_1.readFileSync)(vscodelaunchFilePath, 'utf8');
const vscodeextensionsFilePath = (0, path_1.join)(__dirname, 'templates', 'vscode', 'extensions.txt');
const vscodeextensionsContent = (0, node_fs_1.readFileSync)(vscodeextensionsFilePath, 'utf8');
function gerarCaminhoEConteudo({ basePath, relativePath, destinationPath, format }) {
    // Verifica se a extensão já está presente no nome do arquivo
    const hasFormat = relativePath.endsWith(format);
    // Monta o caminho do arquivo de template com ou sem '.txt'
    const filePath = hasFormat
        ? (0, path_1.join)(__dirname, basePath, `${relativePath}.txt`) : (0, path_1.join)(__dirname, basePath, ...relativePath.split('/'));
    // Define o caminho de destino
    const destinationPathSet = hasFormat
        ? (0, path_1.join)(destinationPath, hasFormat ? relativePath : relativePath.replace('.txt', ''))
        : (0, path_1.join)(destinationPath, hasFormat ? relativePath : relativePath.replace('.txt', format));
    // Lê o conteúdo do arquivo
    const fileContent = (0, node_fs_1.readFileSync)(filePath, 'utf8');
    return {
        path: destinationPathSet,
        content: fileContent,
    };
}
const eslintrcModule = gerarCaminhoEConteudo({ basePath: 'templates', relativePath: '.eslintrc.cjs', destinationPath: '', format: '.cjs' });
const prettierrcModule = gerarCaminhoEConteudo({ basePath: 'templates', relativePath: '.prettierrc.cjs', destinationPath: '', format: '.cjs' });
const eslintignoreModule = gerarCaminhoEConteudo({ basePath: 'templates', relativePath: '.eslintignore', destinationPath: '', format: '' });
const editorconfigModule = gerarCaminhoEConteudo({ basePath: 'templates', relativePath: '.editorconfig', destinationPath: '', format: '' });
const stylesLogCrashModule = gerarCaminhoEConteudo({ basePath: 'templates', relativePath: '/public/styles.css', destinationPath: '', format: 'css' });
const errorBoundaryModule = gerarCaminhoEConteudo({ basePath: 'templates', relativePath: '/shared/components/ErrorBoundary/index.txt', destinationPath: 'src', format: '.tsx' });
const stylesCustomThemeModule = gerarCaminhoEConteudo({ basePath: 'templates', relativePath: '/shared/styles/customTheme.txt', destinationPath: 'src', format: '.ts' });
const stylesAnimationsModule = gerarCaminhoEConteudo({ basePath: 'templates', relativePath: '/shared/styles/animations.txt', destinationPath: 'src', format: '.ts' });
const stylesGlobalStylesModule = gerarCaminhoEConteudo({ basePath: 'templates', relativePath: '/shared/styles/global.txt', destinationPath: 'src', format: '.ts' });
const routesIndexRouteModule = gerarCaminhoEConteudo({ basePath: 'templates', relativePath: '/routes/index.routes.txt', destinationPath: 'src', format: '.tsx' });
const routesPrivateRouteModule = gerarCaminhoEConteudo({ basePath: 'templates', relativePath: '/routes/PrivateRoute/index.txt', destinationPath: 'src', format: '.tsx' });
const routesVerifyNotFoundModule = gerarCaminhoEConteudo({ basePath: 'templates', relativePath: '/routes/VerifyNotFound/index.txt', destinationPath: 'src', format: '.tsx' });
exports.files = [
    {
        path: (0, path_1.join)('src', 'core', 'http', 'protocols', 'index.ts'),
        content: `${protocolsIndexContent}`,
    },
    {
        path: (0, path_1.join)('src', 'core', 'http', 'protocols', 'body.ts'),
        content: `${protocolsBodyContent}`,
    },
    {
        path: (0, path_1.join)('src', 'core', 'http', 'protocols', 'dto.ts'),
        content: `${protocolsDtoContent}`,
    },
    {
        path: (0, path_1.join)('src', 'core', 'http', 'protocols', 'request.ts'),
        content: `${protocolsRequestContent}`,
    },
    {
        path: (0, path_1.join)('src', 'core', 'http', 'protocols', 'response.ts'),
        content: `${protocolsResponseContent}`,
    },
    {
        path: (0, path_1.join)('src', 'core', 'http', 'protocols', 'method.ts'),
        content: `${protocolsMethodContent}`,
    },
    {
        path: (0, path_1.join)('src', 'core', 'http', 'protocols', 'status-code.ts'),
        content: `${protocolsStatusCodeContent}`,
    },
    {
        path: (0, path_1.join)('src', 'core', 'http', 'protocols', 'url.ts'),
        content: `${protocolsUrlContent}`,
    },
    {
        path: (0, path_1.join)('src', 'core', 'http', 'index.ts'),
        content: `${httpIndexContent}`,
    },
    {
        path: (0, path_1.join)('src', 'core', 'error', 'index.ts'),
        content: `${errorIndexContent}`,
    },
    {
        path: (0, path_1.join)('src', 'core', 'error', 'api.ts'),
        content: `${errorApiContent}`,
    },
    {
        path: (0, path_1.join)('src', 'core', 'error', 'errorResponse.ts'),
        content: `${errorErrorResponseContent}`,
    },
    {
        path: (0, path_1.join)('src', 'core', 'error', 'status.ts'),
        content: `${errorStatusContent}`,
    },
    {
        path: (0, path_1.join)('src', 'core', 'error', 'timeout.ts'),
        content: `${errorTimeoutContent}`,
    },
    {
        path: (0, path_1.join)('src', 'core', 'error', 'unknown.ts'),
        content: `${errorUnknownContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'copyTextToClipboard.ts'),
        content: `${sharedUtilsCopyTextToClipboardContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'functions.ts'),
        content: `${sharedUtilsFunctionsContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'validIsInteger.ts'),
        content: `${sharedUtilsValidIsIntegerContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'validNameAndLastName.ts'),
        content: `${sharedUtilsValidNameAndLastNameContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'masks', 'cepMask.ts'),
        content: `${sharedUtilsMasksCepMaskContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'masks', 'cnpjMask.ts'),
        content: `${sharedUtilsMasksCnpjMaskContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'masks', 'cpfMask.ts'),
        content: `${sharedUtilsMasksCpfMaskContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'masks', 'currencyMask.ts'),
        content: `${sharedUtilsMasksCurrencyMaskContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'masks', 'dayOfMonth.ts'),
        content: `${sharedUtilsMasksDayOfMonthContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'masks', 'documentIdMask.ts'),
        content: `${sharedUtilsMasksDocumentIdMaskContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'masks', 'index.ts'),
        content: `${sharedUtilsMasksIndexContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'masks', 'numericIdMask.ts'),
        content: `${sharedUtilsMasksNumericIdMaskContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'masks', 'onlyLetters.ts'),
        content: `${sharedUtilsMasksOnlyLettersContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'masks', 'onlyNumbers.ts'),
        content: `${sharedUtilsMasksOnlyNumbersContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'masks', 'phoneMask.ts'),
        content: `${sharedUtilsMasksPhoneMaskContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'masks', 'pisMask.ts'),
        content: `${sharedUtilsMasksPisMaskContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'masks', 'rgMask.ts'),
        content: `${sharedUtilsMasksRgMaskContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'masks', 'unCnpjMask.ts'),
        content: `${sharedUtilsMasksUnCnpjMaskContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'masks', 'unCurrencyMask.ts'),
        content: `${sharedUtilsMasksUnCurrencyMaskContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'masks', 'unMaskPhone.ts'),
        content: `${sharedUtilsMasksUnMaskPhoneContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'localStorage', 'index.ts'),
        content: `${sharedUtilsLocalStorageIndexContent}`,
    },
    {
        path: (0, path_1.join)('src', 'shared', 'utils', 'crash', 'crash.ts'),
        content: `${sharedUtilsCrashCrashContent}`,
    },
    {
        path: (0, path_1.join)('src', '@types', 'env.d.ts'),
        content: `${typesEnvContent}`,
    },
    {
        path: (0, path_1.join)('.vscode', 'settings.json'),
        content: `${vscodesettingsContent}`,
    },
    {
        path: (0, path_1.join)('.vscode', 'tasks.json'),
        content: `${vscodetaskContent}`,
    },
    {
        path: (0, path_1.join)('.vscode', 'launch.json'),
        content: `${vscodelaunchContent}`,
    },
    {
        path: (0, path_1.join)('.vscode', 'extensions.json'),
        content: `${vscodeextensionsContent}`,
    },
    {
        path: (0, path_1.join)('tests', 'setup.ts'),
        content: `${testsContent}`,
    },
    {
        path: (0, path_1.join)('', '.env'),
        content: `VITE_API_BASE_URL=http://api.com.br:20002/
VITE_API_BASE_URL_DEV=http://api.com.br:20002/
VITE_API_BASE_URL_SIT=https://api.sit.com.br/
VITE_API_BASE_URL_UAT=https://api-uat.uat.com.br/
VITE_API_BASE_URL_PROD=https://api.prod.com.br/
VITE_API_BASE_URL_LOCAL=http://127.0.0.1:55632/
VITE_MUI_LICENSE_TOKEN=6be6
VITE_AMBIENTE=dev`,
    },
    {
        path: (0, path_1.join)('', '.env.prod'),
        content: `VITE_API_BASE_URL=http://api.com.br:20002/
VITE_API_BASE_URL_SIT=https://api.prod.com.br/
VITE_MUI_LICENSE_TOKEN=6be6
VITE_AMBIENTE=prod`,
    },
    {
        path: (0, path_1.join)('', '.env.sit'),
        content: `VITE_API_BASE_URL=http://api.sit.com.br/
VITE_MUI_LICENSE_TOKEN=6be6
VITE_AMBIENTE=sit`,
    },
    {
        path: (0, path_1.join)('', '.env.uat'),
        content: `VITE_API_BASE_URL=https://api.uat.com.br/
VITE_MUI_LICENSE_TOKEN=6be6
VITE_AMBIENTE=uat`,
    },
    {
        path: (0, path_1.join)('', '.env.local'),
        content: `VITE_API_BASE_URL=http://127.0.0.1:55632/
VITE_MUI_LICENSE_TOKEN=6be6
VITE_AMBIENTE=local`,
    },
    editorconfigModule,
    eslintignoreModule,
    eslintrcModule,
    prettierrcModule,
    stylesLogCrashModule,
    errorBoundaryModule,
    stylesCustomThemeModule,
    stylesAnimationsModule,
    stylesGlobalStylesModule,
    routesIndexRouteModule,
    routesPrivateRouteModule,
    routesVerifyNotFoundModule,
];
