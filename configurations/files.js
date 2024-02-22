const path = require('path');
const fs = require('fs');

// core/http/protocols
const protocolsIndexFilePath = path.join(__dirname, 'templates', 'core', 'http', 'protocols', 'index.txt');

const protocolsBodyFilePath = path.join(__dirname, 'templates', 'core', 'http', 'protocols', 'body.txt');

const protocolsDtoFilePath = path.join(__dirname, 'templates', 'core', 'http', 'protocols', 'dto.txt');

const protocolsRequestFilePath = path.join(__dirname, 'templates', 'core', 'http', 'protocols', 'request.txt');

const protocolsResponseFilePath = path.join(__dirname, 'templates', 'core', 'http', 'protocols', 'response.txt');

const protocolsMethodFilePath = path.join(__dirname, 'templates', 'core', 'http', 'protocols', 'method.txt');

const protocolsStatusCodeFilePath = path.join(__dirname, 'templates', 'core', 'http', 'protocols', 'status-code.txt');

const protocolsUrlFilePath = path.join(__dirname, 'templates', 'core', 'http', 'protocols', 'url.txt');

const protocolsIndexContent = fs.readFileSync(protocolsIndexFilePath, 'utf8');

const protocolsBodyContent = fs.readFileSync(protocolsBodyFilePath, 'utf8');

const protocolsDtoContent = fs.readFileSync(protocolsDtoFilePath, 'utf8');

const protocolsRequestContent = fs.readFileSync(protocolsRequestFilePath, 'utf8');

const protocolsResponseContent = fs.readFileSync(protocolsResponseFilePath, 'utf8');

const protocolsMethodContent = fs.readFileSync(protocolsMethodFilePath, 'utf8');

const protocolsStatusCodeContent = fs.readFileSync(protocolsStatusCodeFilePath, 'utf8');

const protocolsUrlContent = fs.readFileSync(protocolsUrlFilePath, 'utf8');

// core/http

const httpIndexFilePath = path.join(__dirname, 'templates', 'core', 'http', 'index.txt');

const httpIndexContent = fs.readFileSync(httpIndexFilePath, 'utf8');

// core/error

const errorIndexFilePath = path.join(__dirname, 'templates', 'core', 'error', 'index.txt');

const errorIndexContent = fs.readFileSync(errorIndexFilePath, 'utf8');

const errorApiFilePath = path.join(__dirname, 'templates', 'core', 'error', 'api.txt');

const errorApiContent = fs.readFileSync(errorApiFilePath, 'utf8');

const errorErrorResponseFilePath = path.join(__dirname, 'templates', 'core', 'error', 'errorResponse.txt');

const errorErrorResponseContent = fs.readFileSync(errorErrorResponseFilePath, 'utf8');

const errorStatusFilePath = path.join(__dirname, 'templates', 'core', 'error', 'status.txt');

const errorStatusContent = fs.readFileSync(errorStatusFilePath, 'utf8');

const errorTimeoutFilePath = path.join(__dirname, 'templates', 'core', 'error', 'timeout.txt');

const errorTimeoutContent = fs.readFileSync(errorTimeoutFilePath, 'utf8');

const errorUnknownFilePath = path.join(__dirname, 'templates', 'core', 'error', 'unknown.txt');

const errorUnknownContent = fs.readFileSync(errorUnknownFilePath, 'utf8');

// @types
const typesEnvFilePath = path.join(__dirname, 'templates', '@types', 'env.d.txt');

const typesEnvContent = fs.readFileSync(typesEnvFilePath, 'utf8');

// shared/utils

const sharedUtilsCrashCrashFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'crash', 'crash.txt');

const sharedUtilsCrashCrashContent = fs.readFileSync(sharedUtilsCrashCrashFilePath, 'utf8');

const sharedUtilsLocalStorageIndexFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'localStorage', 'index.txt');

const sharedUtilsLocalStorageIndexContent = fs.readFileSync(sharedUtilsLocalStorageIndexFilePath, 'utf8');

const sharedUtilsCopyTextToClipboardFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'copyTextToClipboard.txt');

const sharedUtilsCopyTextToClipboardContent = fs.readFileSync(sharedUtilsCopyTextToClipboardFilePath, 'utf8');


const sharedUtilsFunctionsFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'functions.txt');

const sharedUtilsFunctionsContent = fs.readFileSync(sharedUtilsFunctionsFilePath, 'utf8');

const sharedUtilsValidIsIntegerFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'validIsInteger.txt');

const sharedUtilsValidIsIntegerContent = fs.readFileSync(sharedUtilsValidIsIntegerFilePath, 'utf8');


const sharedUtilsValidNameAndLastNameFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'validNameAndLastName.txt');

const sharedUtilsValidNameAndLastNameContent = fs.readFileSync(sharedUtilsValidNameAndLastNameFilePath, 'utf8');

const sharedUtilsMasksCepMaskFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'cepMask.txt');

const sharedUtilsMasksCepMaskContent = fs.readFileSync(sharedUtilsMasksCepMaskFilePath, 'utf8');

const sharedUtilsMasksCnpjMaskFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'cnpjMask.txt');

const sharedUtilsMasksCnpjMaskContent = fs.readFileSync(sharedUtilsMasksCnpjMaskFilePath, 'utf8');


const sharedUtilsMasksCpfMaskFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'cpfMask.txt');

const sharedUtilsMasksCpfMaskContent = fs.readFileSync(sharedUtilsMasksCpfMaskFilePath, 'utf8');


const sharedUtilsMasksCurrencyMaskFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'currencyMask.txt');

const sharedUtilsMasksCurrencyMaskContent = fs.readFileSync(sharedUtilsMasksCurrencyMaskFilePath, 'utf8');

const sharedUtilsMasksDayOfMonthFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'dayOfMonth.txt');

const sharedUtilsMasksDayOfMonthContent = fs.readFileSync(sharedUtilsMasksDayOfMonthFilePath, 'utf8');


const sharedUtilsMasksDocumentIdMaskFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'documentIdMask.txt');

const sharedUtilsMasksDocumentIdMaskContent = fs.readFileSync(sharedUtilsMasksDocumentIdMaskFilePath, 'utf8');

const sharedUtilsMasksIndexFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'index.txt');

const sharedUtilsMasksIndexContent = fs.readFileSync(sharedUtilsMasksIndexFilePath, 'utf8');


const sharedUtilsMasksNumericIdMaskFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'numericIdMask.txt');

const sharedUtilsMasksNumericIdMaskContent = fs.readFileSync(sharedUtilsMasksNumericIdMaskFilePath, 'utf8');


const sharedUtilsMasksOnlyLettersFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'onlyLetters.txt');

const sharedUtilsMasksOnlyLettersContent = fs.readFileSync(sharedUtilsMasksOnlyLettersFilePath, 'utf8');

const sharedUtilsMasksOnlyNumbersFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'onlyNumbers.txt');

const sharedUtilsMasksOnlyNumbersContent = fs.readFileSync(sharedUtilsMasksOnlyNumbersFilePath, 'utf8');


const sharedUtilsMasksPhoneMaskFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'phoneMask.txt');

const sharedUtilsMasksPhoneMaskContent = fs.readFileSync(sharedUtilsMasksPhoneMaskFilePath, 'utf8');


const sharedUtilsMasksPisMaskFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'pisMask.txt');

const sharedUtilsMasksPisMaskContent = fs.readFileSync(sharedUtilsMasksPisMaskFilePath, 'utf8');


const sharedUtilsMasksRgMaskFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'rgMask.txt');

const sharedUtilsMasksRgMaskContent = fs.readFileSync(sharedUtilsMasksRgMaskFilePath, 'utf8');


const sharedUtilsMasksUnCnpjMaskFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'unCnpjMask.txt');

const sharedUtilsMasksUnCnpjMaskContent = fs.readFileSync(sharedUtilsMasksUnCnpjMaskFilePath, 'utf8');


const sharedUtilsMasksUnCurrencyMaskFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'unCurrencyMask.txt');

const sharedUtilsMasksUnCurrencyMaskContent = fs.readFileSync(sharedUtilsMasksUnCurrencyMaskFilePath, 'utf8');


const sharedUtilsMasksUnMaskPhoneFilePath = path.join(__dirname, 'templates', 'shared', 'utils', 'masks', 'unMaskPhone.txt');

const sharedUtilsMasksUnMaskPhoneContent = fs.readFileSync(sharedUtilsMasksUnMaskPhoneFilePath, 'utf8');

// tests


const testsFilePath = path.join(__dirname, 'templates', 'tests', 'setup.txt');

const testsContent = fs.readFileSync(testsFilePath, 'utf8');

// vscode

const vscodesettingsFilePath = path.join(__dirname, 'templates', 'vscode', 'settings.txt');

const vscodesettingsContent = fs.readFileSync(vscodesettingsFilePath, 'utf8');

const vscodetaskFilePath = path.join(__dirname, 'templates', 'vscode', 'task.txt');

const vscodetaskContent = fs.readFileSync(vscodetaskFilePath, 'utf8');

const vscodelaunchFilePath = path.join(__dirname, 'templates', 'vscode', 'launch.txt');

const vscodelaunchContent = fs.readFileSync(vscodelaunchFilePath, 'utf8');

const vscodeextensionsFilePath = path.join(__dirname, 'templates', 'vscode', 'extensions.txt');

const vscodeextensionsContent = fs.readFileSync(vscodeextensionsFilePath, 'utf8');


module.exports = [
    {
        path: path.join('src', 'core', 'http', 'protocols', 'index.ts'),
        content: `${protocolsIndexContent}`,
    },
    {
        path: path.join('src', 'core', 'http', 'protocols', 'body.ts'),
        content: `${protocolsBodyContent}`,
    },
    {
        path: path.join('src', 'core', 'http', 'protocols', 'dto.ts'),
        content: `${protocolsDtoContent}`,
    },
    {
        path: path.join('src', 'core', 'http', 'protocols', 'request.ts'),
        content: `${protocolsRequestContent}`,
    },
    {
        path: path.join('src', 'core', 'http', 'protocols', 'response.ts'),
        content: `${protocolsResponseContent}`,
    },
    {
        path: path.join('src', 'core', 'http', 'protocols', 'method.ts'),
        content: `${protocolsMethodContent}`,
    },
    {
        path: path.join('src', 'core', 'http', 'protocols', 'status-code.ts'),
        content: `${protocolsStatusCodeContent}`,
    },
    {
        path: path.join('src', 'core', 'http', 'protocols', 'url.ts'),
        content: `${protocolsUrlContent}`,
    },
    {
        path: path.join('src', 'core', 'http', 'index.ts'),
        content: `${httpIndexContent}`,
    },
    {
        path: path.join('src', 'core', 'error', 'index.ts'),
        content: `${errorIndexContent}`,
    },
    {
        path: path.join('src', 'core', 'error', 'api.ts'),
        content: `${errorApiContent}`,
    },
    {
        path: path.join('src', 'core', 'error', 'errorResponse.ts'),
        content: `${errorErrorResponseContent}`,
    },
    {
        path: path.join('src', 'core', 'error', 'status.ts'),
        content: `${errorStatusContent}`,
    },
    {
        path: path.join('src', 'core', 'error', 'timeout.ts'),
        content: `${errorTimeoutContent}`,
    },
    {
        path: path.join('src', 'core', 'error', 'unknown.ts'),
        content: `${errorUnknownContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'copyTextToClipboard.ts'),
        content: `${sharedUtilsCopyTextToClipboardContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'functions.ts'),
        content: `${sharedUtilsFunctionsContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'validIsInteger.ts'),
        content: `${sharedUtilsValidIsIntegerContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'validNameAndLastName.ts'),
        content: `${sharedUtilsValidNameAndLastNameContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'masks', 'cepMask.ts'),
        content: `${sharedUtilsMasksCepMaskContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'masks', 'cnpjMask.ts'),
        content: `${sharedUtilsMasksCnpjMaskContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'masks', 'cpfMask.ts'),
        content: `${sharedUtilsMasksCpfMaskContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'masks', 'currencyMask.ts'),
        content: `${sharedUtilsMasksCurrencyMaskContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'masks', 'dayOfMonth.ts'),
        content: `${sharedUtilsMasksDayOfMonthContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'masks', 'documentIdMask.ts'),
        content: `${sharedUtilsMasksDocumentIdMaskContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'masks', 'index.ts'),
        content: `${sharedUtilsMasksIndexContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'masks', 'numericIdMask.ts'),
        content: `${sharedUtilsMasksNumericIdMaskContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'masks', 'onlyLetters.ts'),
        content: `${sharedUtilsMasksOnlyLettersContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'masks', 'onlyNumbers.ts'),
        content: `${sharedUtilsMasksOnlyNumbersContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'masks', 'phoneMask.ts'),
        content: `${sharedUtilsMasksPhoneMaskContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'masks', 'pisMask.ts'),
        content: `${sharedUtilsMasksPisMaskContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'masks', 'rgMask.ts'),
        content: `${sharedUtilsMasksRgMaskContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'masks', 'unCnpjMask.ts'),
        content: `${sharedUtilsMasksUnCnpjMaskContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'masks', 'unCurrencyMask.ts'),
        content: `${sharedUtilsMasksUnCurrencyMaskContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'masks', 'unMaskPhone.ts'),
        content: `${sharedUtilsMasksUnMaskPhoneContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'localStorage', 'index.ts'),
        content: `${sharedUtilsLocalStorageIndexContent}`,
    },
    {
        path: path.join('src', 'shared', 'utils', 'crash', 'crash.ts'),
        content: `${sharedUtilsCrashCrashContent}`,
    },
    {
        path: path.join('src', '@types', 'env.d.ts'),
        content: `${typesEnvContent}`,
    },
    {
        path: path.join('.vscode', 'settings.json'),
        content: `${vscodesettingsContent}`,
    },
    {
        path: path.join('.vscode', 'tasks.json'),
        content: `${vscodetaskContent}`,
    },
    {
        path: path.join('.vscode', 'launch.json'),
        content: `${vscodelaunchContent}`,
    },
    {
        path: path.join('.vscode', 'extensions.json'),
        content: `${vscodeextensionsContent}`,
    },
    {
        path: path.join('tests', 'setup.ts'),
        content: `${testsContent}`,
    },
    {
        path: path.join('', '.env'),
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
        path: path.join('', '.env.prod'),
        content: `VITE_API_BASE_URL=http://api.com.br:20002/
VITE_API_BASE_URL_SIT=https://api.prod.com.br/
VITE_MUI_LICENSE_TOKEN=6be6
VITE_AMBIENTE=prod`,
    },
    {
        path: path.join('', '.env.sit'),
        content: `VITE_API_BASE_URL=http://api.sit.com.br/
VITE_MUI_LICENSE_TOKEN=6be6
VITE_AMBIENTE=sit`,
    },
    {
        path: path.join('', '.env.uat'),
        content: `VITE_API_BASE_URL=https://api.uat.com.br/
VITE_MUI_LICENSE_TOKEN=6be6
VITE_AMBIENTE=uat`,
    },
    {
        path: path.join('', '.env.local'),
        content: `VITE_API_BASE_URL=http://127.0.0.1:55632/
VITE_MUI_LICENSE_TOKEN=6be6
VITE_AMBIENTE=local`,
    },
];
