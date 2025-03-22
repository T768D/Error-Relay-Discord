import { minify } from "terser";
import { readFileSync, writeFileSync } from "fs";

const result = await minify(readFileSync("../dist/main.js", "utf-8"), {
	compress: true,
	toplevel: true,
});

if (!result.code)
	throw new Error("Code doesnt exist!");

writeFileSync("../dist/main.js", result.code, "utf-8");