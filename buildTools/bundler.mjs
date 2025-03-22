await Bun.build({
	entrypoints: ["../src/main.ts"],
	outdir: "../dist",
	env: "disable",
	target: "bun",
	format: "cjs",
	sourcemap: "external",
	minify: {
		whitespace: true,
		syntax: true,
		identifiers: true
	},
	bytecode: true,
});