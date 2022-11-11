/**
 * Env var wrapper.
 * Change these settings by setting the vars in the `.env` file.
 * You can also use a `.env.production` file to overwrite the defaults only for production environments.
 * This is neccesary as a workaround for dynamic runtime variables.
 */
let config = {
	directus_url_public: "",

	og_image: "",

	ackee_server: "",
	ackee_domainId: "",
	ackee_detailed: false
};

export default config;

export function populateConfig(session: object) {
	for (let [key, value] of Object.entries(session)) {
		
		if (key in config && value !== undefined) {
			config[key] = value;
		}
	}
}
