import adapter from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	extensions: [".svelte"],
	
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess()],

	kit: {
		adapter: adapter({
			out: "build"
		}),
		
		alias: {
			$assets: "./src/assets",
			$content: "./src/content",
			$components: "./src/components",
			$models: "./src/models",
			$lib: "./src/lib",
			$graphql: "./src/graphql"
		}
	}
	
};

export default config;
