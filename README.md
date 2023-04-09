![plot](./src/assets/logo-tractian.svg)

<h1 align="center">Tractian Challenge</h1>

## About

The challenge is to Build an application that shows all possible data and actions using the this [API](https://github.com/tractian/fake-api).

## Technologies and libs

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Husky](https://typicode.github.io/husky/#/)
- [ESLint](https://eslint.org/)
- [Commitlint](https://commitlint.js.org/#/)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Prettier](https://prettier.io/)
- [React router dom](https://reactrouter.com/en/main)
- [Antd](https://ant.design/)
- [Highcharts](https://www.highcharts.com/)
- [Mobx](https://mobx.js.org/README.html)
- [Sass](https://sass-lang.com/)
- [React error boundary](https://www.npmjs.com/package/react-error-boundary)

## Architecture

The chosen architecture was the controller architecture, which allows us to segregate the logic from the exhibition, making it more readable and easier to maintain.

### Controller architecture

In this architecture, the logic is implemented in a separate component, known as the model(`controller.ts`), which represents the application's data and business rules. The user interface is implemented in another component, known as the view(`index.tsx`), which provides the user with a way to interact with the application. The controller acts as a bridge between these two components, communicating with both the view and the model and coordinating their actions.

One of the main advantages of the controller architecture is that it promotes separation of concerns, which means that each component of the application is responsible for a specific task and does not overlap with the responsibilities of other components. This makes the code more modular, easier to understand, and easier to maintain.

## How to run the project

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [VSCode](https://code.visualstudio.com/) (or another IDE)

### Instalation

#### Cloning the repo

```bash
$ gh repo clone IgorCastromann/desafio-tractian
```

#### Install deps

```bash
$ cd desafio-tractian
$ yarn
```

#### Run project

```bash
$ yarn dev
```

## Screens

**Home/Dashboard -** The general information over actives, with a filter by status.

**Assets -** Assets list with critical informations.

**Assets details-** detailed information about a specific asset.

**Units -** Units list in form of a table.

**Companies -** Companies list in form of a table.

**Users -** Users list in form of a table.
