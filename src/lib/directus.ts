import type { DirectusCollections } from "$models/directus";
import { Directus, type ID } from "@directus/sdk";

import "dotenv/config";

const directus = new Directus<DirectusCollections>(process.env.DIRECTUS_URL);
await directus.auth.static(process.env.DIRECTUS_TOKEN);

export default directus;

export async function graphql(query: string, variables?: object) {
	try {
		let res = await fetch(process.env.DIRECTUS_URL + "/graphql", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + process.env.DIRECTUS_TOKEN
			},
			body: JSON.stringify({
				query, variables
			})
		});

		return res.json();
	} catch(e) {
		throw e;
	}
}