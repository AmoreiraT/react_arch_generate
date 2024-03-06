import  { join } from 'path';
import  { readFileSync }  from 'node:fs';

// core/http/protocols
const protocolsIndexFilePath = join(__dirname, 'templates', 'core', 'http', 'protocols', 'index.txt');

const protocolsBodyFilePath = join(__dirname, 'templates', 'core', 'http', 'protocols', 'body.txt');

const protocolsDtoFilePath = join(__dirname, 'templates', 'core', 'http', 'protocols', 'dto.txt');

const protocolsRequestFilePath = join(__dirname, 'templates', 'core', 'http', 'protocols', 'request.txt');

const protocolsResponseFilePath = join(__dirname, 'templates', 'core', 'http', 'protocols', 'response.txt');

const protocolsMethodFilePath = join(__dirname, 'templates', 'core', 'http', 'protocols', 'method.txt');

const protocolsStatusCodeFilePath = join(__dirname, 'templates', 'core', 'http', 'protocols', 'status-code.txt');

const protocolsUrlFilePath = join(__dirname, 'templates', 'core', 'http', 'protocols', 'url.txt');

const protocolsIndexContent = readFileSync(protocolsIndexFilePath, 'utf8');

const protocolsBodyContent = readFileSync(protocolsBodyFilePath, 'utf8');

const protocolsDtoContent = readFileSync(protocolsDtoFilePath, 'utf8');

const protocolsRequestContent = readFileSync(protocolsRequestFilePath, 'utf8');

const protocolsResponseContent = readFileSync(protocolsResponseFilePath, 'utf8');

const protocolsMethodContent = readFileSync(protocolsMethodFilePath, 'utf8');

const protocolsStatusCodeContent = readFileSync(protocolsStatusCodeFilePath, 'utf8');

const protocolsUrlContent = readFileSync(protocolsUrlFilePath, 'utf8');

// core/http

const httpIndexFilePath = join(__dirname, 'templates', 'core', 'http', 'index.txt');

const httpIndexContent = readFileSync(httpIndexFilePath, 'utf8');

// core/error

const errorIndexFilePath = join(__dirname, 'templates', 'core', 'error', 'index.txt');

const errorIndexContent = readFileSync(errorIndexFilePath, 'utf8');

const errorApiFilePath = join(__dirname, 'templates', 'core', 'error', 'api.txt');

const errorApiContent = readFileSync(errorApiFilePath, 'utf8');

const errorErrorResponseFilePath = join(__dirname, 'templates', 'core', 'error', 'errorResponse.txt');

const errorErrorResponseContent = readFileSync(errorErrorResponseFilePath, 'utf8');

const errorStatusFilePath = join(__dirname, 'templates', 'core', 'error', 'status.txt');

const errorStatusContent = readFileSync(errorStatusFilePath, 'utf8');

const errorTimeoutFilePath = join(__dirname, 'templates', 'core', 'error', 'timeout.txt');

const errorTimeoutContent = readFileSync(errorTimeoutFilePath, 'utf8');

const errorUnknownFilePath = join(__dirname, 'templates', 'core', 'error', 'unknown.txt');

const errorUnknownContent = readFileSync(errorUnknownFilePath, 'utf8');

// @types
const typesEnvFilePath = join(__dirname, 'templates', '@types', 'env.d.txt');

const typesEnvContent = readFileSync(typesEnvFilePath, 'utf8');

// shared/utils

const sharedUtilsCrashCrashFilePath = join(__dirname, 'templates', 'shared', 'utils', 'crash', 'crash.txt');

const sharedUtilsCrashCrashContent = readFileSync(sharedUtilsCrashCrashFilePath, 'utf8');

const sharedUtilsLocalStorageIndexFilePath = join(__dirname, 'templates', 'shared', 'utils', 'localStorage', 'index.txt');

const sharedUtilsLocalStorageIndexContent = readFileSync(sharedUtilsLocalStorageIndexFilePath, 'utf8');

const sharedUtilsCopyTextToClipboardFilePath = join(__dirname, 'templates', 'shared', 'utils', 'copyTextToClipboard.txt');

const sharedUtilsCopyTextToClipboardContent = readFileSync(sharedUtilsCopyTextToClipboardFilePath, 'utf8');


const sharedUtilsFunctionsFilePath = join(__dirname, 'templates', 'shared', 'utils', 'functions.txt');

const sharedUtilsFunctionsContent = readFileSync(sharedUtilsFunctionsFilePath, 'utf8');

const sharedUtilsValidIsIntegerFilePath = join(__dirname, 'templates', 'shared', 'utils', 'validIsInteger.txt');

const sharedUtilsValidIsIntegerContent = readFileSync(sharedUtilsValidIsIntegerFilePath, 'utf8');


const sharedUtilsValidNameAndLastNameFilePath = join(__dirname, 'templates', 'shared', 'utils', 'validNameAndLastName.txt');

const sharedUtilsValidNameAndLastNameContent = readFileSync(sharedUtilsValidNameAndLastNameFilePath, 'utf8');

const sharedUtilsMasksCepMaskFilePath = join(__dirname, 'templates', 'shared', 'utils', 'masks', 'cepMask.txt');

const sharedUtilsMasksCepMaskContent = readFileSync(sharedUtilsMasksCepMaskFilePath, 'utf8');

const sharedUtilsMasksCnpjMaskFilePath = join(__dirname, 'templates', 'shared', 'utils', 'masks', 'cnpjMask.txt');

const sharedUtilsMasksCnpjMaskContent = readFileSync(sharedUtilsMasksCnpjMaskFilePath, 'utf8');


const sharedUtilsMasksCpfMaskFilePath = join(__dirname, 'templates', 'shared', 'utils', 'masks', 'cpfMask.txt');

const sharedUtilsMasksCpfMaskContent = readFileSync(sharedUtilsMasksCpfMaskFilePath, 'utf8');


const sharedUtilsMasksCurrencyMaskFilePath = join(__dirname, 'templates', 'shared', 'utils', 'masks', 'currencyMask.txt');

const sharedUtilsMasksCurrencyMaskContent = readFileSync(sharedUtilsMasksCurrencyMaskFilePath, 'utf8');

const sharedUtilsMasksDayOfMonthFilePath = join(__dirname, 'templates', 'shared', 'utils', 'masks', 'dayOfMonth.txt');

const sharedUtilsMasksDayOfMonthContent = readFileSync(sharedUtilsMasksDayOfMonthFilePath, 'utf8');


const sharedUtilsMasksDocumentIdMaskFilePath = join(__dirname, 'templates', 'shared', 'utils', 'masks', 'documentIdMask.txt');

const sharedUtilsMasksDocumentIdMaskContent = readFileSync(sharedUtilsMasksDocumentIdMaskFilePath, 'utf8');

const sharedUtilsMasksIndexFilePath = join(__dirname, 'templates', 'shared', 'utils', 'masks', 'index.txt');

const sharedUtilsMasksIndexContent = readFileSync(sharedUtilsMasksIndexFilePath, 'utf8');


const sharedUtilsMasksNumericIdMaskFilePath = join(__dirname, 'templates', 'shared', 'utils', 'masks', 'numericIdMask.txt');

const sharedUtilsMasksNumericIdMaskContent = readFileSync(sharedUtilsMasksNumericIdMaskFilePath, 'utf8');


const sharedUtilsMasksOnlyLettersFilePath = join(__dirname, 'templates', 'shared', 'utils', 'masks', 'onlyLetters.txt');

const sharedUtilsMasksOnlyLettersContent = readFileSync(sharedUtilsMasksOnlyLettersFilePath, 'utf8');

const sharedUtilsMasksOnlyNumbersFilePath = join(__dirname, 'templates', 'shared', 'utils', 'masks', 'onlyNumbers.txt');

const sharedUtilsMasksOnlyNumbersContent = readFileSync(sharedUtilsMasksOnlyNumbersFilePath, 'utf8');


const sharedUtilsMasksPhoneMaskFilePath = join(__dirname, 'templates', 'shared', 'utils', 'masks', 'phoneMask.txt');

const sharedUtilsMasksPhoneMaskContent = readFileSync(sharedUtilsMasksPhoneMaskFilePath, 'utf8');


const sharedUtilsMasksPisMaskFilePath = join(__dirname, 'templates', 'shared', 'utils', 'masks', 'pisMask.txt');

const sharedUtilsMasksPisMaskContent = readFileSync(sharedUtilsMasksPisMaskFilePath, 'utf8');


const sharedUtilsMasksRgMaskFilePath = join(__dirname, 'templates', 'shared', 'utils', 'masks', 'rgMask.txt');

const sharedUtilsMasksRgMaskContent = readFileSync(sharedUtilsMasksRgMaskFilePath, 'utf8');


const sharedUtilsMasksUnCnpjMaskFilePath = join(__dirname, 'templates', 'shared', 'utils', 'masks', 'unCnpjMask.txt');

const sharedUtilsMasksUnCnpjMaskContent = readFileSync(sharedUtilsMasksUnCnpjMaskFilePath, 'utf8');


const sharedUtilsMasksUnCurrencyMaskFilePath = join(__dirname, 'templates', 'shared', 'utils', 'masks', 'unCurrencyMask.txt');

const sharedUtilsMasksUnCurrencyMaskContent = readFileSync(sharedUtilsMasksUnCurrencyMaskFilePath, 'utf8');


const sharedUtilsMasksUnMaskPhoneFilePath = join(__dirname, 'templates', 'shared', 'utils', 'masks', 'unMaskPhone.txt');

const sharedUtilsMasksUnMaskPhoneContent = readFileSync(sharedUtilsMasksUnMaskPhoneFilePath, 'utf8');

// tests


const testsFilePath = join(__dirname, 'templates', 'tests', 'setup.txt');

const testsContent = readFileSync(testsFilePath, 'utf8');

// vscode

const vscodesettingsFilePath = join(__dirname, 'templates', 'vscode', 'settings.txt');

const vscodesettingsContent = readFileSync(vscodesettingsFilePath, 'utf8');

const vscodetaskFilePath = join(__dirname, 'templates', 'vscode', 'task.txt');

const vscodetaskContent = readFileSync(vscodetaskFilePath, 'utf8');

const vscodelaunchFilePath = join(__dirname, 'templates', 'vscode', 'launch.txt');

const vscodelaunchContent = readFileSync(vscodelaunchFilePath, 'utf8');

const vscodeextensionsFilePath = join(__dirname, 'templates', 'vscode', 'extensions.txt');

const vscodeextensionsContent = readFileSync(vscodeextensionsFilePath, 'utf8');


interface IFile {
    basePath: string;
    
    relativePath: string; destinationPath: string; format: string;
}


function gerarCaminhoEConteudo({ basePath, relativePath, destinationPath, format }: IFile) {
    // Verifica se a extensão já está presente no nome do arquivo
    const hasFormat = relativePath.endsWith(format);

    // Monta o caminho do arquivo de template com ou sem '.txt'
    const filePath = hasFormat

        ? join(__dirname, basePath, `${relativePath}.txt`) : join(__dirname, basePath, ...relativePath.split('/'));

    // Define o caminho de destino
    const destinationPathSet = hasFormat
        ? join(destinationPath, hasFormat ? relativePath : relativePath.replace('.txt', ''))
        : join(destinationPath, hasFormat ? relativePath : relativePath.replace('.txt', format));

    // Lê o conteúdo do arquivo
    const fileContent = readFileSync(filePath, 'utf8');

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

export const files = [
    {
        path: join('src', 'core', 'http', 'protocols', 'index.ts'),
        content: `${protocolsIndexContent}`,
    },
    {
        path: join('src', 'core', 'http', 'protocols', 'body.ts'),
        content: `${protocolsBodyContent}`,
    },
    {
        path: join('src', 'core', 'http', 'protocols', 'dto.ts'),
        content: `${protocolsDtoContent}`,
    },
    {
        path: join('src', 'core', 'http', 'protocols', 'request.ts'),
        content: `${protocolsRequestContent}`,
    },
    {
        path: join('src', 'core', 'http', 'protocols', 'response.ts'),
        content: `${protocolsResponseContent}`,
    },
    {
        path: join('src', 'core', 'http', 'protocols', 'method.ts'),
        content: `${protocolsMethodContent}`,
    },
    {
        path: join('src', 'core', 'http', 'protocols', 'status-code.ts'),
        content: `${protocolsStatusCodeContent}`,
    },
    {
        path: join('src', 'core', 'http', 'protocols', 'url.ts'),
        content: `${protocolsUrlContent}`,
    },
    {
        path: join('src', 'core', 'http', 'index.ts'),
        content: `${httpIndexContent}`,
    },
    {
        path: join('src', 'core', 'error', 'index.ts'),
        content: `${errorIndexContent}`,
    },
    {
        path: join('src', 'core', 'error', 'api.ts'),
        content: `${errorApiContent}`,
    },
    {
        path: join('src', 'core', 'error', 'errorResponse.ts'),
        content: `${errorErrorResponseContent}`,
    },
    {
        path: join('src', 'core', 'error', 'status.ts'),
        content: `${errorStatusContent}`,
    },
    {
        path: join('src', 'core', 'error', 'timeout.ts'),
        content: `${errorTimeoutContent}`,
    },
    {
        path: join('src', 'core', 'error', 'unknown.ts'),
        content: `${errorUnknownContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'copyTextToClipboard.ts'),
        content: `${sharedUtilsCopyTextToClipboardContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'functions.ts'),
        content: `${sharedUtilsFunctionsContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'validIsInteger.ts'),
        content: `${sharedUtilsValidIsIntegerContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'validNameAndLastName.ts'),
        content: `${sharedUtilsValidNameAndLastNameContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'masks', 'cepMask.ts'),
        content: `${sharedUtilsMasksCepMaskContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'masks', 'cnpjMask.ts'),
        content: `${sharedUtilsMasksCnpjMaskContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'masks', 'cpfMask.ts'),
        content: `${sharedUtilsMasksCpfMaskContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'masks', 'currencyMask.ts'),
        content: `${sharedUtilsMasksCurrencyMaskContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'masks', 'dayOfMonth.ts'),
        content: `${sharedUtilsMasksDayOfMonthContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'masks', 'documentIdMask.ts'),
        content: `${sharedUtilsMasksDocumentIdMaskContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'masks', 'index.ts'),
        content: `${sharedUtilsMasksIndexContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'masks', 'numericIdMask.ts'),
        content: `${sharedUtilsMasksNumericIdMaskContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'masks', 'onlyLetters.ts'),
        content: `${sharedUtilsMasksOnlyLettersContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'masks', 'onlyNumbers.ts'),
        content: `${sharedUtilsMasksOnlyNumbersContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'masks', 'phoneMask.ts'),
        content: `${sharedUtilsMasksPhoneMaskContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'masks', 'pisMask.ts'),
        content: `${sharedUtilsMasksPisMaskContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'masks', 'rgMask.ts'),
        content: `${sharedUtilsMasksRgMaskContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'masks', 'unCnpjMask.ts'),
        content: `${sharedUtilsMasksUnCnpjMaskContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'masks', 'unCurrencyMask.ts'),
        content: `${sharedUtilsMasksUnCurrencyMaskContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'masks', 'unMaskPhone.ts'),
        content: `${sharedUtilsMasksUnMaskPhoneContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'localStorage', 'index.ts'),
        content: `${sharedUtilsLocalStorageIndexContent}`,
    },
    {
        path: join('src', 'shared', 'utils', 'crash', 'crash.ts'),
        content: `${sharedUtilsCrashCrashContent}`,
    },
    {
        path: join('src', '@types', 'env.d.ts'),
        content: `${typesEnvContent}`,
    },
    {
        path: join('.vscode', 'settings.json'),
        content: `${vscodesettingsContent}`,
    },
    {
        path: join('.vscode', 'tasks.json'),
        content: `${vscodetaskContent}`,
    },
    {
        path: join('.vscode', 'launch.json'),
        content: `${vscodelaunchContent}`,
    },
    {
        path: join('.vscode', 'extensions.json'),
        content: `${vscodeextensionsContent}`,
    },
    {
        path: join('tests', 'setup.ts'),
        content: `${testsContent}`,
    },
    {
        path: join('', '.env'),
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
        path: join('', '.env.prod'),
        content: `VITE_API_BASE_URL=http://api.com.br:20002/
VITE_API_BASE_URL_SIT=https://api.prod.com.br/
VITE_MUI_LICENSE_TOKEN=6be6
VITE_AMBIENTE=prod`,
    },
    {
        path: join('', '.env.sit'),
        content: `VITE_API_BASE_URL=http://api.sit.com.br/
VITE_MUI_LICENSE_TOKEN=6be6
VITE_AMBIENTE=sit`,
    },
    {
        path: join('', '.env.uat'),
        content: `VITE_API_BASE_URL=https://api.uat.com.br/
VITE_MUI_LICENSE_TOKEN=6be6
VITE_AMBIENTE=uat`,
    },
    {
        path: join('', '.env.local'),
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
