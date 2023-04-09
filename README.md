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

### Pages

#### **Home/Dashboard -** The general information over actives, with a filter by status.

#### above 2k pixels

![Screenshot 2023-04-09 at 10 25 52](https://user-images.githubusercontent.com/66645319/230775406-2bde2205-de85-471f-a1c9-304dd870ad3c.png)

#### below 2k pixels

![Screenshot 2023-04-09 at 10 25 00](https://user-images.githubusercontent.com/66645319/230775358-8c095acf-38ed-4e20-8956-81d8c70e5c58.png)

#### **Assets -** Assets list with critical informations.

![Screenshot 2023-04-09 at 10 26 19](https://user-images.githubusercontent.com/66645319/230775436-47556360-af2f-4ce9-bd99-ee9c1d499665.png)

#### **Assets details-** detailed information about a specific asset.

#### example with all infos

![Screenshot 2023-04-09 at 10 26 43](https://user-images.githubusercontent.com/66645319/230775459-71d2809d-88c9-4f73-896d-7fb6237283a1.png)

#### example without power

![Screenshot 2023-04-09 at 10 27 31](https://user-images.githubusercontent.com/66645319/230775494-4e6149a7-e819-4354-8f03-bf19cbf69faf.png)

#### **Units -** Units list in form of a table.

![Screenshot 2023-04-09 at 10 27 49](https://user-images.githubusercontent.com/66645319/230775508-f670f330-bb70-4196-b226-6fec29eb8d2f.png)

#### **Companies -** Companies list in form of a table.

![Screenshot 2023-04-09 at 10 28 06](https://user-images.githubusercontent.com/66645319/230775525-e8362a18-ff30-4984-a0d8-bf49ecd0a4a3.png)

#### **Users -** Users list in form of a table.

![Screenshot 2023-04-09 at 10 28 18](https://user-images.githubusercontent.com/66645319/230775532-fe54c6e1-1559-4c14-8922-df9b1ec50909.png)
