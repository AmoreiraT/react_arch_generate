<p align="center">
  <a href="https://github.com/AmoreiraT/react_arch_generate" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/FxL5qM0.jpg" alt="React Arch Generate logo"></a>
</p>

<h2 align="center">React Arch Generate</h2>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/AmoreiraT/react_arch_generate.svg)](https://github.com/AmoreiraT/react_arch_generate/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/AmoreiraT/react_arch_generate.svg)](https://github.com/AmoreiraT/react_arch_generate/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AmoreiraT/react_arch_generate/blob/main/LICENSE)

</div>

---

<p align="center"> Automatize a configuração e estruturação de projetos React com uma ferramenta de linha de comando eficiente.
    <br>
</p>

## 📝 Índice

- [Sobre](#about)
- [Como Funciona](#working)
- [Uso](#usage)
- [Estrutura do Projeto](#structure)
- [Começando](#getting_started)
- [Construído Usando](#built_using)
- [Contribuindo](#contributing)
- [Autores](#authors)
- [Agradecimentos](#acknowledgement)

## 🧐 Sobre <a name = "about"></a>

**`React Arch Generate`** é uma ferramenta CLI desenvolvida para simplificar a criação de projetos React, gerando uma estrutura de diretórios padrão e configurando automaticamente o ambiente de desenvolvimento com as melhores práticas.

```markdown
|-- dev
    |-- LICENSE
    |-- README.md
    |-- blueReact.js
    |-- commands
    |   |-- createApp.js
    |   |-- installDependencies.js
    |-- configurations
    |   |-- directories.js
    |   |-- files.js
    |   |-- templates
    |       |-- .DS_Store
    |       |-- @types
    |       |   |-- env.d.txt
    |       |-- core
    |       |   |-- .DS_Store
    |       |   |-- error
    |       |   |   |-- api.txt
    |       |   |   |-- errorResponse.txt
    |       |   |   |-- index.txt
    |       |   |   |-- status.txt
    |       |   |   |-- timeout.txt
    |       |   |   |-- unknown.txt
    |       |   |-- http
    |       |       |-- index.txt
    |       |       |-- protocols
    |       |           |-- body.txt
    |       |           |-- dto.txt
    |       |           |-- index.txt
    |       |           |-- method.txt
    |       |           |-- request.txt
    |       |           |-- response.txt
    |       |           |-- status-code.txt
    |       |           |-- url.txt
    |       |-- shared
    |       |   |-- .DS_Store
    |       |   |-- utils
    |       |       |-- .DS_Store
    |       |       |-- copyTextToClipboard.txt
    |       |       |-- functions.txt
    |       |       |-- validIsInteger.txt
    |       |       |-- validNameAndLastName.txt
    |       |       |-- crash
    |       |       |   |-- crash.txt
    |       |       |-- localStorage
    |       |       |   |-- index.txt
    |       |       |-- masks
    |       |           |-- cepMask.txt
    |       |           |-- cnpjMask.txt
    |       |           |-- cpfMask.txt
    |       |           |-- currencyMask.txt
    |       |           |-- dayOfMonth.txt
    |       |           |-- documentIdMask.txt
    |       |           |-- index.txt
    |       |           |-- numericIdMask.txt
    |       |           |-- onlyLetters.txt
    |       |           |-- onlyNumbers.txt
    |       |           |-- phoneMask.txt
    |       |           |-- pisMask.txt
    |       |           |-- rgMask.txt
    |       |           |-- unCnpjMask.txt
    |       |           |-- unCurrencyMask.txt
    |       |           |-- unMaskPhone.txt
    |       |-- tests
    |       |   |-- setup.txt
    |       |-- vscode
    |           |-- extensions.txt
    |           |-- launch.txt
    |           |-- settings.txt
    |           |-- task.txt
    |-- utilities
        |-- configModifications.js
        |-- fileOperations.js
        |-- templates
            |-- tsconfig.node.txt
            |-- tsconfig.txt
            |-- vite.config.txt

```

## 💭 Como Funciona <a name = "working"></a>

Ao executar **`React Arch Generate`**, a ferramenta configura um projeto React com uma arquitetura padrão, incluindo suporte a TypeScript, configurações de teste, e mais, permitindo que você inicie rapidamente o desenvolvimento de aplicativos React com uma base sólida.

Ao executar um simples comando, a ferramenta cria um novo projeto **React**, configura **TypeScript**, instala uma gama de dependências úteis como:

- [Vite](https://vitejs.dev/)
- [axios](https://axios-http.com/ptbr/)
- [react-query](https://github.com/TanStack/query?tab=readme-ov-file#readme)
- [zustand](https://github.com/pmndrs/zustand)

Organiza a estrutura do projeto em diretórios e arquivos predefinidos, incluindo configurações de ambiente, testes, e componentes padrão.

## 🏁 Começando <a name = "getting_started"></a>

Para configurar e usar o **`React Arch Generate`** localmente, siga estes passos:

### Pré-requisitos

- Node.js versão 12 ou superior.

### Instalação

Clone o repositório para sua máquina local:

```bash
  git clone https://github.com/AmoreiraT/react_arch_generate.git
  cd react_arch_generate
```

## 🎈 Uso <a name = "usage"></a>

Para gerar um novo projeto React, execute o seguinte comando na raiz do projeto:

```bash
node blueReact.js [nome_do_seu_projeto]
```

Isso criará um novo diretório com o nome especificado, contendo a estrutura de diretórios padrão e arquivos de configuração necessários para um projeto React.

## 🏗 Estrutura do Projeto <a name = "structure"></a>

O `React Arch Generate` organiza o projeto da seguinte maneira:

- **src/**: Código fonte do aplicativo, incluindo componentes, hooks, e serviços.
  - **core/**: Configurações essenciais do projeto, como HTTP e tratamento de erros.
  - **features/**: Componentes e lógica específica de funcionalidades.
  - **shared/**: Componentes, utilidades, e estilos compartilhados.
  - **routes/**: Configuração de rotas do aplicativo.
- **tests/**: Arquivos de teste.
- **stories/**: Histórias do Storybook para componentes.
- **.vscode/**: Configurações recomendadas do VSCode para o projeto.

Além disso, a ferramenta configura automaticamente vários scripts no `package.json` para facilitar o desenvolvimento e a construção do projeto.

### package.json

```json
{
  "name": "exampleapp",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "env-cmd -f .env vite --host",
    "build": "tsc && vite build",
    "lint": "eslint src --ext .ts,.tsx",
    "preview": "vite preview --host",
    "dev:uat": "env-cmd -f .env.uat vite --host",
    "dev:sit": "env-cmd -f .env.sit vite --host",
    "dev:prod": "env-cmd -f .env.prod vite --host",
    "dev:local": "env-cmd -f .env.local vite --host",
    "build:uat": "env-cmd -f .env.uat vite build",
    "build:sit": "env-cmd -f .env.sit vite build",
    "build:prod": "env-cmd -f .env.prod vite build",
    "build:local": "env-cmd -f .env.local vite build",
    "lint:fix": "eslint --fix src --ext .ts,.tsx",
    "format": "prettier --write 'src/**/*.{ts,tsx}' --config .prettierrc.cjs",
    "test": "vitest",
    "vitest-ui": "vitest --ui"
  },
  "dependencies": {
    "@dotenvx/dotenvx": "^0.18.0",
    "@emotion/react": "^11.10.5",
    "@emotion/styled": "^11.10.5",
    "@mdx-js/rollup": "^3.0.0",
    "@react-hooks-library/core": "^0.5.2",
    "axios": "^1.6.7",
    "formik": "^2.4.5",
    "i18next": "^22.4.10",
    "react": "^18.2.0",
    "react-device-detect": "^2.2.3",
    "react-dom": "^18.2.0",
    "react-error-boundary": "^4.0.12",
    "react-grid-layout": "^1.3.4",
    "react-hook-form": "^7.50.1",
    "react-i18next": "^12.2.0",
    "react-is": "^18.2.0",
    "react-jwt": "^1.1.8",
    "react-query": "^3.39.3",
    "react-refresh": "^0.14.0",
    "react-router-dom": "^6.22.0",
    "styled-components": "^5.3.6",
    "uuid": "^9.0.0",
    "webpack": "^5.90.1",
    "yup": "^1.0.2",
    "zustand": "^4.5.0"
  },
  "devDependencies": {
    "@babel/core": "^7.23.9",
    "@jest/globals": "^29.7.0",
    "@testing-library/jest-dom": "^6.4.2",
    "@testing-library/react": "^14.2.1",
    "@types/jest": "^29.5.12",
    "@types/node": "^18.13.0",
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.2.19",
    "@types/react-grid-layout": "^1.3.2",
    "@types/styled-components": "^5.1.26",
    "@types/uuid": "^9.0.1",
    "@typescript-eslint/eslint-plugin": "^5.52.0",
    "@typescript-eslint/parser": "^5.62.0",
    "@vitejs/plugin-react": "^4.2.1",
    "@vitest/ui": "^1.2.2",
    "babel-loader": "^9.1.3",
    "cross-env": "^7.0.3",
    "env-cmd": "^10.1.0",
    "eslint": "^8.34.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-airbnb-typescript": "^17.0.0",
    "eslint-config-prettier": "^8.6.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "jest": "^29.7.0",
    "jsdom": "^24.0.0",
    "prettier": "^2.8.4",
    "prop-types": "^15.8.1",
    "typescript": "^5.2.2",
    "vite": "^5.0.12",
    "vitest": "^1.2.2"
  }
}
```

### vite.config.ts

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { config } from 'dotenv';
import mdx from '@mdx-js/rollup'
import * as path from 'path';

config();

export default defineConfig(() => {
  return {
    resolve: {
      alias: [
        { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
        { find: '@core', replacement: path.resolve(__dirname, 'src/core') },
        {
          find: '@domain',
          replacement: path.resolve(__dirname, 'src/domain'),
        },
        {
          find: '@features',
          replacement: path.resolve(__dirname, 'src/features'),
        },
        { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
        { find: '@i18n', replacement: path.resolve(__dirname, 'src/i18n') },
        { find: '@stories', replacement: path.resolve(__dirname, 'stories') },
        { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
        { find: '@routes', replacement: path.resolve(__dirname, 'src/routes') },
        { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      ],
    },
    server: {
      open: true,
      port: 3000,
    },
    plugins: [
    mdx(),
    react({ include: /\.(mdx|js|jsx|ts|tsx|json)$/ }),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './tests/setup',
    },
    build: {
      sourcemap: true,
    },
  };
});
```

### Estrutura completa a ser gerada

```markdown

|-- exampleApp
    |-- .env
    |-- .env.local
    |-- .env.prod
    |-- .env.sit
    |-- .env.uat
    |-- .eslintrc.cjs
    |-- .gitignore
    |-- README.md
    |-- index.html
    |-- package-lock.json
    |-- package.json
    |-- tsconfig.json
    |-- tsconfig.node.json
    |-- vite.config.ts
    |-- .vscode
    |   |-- extensions.json
    |   |-- launch.json
    |   |-- settings.json
    |   |-- tasks.json
    |-- public
    |   |-- vite.svg
    |-- src
    |   |-- App.css
    |   |-- App.tsx
    |   |-- index.css
    |   |-- main.tsx
    |   |-- vite-env.d.ts
    |   |-- @types
    |   |   |-- env.d.ts
    |   |-- assets
    |   |   |-- react.svg
    |   |-- core
    |   |   |-- error
    |   |   |   |-- api.ts
    |   |   |   |-- errorResponse.ts
    |   |   |   |-- index.ts
    |   |   |   |-- status.ts
    |   |   |   |-- timeout.ts
    |   |   |   |-- unknown.ts
    |   |   |-- http
    |   |       |-- index.ts
    |   |       |-- protocols
    |   |           |-- body.ts
    |   |           |-- dto.ts
    |   |           |-- index.ts
    |   |           |-- method.ts
    |   |           |-- request.ts
    |   |           |-- response.ts
    |   |           |-- status-code.ts
    |   |           |-- url.ts
    |   |-- features
    |   |-- hooks
    |   |-- i18n
    |   |-- routes
    |   |-- shared
    |       |-- components
    |       |-- styles
    |       |-- utils
    |           |-- copyTextToClipboard.ts
    |           |-- functions.ts
    |           |-- validIsInteger.ts
    |           |-- validNameAndLastName.ts
    |           |-- crash
    |           |   |-- crash.ts
    |           |-- localStorage
    |           |   |-- index.ts
    |           |-- masks
    |               |-- cepMask.ts
    |               |-- cnpjMask.ts
    |               |-- cpfMask.ts
    |               |-- currencyMask.ts
    |               |-- dayOfMonth.ts
    |               |-- documentIdMask.ts
    |               |-- index.ts
    |               |-- numericIdMask.ts
    |               |-- onlyLetters.ts
    |               |-- onlyNumbers.ts
    |               |-- phoneMask.ts
    |               |-- pisMask.ts
    |               |-- rgMask.ts
    |               |-- unCnpjMask.ts
    |               |-- unCurrencyMask.ts
    |               |-- unMaskPhone.ts
    |-- stories
    |-- tests
        |-- setup.ts
```

## ⛏️ Construído Usando <a name = "built_using"></a>

- [Node.js](https://nodejs.org/en/) - Ambiente de execução para JavaScript

## 🤝 Contribuindo <a name = "contributing"></a>

Contribuições, problemas e solicitações de pull são bem-vindos. Para maiores informações, por favor, veja o arquivo [CONTRIBUTING.md](https://github.com/AmoreiraT/react_arch_generate/blob/main/CONTRIBUTING.md).

## ✍️ Autores <a name = "authors"></a>

- [Thiago Amoreira](https://github.com/AmoreiraT) - Ideia e desenvolvimento inicial

## 🎉 Agradecimentos <a name = "acknowledgement"></a>

- A todos que contribuírem para o projeto
- Inspirado pelas melhores práticas de desenvolvimento de aplicativos React
