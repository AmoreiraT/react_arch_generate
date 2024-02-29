"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.files = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// core/http/protocols
const protocolsIndexFilePath = path_1.default.join(__dirname, 'templates', 'core', 'http', 'protocols', 'index.txt');
const protocolsBodyFilePath = path_1.default.join(__dirname, 'templates', 'core', 'http', 'protocols', 'body.txt');
const protocolsDtoFilePath = path_1.default.join(__dirname, 'templates', 'core', 'http', 'protocols', 'dto.txt');
const protocolsRequestFilePath = path_1.default.join(__dirname, 'templates', 'core', 'http', 'protocols', 'request.txt');
const protocolsResponseFilePath = path_1.default.join(__dirname, 'templates', 'core', 'http', 'protocols', 'response.txt');
const protocolsMethodFilePath = path_1.default.join(__dirname, 'templates', 'core', 'http', 'protocols', 'method.txt');
const protocolsStatusCodeFilePath = path_1.default.join(__dirname, 'templates', 'core', 'http', 'protocols', 'status-code.txt');
const protocolsUrlFilePath = path_1.default.join(__dirname, 'templates', 'core', 'http', 'protocols', 'url.txt');
const protocolsIndexContent = fs_1.default.readFileSync(protocolsIndexFilePath, 'utf8');
const protocolsBodyContent = fs_1.default.readFileSync(protocolsBodyFilePath, 'utf8');
const protocolsDtoContent = fs_1.default.readFileSync(protocolsDtoFilePath, 'utf8');
const protocolsRequestContent = fs_1.default.readFileSync(protocolsRequestFilePath, 'utf8');
const protocolsResponseContent = fs_1.default.readFileSync(protocolsResponseFilePath, 'utf8');
const protocolsMethodContent = fs_1.default.readFileSync(protocolsMethodFilePath, 'utf8');
const protocolsStatusCodeContent = fs_1.default.readFileSync(protocolsStatusCodeFilePath, 'utf8');
const protocolsUrlContent = fs_1.default.readFileSync(protocolsUrlFilePath, 'utf8');
// core/http
const httpIndexFilePath = path_1.default.join(__dirname, 'templates', 'core', 'http', 'index.txt');
const httpIndexContent = fs_1.default.readFileSync(httpIndexFilePath, 'utf8');
// core/error
const errorIndexFilePath = path_1.default.join(__dirname, 'templates', 'core', 'error', 'index.txt');
const errorIndexContent = fs_1.default.readFileSync(errorIndexFilePath, 'utf8');
const errorApiFilePath = path_1.default.join(__dirname, 'templates', 'core', 'error', 'api.txt');
const errorApiContent = fs_1.default.readFileSync(errorApiFilePath, 'utf8');
const errorErrorResponseFilePath = path_1.default.join(__dirname, 'templates', 'core', 'error', 'errorResponse.txt');
const errorErrorResponseContent = fs_1.default.readFileSync(errorErrorResponseFilePath, 'utf8');
const errorStatusFilePath = path_1.default.join(__dirname, 'templates', 'core', 'error', 'status.txt');
const errorStatusContent = fs_1.default.readFileSync(errorStatusFilePath, 'utf8');
const errorTimeoutFilePath = path_1.default.join(__dirname, 'templates', 'core', 'error', 'timeout.txt');
const errorTimeoutContent = fs_1.default.readFileSync(errorTimeoutFilePath, 'utf8');
const errorUnknownFilePath = path_1.default.join(__dirname, 'templates', 'core', 'error', 'unknown.txt');
const errorUnknownContent = fs_1.default.readFileSync(errorUnknownFilePath, 'utf8');
// @types
const typesEnvFilePath = path_1.default.join(__dirname, 'templates', '@types', 'env.d.txt');
const typesEnvContent = fs_1.default.readFileSync(typesEnvFilePath, 'utf8');
// shared/utils
const sharedUtilsCrashCrashFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'crash', 'crash.txt');
const sharedUtilsCrashCrashContent = fs_1.default.readFileSync(sharedUtilsCrashCrashFilePath, 'utf8');
const sharedUtilsLocalStorageIndexFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'localStorage', 'index.txt');
const sharedUtilsLocalStorageIndexContent = fs_1.default.readFileSync(sharedUtilsLocalStorageIndexFilePath, 'utf8');
const sharedUtilsCopyTextToClipboardFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'copyTextToClipboard.txt');
const sharedUtilsCopyTextToClipboardContent = fs_1.default.readFileSync(sharedUtilsCopyTextToClipboardFilePath, 'utf8');
const sharedUtilsFunctionsFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'functions.txt');
const sharedUtilsFunctionsContent = fs_1.default.readFileSync(sharedUtilsFunctionsFilePath, 'utf8');
const sharedUtilsValidIsIntegerFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'validIsInteger.txt');
const sharedUtilsValidIsIntegerContent = fs_1.default.readFileSync(sharedUtilsValidIsIntegerFilePath, 'utf8');
const sharedUtilsValidNameAndLastNameFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'validNameAndLastName.txt');
const sharedUtilsValidNameAndLastNameContent = fs_1.default.readFileSync(sharedUtilsValidNameAndLastNameFilePath, 'utf8');
const sharedUtilsMasksCepMaskFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'cepMask.txt');
const sharedUtilsMasksCepMaskContent = fs_1.default.readFileSync(sharedUtilsMasksCepMaskFilePath, 'utf8');
const sharedUtilsMasksCnpjMaskFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'cnpjMask.txt');
const sharedUtilsMasksCnpjMaskContent = fs_1.default.readFileSync(sharedUtilsMasksCnpjMaskFilePath, 'utf8');
const sharedUtilsMasksCpfMaskFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'cpfMask.txt');
const sharedUtilsMasksCpfMaskContent = fs_1.default.readFileSync(sharedUtilsMasksCpfMaskFilePath, 'utf8');
const sharedUtilsMasksCurrencyMaskFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'currencyMask.txt');
const sharedUtilsMasksCurrencyMaskContent = fs_1.default.readFileSync(sharedUtilsMasksCurrencyMaskFilePath, 'utf8');
const sharedUtilsMasksDayOfMonthFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'dayOfMonth.txt');
const sharedUtilsMasksDayOfMonthContent = fs_1.default.readFileSync(sharedUtilsMasksDayOfMonthFilePath, 'utf8');
const sharedUtilsMasksDocumentIdMaskFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'documentIdMask.txt');
const sharedUtilsMasksDocumentIdMaskContent = fs_1.default.readFileSync(sharedUtilsMasksDocumentIdMaskFilePath, 'utf8');
const sharedUtilsMasksIndexFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'index.txt');
const sharedUtilsMasksIndexContent = fs_1.default.readFileSync(sharedUtilsMasksIndexFilePath, 'utf8');
const sharedUtilsMasksNumericIdMaskFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'numericIdMask.txt');
const sharedUtilsMasksNumericIdMaskContent = fs_1.default.readFileSync(sharedUtilsMasksNumericIdMaskFilePath, 'utf8');
const sharedUtilsMasksOnlyLettersFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'onlyLetters.txt');
const sharedUtilsMasksOnlyLettersContent = fs_1.default.readFileSync(sharedUtilsMasksOnlyLettersFilePath, 'utf8');
const sharedUtilsMasksOnlyNumbersFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'onlyNumbers.txt');
const sharedUtilsMasksOnlyNumbersContent = fs_1.default.readFileSync(sharedUtilsMasksOnlyNumbersFilePath, 'utf8');
const sharedUtilsMasksPhoneMaskFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'phoneMask.txt');
const sharedUtilsMasksPhoneMaskContent = fs_1.default.readFileSync(sharedUtilsMasksPhoneMaskFilePath, 'utf8');
const sharedUtilsMasksPisMaskFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'pisMask.txt');
const sharedUtilsMasksPisMaskContent = fs_1.default.readFileSync(sharedUtilsMasksPisMaskFilePath, 'utf8');
const sharedUtilsMasksRgMaskFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'rgMask.txt');
const sharedUtilsMasksRgMaskContent = fs_1.default.readFileSync(sharedUtilsMasksRgMaskFilePath, 'utf8');
const sharedUtilsMasksUnCnpjMaskFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'unCnpjMask.txt');
const sharedUtilsMasksUnCnpjMaskContent = fs_1.default.readFileSync(sharedUtilsMasksUnCnpjMaskFilePath, 'utf8');
const sharedUtilsMasksUnCurrencyMaskFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'unCurrencyMask.txt');
const sharedUtilsMasksUnCurrencyMaskContent = fs_1.default.readFileSync(sharedUtilsMasksUnCurrencyMaskFilePath, 'utf8');
const sharedUtilsMasksUnMaskPhoneFilePath = path_1.default.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'unMaskPhone.txt');
const sharedUtilsMasksUnMaskPhoneContent = fs_1.default.readFileSync(sharedUtilsMasksUnMaskPhoneFilePath, 'utf8');
// tests
const testsFilePath = path_1.default.join(__dirname, 'templates', 'tests', 'setup.txt');
const testsContent = fs_1.default.readFileSync(testsFilePath, 'utf8');
// vscode
const vscodesettingsFilePath = path_1.default.join(__dirname, 'templates', 'vscode', 'settings.txt');
const vscodesettingsContent = fs_1.default.readFileSync(vscodesettingsFilePath, 'utf8');
const vscodetaskFilePath = path_1.default.join(__dirname, 'templates', 'vscode', 'task.txt');
const vscodetaskContent = fs_1.default.readFileSync(vscodetaskFilePath, 'utf8');
const vscodelaunchFilePath = path_1.default.join(__dirname, 'templates', 'vscode', 'launch.txt');
const vscodelaunchContent = fs_1.default.readFileSync(vscodelaunchFilePath, 'utf8');
const vscodeextensionsFilePath = path_1.default.join(__dirname, 'templates', 'vscode', 'extensions.txt');
const vscodeextensionsContent = fs_1.default.readFileSync(vscodeextensionsFilePath, 'utf8');
function gerarCaminhoEConteudo({ basePath, relativePath, destinationPath, format }) {
    // Verifica se a extensão já está presente no nome do arquivo
    const hasFormat = relativePath.endsWith(format);
    // Monta o caminho do arquivo de template com ou sem '.txt'
    const filePath = hasFormat
        ? path_1.default.join(__dirname, basePath, `${relativePath}.txt`) : path_1.default.join(__dirname, basePath, ...relativePath.split('/'));
    // Define o caminho de destino
    const destinationPathSet = hasFormat
        ? path_1.default.join(destinationPath, hasFormat ? relativePath : relativePath.replace('.txt', ''))
        : path_1.default.join(destinationPath, hasFormat ? relativePath : relativePath.replace('.txt', format));
    // Lê o conteúdo do arquivo
    const fileContent = fs_1.default.readFileSync(filePath, 'utf8');
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
        path: path_1.default.join('src', 'core', 'http', 'protocols', 'index.ts'),
        content: `${protocolsIndexContent}`,
    },
    {
        path: path_1.default.join('src', 'core', 'http', 'protocols', 'body.ts'),
        content: `${protocolsBodyContent}`,
    },
    {
        path: path_1.default.join('src', 'core', 'http', 'protocols', 'dto.ts'),
        content: `${protocolsDtoContent}`,
    },
    {
        path: path_1.default.join('src', 'core', 'http', 'protocols', 'request.ts'),
        content: `${protocolsRequestContent}`,
    },
    {
        path: path_1.default.join('src', 'core', 'http', 'protocols', 'response.ts'),
        content: `${protocolsResponseContent}`,
    },
    {
        path: path_1.default.join('src', 'core', 'http', 'protocols', 'method.ts'),
        content: `${protocolsMethodContent}`,
    },
    {
        path: path_1.default.join('src', 'core', 'http', 'protocols', 'status-code.ts'),
        content: `${protocolsStatusCodeContent}`,
    },
    {
        path: path_1.default.join('src', 'core', 'http', 'protocols', 'url.ts'),
        content: `${protocolsUrlContent}`,
    },
    {
        path: path_1.default.join('src', 'core', 'http', 'index.ts'),
        content: `${httpIndexContent}`,
    },
    {
        path: path_1.default.join('src', 'core', 'error', 'index.ts'),
        content: `${errorIndexContent}`,
    },
    {
        path: path_1.default.join('src', 'core', 'error', 'api.ts'),
        content: `${errorApiContent}`,
    },
    {
        path: path_1.default.join('src', 'core', 'error', 'errorResponse.ts'),
        content: `${errorErrorResponseContent}`,
    },
    {
        path: path_1.default.join('src', 'core', 'error', 'status.ts'),
        content: `${errorStatusContent}`,
    },
    {
        path: path_1.default.join('src', 'core', 'error', 'timeout.ts'),
        content: `${errorTimeoutContent}`,
    },
    {
        path: path_1.default.join('src', 'core', 'error', 'unknown.ts'),
        content: `${errorUnknownContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'copyTextToClipboard.ts'),
        content: `${sharedUtilsCopyTextToClipboardContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'functions.ts'),
        content: `${sharedUtilsFunctionsContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'validIsInteger.ts'),
        content: `${sharedUtilsValidIsIntegerContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'validNameAndLastName.ts'),
        content: `${sharedUtilsValidNameAndLastNameContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'masks', 'cepMask.ts'),
        content: `${sharedUtilsMasksCepMaskContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'masks', 'cnpjMask.ts'),
        content: `${sharedUtilsMasksCnpjMaskContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'masks', 'cpfMask.ts'),
        content: `${sharedUtilsMasksCpfMaskContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'masks', 'currencyMask.ts'),
        content: `${sharedUtilsMasksCurrencyMaskContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'masks', 'dayOfMonth.ts'),
        content: `${sharedUtilsMasksDayOfMonthContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'masks', 'documentIdMask.ts'),
        content: `${sharedUtilsMasksDocumentIdMaskContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'masks', 'index.ts'),
        content: `${sharedUtilsMasksIndexContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'masks', 'numericIdMask.ts'),
        content: `${sharedUtilsMasksNumericIdMaskContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'masks', 'onlyLetters.ts'),
        content: `${sharedUtilsMasksOnlyLettersContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'masks', 'onlyNumbers.ts'),
        content: `${sharedUtilsMasksOnlyNumbersContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'masks', 'phoneMask.ts'),
        content: `${sharedUtilsMasksPhoneMaskContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'masks', 'pisMask.ts'),
        content: `${sharedUtilsMasksPisMaskContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'masks', 'rgMask.ts'),
        content: `${sharedUtilsMasksRgMaskContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'masks', 'unCnpjMask.ts'),
        content: `${sharedUtilsMasksUnCnpjMaskContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'masks', 'unCurrencyMask.ts'),
        content: `${sharedUtilsMasksUnCurrencyMaskContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'masks', 'unMaskPhone.ts'),
        content: `${sharedUtilsMasksUnMaskPhoneContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'localStorage', 'index.ts'),
        content: `${sharedUtilsLocalStorageIndexContent}`,
    },
    {
        path: path_1.default.join('src', 'shared', 'utils', 'crash', 'crash.ts'),
        content: `${sharedUtilsCrashCrashContent}`,
    },
    {
        path: path_1.default.join('src', '@types', 'env.d.ts'),
        content: `${typesEnvContent}`,
    },
    {
        path: path_1.default.join('.vscode', 'settings.json'),
        content: `${vscodesettingsContent}`,
    },
    {
        path: path_1.default.join('.vscode', 'tasks.json'),
        content: `${vscodetaskContent}`,
    },
    {
        path: path_1.default.join('.vscode', 'launch.json'),
        content: `${vscodelaunchContent}`,
    },
    {
        path: path_1.default.join('.vscode', 'extensions.json'),
        content: `${vscodeextensionsContent}`,
    },
    {
        path: path_1.default.join('tests', 'setup.ts'),
        content: `${testsContent}`,
    },
    {
        path: path_1.default.join('', '.env'),
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
        path: path_1.default.join('', '.env.prod'),
        content: `VITE_API_BASE_URL=http://api.com.br:20002/
VITE_API_BASE_URL_SIT=https://api.prod.com.br/
VITE_MUI_LICENSE_TOKEN=6be6
VITE_AMBIENTE=prod`,
    },
    {
        path: path_1.default.join('', '.env.sit'),
        content: `VITE_API_BASE_URL=http://api.sit.com.br/
VITE_MUI_LICENSE_TOKEN=6be6
VITE_AMBIENTE=sit`,
    },
    {
        path: path_1.default.join('', '.env.uat'),
        content: `VITE_API_BASE_URL=https://api.uat.com.br/
VITE_MUI_LICENSE_TOKEN=6be6
VITE_AMBIENTE=uat`,
    },
    {
        path: path_1.default.join('', '.env.local'),
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
