import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],
	
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),
		
		alias: {
			$assets: "./src/assets",
			$content: "./src/content",
			$components: "./src/components",
			$models: "./src/models",
			$lib: "./src/lib"
		}
	}
};

export default config;
