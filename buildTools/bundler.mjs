await Bun.build({
	entrypoints: ["../src/main.mts"],
	outdir: "../dist",
	env: "disable",
	target: "bun",
	format: "esm",
	sourcemap: "external"
});