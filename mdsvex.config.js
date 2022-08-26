import rehypeExternalLinks from "rehype-external-links"

const config = {
	extensions: [".md"],

	rehypePlugins: [
		[rehypeExternalLinks, { rel: ["noopener"] }]
	],
};

export default config;
