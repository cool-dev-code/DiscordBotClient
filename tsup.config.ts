import { defineConfig } from "tsup";

export default defineConfig({
	entry: ['DiscordProtos/src/index.ts'],
	external: [],
	noExternal: [],
	platform: 'node',
	format: ['cjs'],
	skipNodeModulesBundle: true,
	target: 'es2022',
	clean: true,
	shims: false,
	minify: false,
	splitting: false,
	keepNames: true,
	dts: true,
	sourcemap: false,
	esbuildPlugins: [],
	outDir: 'DiscordProtos/dist',
    
});