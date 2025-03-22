![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![0 dependencies!](https://img.shields.io/badge/0%20Dependencies-F80000?style=for-the-badge)
![Bun](https://img.shields.io/badge/bun-282a36?style=for-the-badge&logo=bun&logoColor=fbf0df)
![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![License](https://img.shields.io/badge/CC--BY--NC--SA--4.0-lightgrey?style=for-the-badge)

# Discord Error Handler

<p style="font-size: 20px">0 Dependancy lightweight typescript library implementing error handling and error logging with discord</p>

<h2>Features</h2>
- Fully documented types
- JSDoc comments for every variable and function
- Lightweight and efficient with zero dependencies


## Dev Requirements
- Typescript
- Terser or equivilant bundler
- Discord.js (for types)
- ESLint (optional)
- Typescript ESLint (optional)


## Usage

### Installing
```bash
bun install error-relay-discord
npm install error-relay-discord
```

### Importing
For CJS:
```js
const errorHandler = require("error-relay-discord");
```

For ESM:
```js
import errorHandler from "error-relay-discord";
```

### Usage
```js
const handler = new discordErrorHandler(channelToSendErrorsTo);
await handler.sendError("This is a error");
await handler.sendError("Another error", message);
await handler.sendError("Command Interaction error!", chatInputCommand);
```


<style text="css">	
h2 {
	padding-top: 10px;
}
</style>