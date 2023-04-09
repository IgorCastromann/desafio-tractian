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

## Pages

## **Home/Dashboard -** The general information over actives, with a filter by status.

### above 2k pixels

![Screenshot 2023-04-09 at 11 28 20](https://user-images.githubusercontent.com/66645319/230778577-88a8263f-3b03-4960-b9bd-b2ce9438f53d.png)

### below 2k pixels

![Screenshot 2023-04-09 at 11 28 57](https://user-images.githubusercontent.com/66645319/230778616-b531d189-eb48-468b-af2f-8e606bef8d44.png)

### with active status filter

![Screenshot 2023-04-09 at 11 29 48](https://user-images.githubusercontent.com/66645319/230778676-5686ceb4-9342-49f5-b90f-a596736aaa77.png)

## **Assets -** Assets list with critical informations.

![Screenshot 2023-04-09 at 11 31 19](https://user-images.githubusercontent.com/66645319/230778765-7e30f3f8-2220-42c5-af46-f462efeea492.png)

### **Assets details-** detailed information about a specific asset.

### example with all infos

![Screenshot 2023-04-09 at 14 28 48](https://user-images.githubusercontent.com/66645319/230787372-963ffcac-7069-4388-b941-783a1cfb4178.png)

### example without power

![Screenshot 2023-04-09 at 14 29 16](https://user-images.githubusercontent.com/66645319/230787395-00328fe8-fd74-4e56-be58-56c63c986c2c.png)

### edit modal example

![Screenshot 2023-04-09 at 14 29 42](https://user-images.githubusercontent.com/66645319/230787412-adf6315d-4700-4f1e-aab7-15f42be2c8d3.png)

## **Units -** Units list in form of a table.

![Screenshot 2023-04-09 at 14 30 05](https://user-images.githubusercontent.com/66645319/230787429-b02709bf-8080-4e38-b3fd-e9e8eeb5f71e.png)

### edit modal example

![Screenshot 2023-04-09 at 14 30 16](https://user-images.githubusercontent.com/66645319/230787440-584c6361-d566-408a-8059-6cdc01d2a883.png)

## **Companies -** Companies list in form of a table.

![Screenshot 2023-04-09 at 14 31 07](https://user-images.githubusercontent.com/66645319/230787473-fc1b359c-f0a2-4f79-83c1-7032491fbcf1.png)

### edit modal example

![Screenshot 2023-04-09 at 14 31 19](https://user-images.githubusercontent.com/66645319/230787482-73939576-43df-4b4d-8765-68a7ac115a8b.png)

## **Users -** Users list in form of a table.

![Screenshot 2023-04-09 at 14 31 38](https://user-images.githubusercontent.com/66645319/230787495-1312af9f-0b1c-4450-8acb-70549387e795.png)

### edit modal example

![Screenshot 2023-04-09 at 14 31 51](https://user-images.githubusercontent.com/66645319/230787510-9d6c6d68-35f5-4188-bc8e-f8278e57fba4.png)

## **Work Orders -** Work orders list in for of a table.

![Screenshot 2023-04-09 at 11 33 37](https://user-images.githubusercontent.com/66645319/230778908-69de63ac-e36e-4955-86b5-3d391e2fbf1c.png)

### Work orders modal

![Screenshot 2023-04-09 at 11 35 28](https://user-images.githubusercontent.com/66645319/230778987-cfc32e31-b36e-494a-a21c-174a51bcf628.png)
