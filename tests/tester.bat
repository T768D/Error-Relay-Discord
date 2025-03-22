REM This is so that both the commonjs version and esm version run seperately from each other

bun test ./main.test.mjs
bun test ./main.test.js