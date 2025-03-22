![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![0 dependencies!](https://img.shields.io/badge/0%20Dependencies-F80000?style=for-the-badge)
![Bun](https://img.shields.io/badge/bun-282a36?style=for-the-badge&logo=bun&logoColor=fbf0df)
![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![License](https://img.shields.io/badge/CC--BY--NC--SA--4.0-lightgrey?style=for-the-badge)

# __Discord Error Handler__

<p style="font-size: 20px">0 Dependancy lightweight typescript library implementing error handling and error logging with discord</p>


<h2 style="padding-top: 10px;">Features</h2>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>Fully documented types</li>
  <li>JSDoc comments for every variable and function</li>
  <li>Lightweight and efficient with zero dependencies</li>
</ul>


<h2 style="padding-top: 10px;">Dev Requirements</h2>
<ul style="list-style-type: disc; padding-left: 20px;">	
	<li>Typescript</li>
	<li>Terser or equivilant bundler</li>
	<li>Discord.js (for types)</li>
	<li>ESLint (optional)</li>
	<li>Typescript ESLint (optional)</li>
</ul>


<h2 style="padding-top: 10px;">Usage</h2>

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
const handler = new errorHandler(channelToSendErrorsTo);
await handler.sendError("This is a error");
await handler.sendError("Another error", message);
await handler.sendError("Command Interaction error!", chatInputCommand);
```