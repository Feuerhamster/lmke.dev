import { Directus, type ID } from "@directus/sdk";

import "dotenv/config";

const directus = new Directus(process.env.DIRECTUS_URL);
await directus.auth.static(process.env.DIRECTUS_TOKEN);

export default directus;

export function convertAssetURL(imageId: ID) {
	return new URL("/assets/" + imageId, process.env.DIRECTUS_URL).href;
}