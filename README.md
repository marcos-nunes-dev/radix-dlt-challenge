# Marcos Nunes - Radix Challenge

Project developed for the Radix DLT, Frontend challenge.

## **Considerations and Improvements**

This project was developed with the intention of being a presentation. In order for it to be considered a functional system with quality of file handling and encryption, improvements are needed. Some parts of the code were designed in such a way that they only allowed minimal functionality for presentation. The development of the parts that tend to stay in the backend was not deepened once the test presents itself to the frontend.

-   Ciphers can be used with progressive encryption and using custom keys and IV for more security.
-   The initial communication was all done through server side functions as it should. Some parts are on client passing EXTREMELY SENSITIVE data. The system should contain an authentication and cookie manipulation system to store the session and authentication with the server to be able to fix this known issues.

These are some of the most important issues to be considered a minimally functional system. The system was developed in this way since it was my intention that the eight-hour period for development and the lack of security specifications in relation to communication and some other problems such as two factor are only subsumed by the knowledge of their existence.

---

## The project

In this project I chose to choose a set of technology that would give me more development speed since I am very busy because of my current project. I chose to use a component based design and theme based design design pattern. That way I can streamline the development process without worrying about the scalability and styling versatility of each component.

-   [Typescript](https://www.typescriptlang.org) - Project base
-   [Testing Library](https://testing-library.com) - Jest based testing utilities.
-   [Styled Components](https://styled-components.com) - Styling
-   [Styled System](https://styled-system.com) - Component base design for styling
-   [Styled Tools](https://github.com/diegohaz/styled-tools) - Interpolation functions for styling
-   [Antd](https://ant.design/docs/react/introduce) - React UI Library
-   [CryptoJS](https://cryptojs.gitbook.io/docs/) - Crypto for ciphers process
-   [GracefulFS](https://github.com/isaacs/node-graceful-fs#readme) - better FS handling

and I just used a few others things like: Next.js, husky, esLint, axios, react truncate and etc.

## Installation

requires [Node.js](https://nodejs.org/) v10+ to run.

Create a .env file in root folder based on .env-sample

```sh
NEXT_PUBLIC_APP_SECRET= //Key used to cripto password sent via requests
```

Install the dependencies and devDependencies

```sh
yarn
npm install
```

For development

```sh
yarn dev
```

For production

```sh
yarn build
```

some others commands

```sh
yarn test // run jest unit tests
yarn coverage // generates coverage report
yarn lint:fix // runs eslint
```
