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
  <li>Automatically responds to the message or interaction letting the user know that there was a error that occured</li>
  <li>Integrated error cleaning, no more useless stack traces for node_modules</li>
  <li>Optional catching of every error that is emitted from the program, logs it and prevents it from crashing</li>
  <li>In depth error logging, errors stemming from the library have specific causes. The sendError function will return ["failed", <failure_stage>] to indicate where it happened</li>
</ul>


<h2 style="padding-top: 10px;">Development</h2>

### <h3 style="margin-top:30px;">Installing</h3>
```bash
git clone https://github.com/T768D/Error-Relay-Discord
```

### <h3 style="margin-top:30px;">Dependancies</h3>
Bun
```bash
bun install
```

NodeJS
```bash
npm install
```
- Bun or NodeJS or equivilent
- Typescript
- Terser or equivilent bundler
- Discord.js (for types)
- ESLint (optional)
- Typescript ESLint (optional)

### <h3 style="margin-top:30px;">Bundling</h3>
#### VSCode: 
- Select and Start Debugging
- Bundle
#### Others:
- Run typescript `tsc -p tsconfig.json`
- Run buildTools/mimifier.mjs


<h2 style="padding-top: 10px;">Usage</h2>

### <h3 style="margin-top:30px;">Installing</h3>
```bash
bun install error-relay-discord
npm install error-relay-discord
```

### <h3 style="margin-top:30px;">Importing</h3>
For CJS:
```js
const errorHandler = require("error-relay-discord");
```

For ESM:
```js
import errorHandler from "error-relay-discord";
```

### <h3 style="margin-top:30px;">Usage</h3>
```js
const handler = new errorHandler(channelToSendErrorsTo);
await handler.sendError("This is a error");
await handler.sendError("Another error", message);
await handler.sendError("Command Interaction error!", chatInputCommand);
```