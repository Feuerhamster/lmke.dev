import { graphql } from "$lib/directus";
import type { RequestHandler } from "@sveltejs/kit";

import LegalGQLQuery from "$graphql/legal.gql?raw";

export const get: RequestHandler = async () => {
	const data = await graphql(LegalGQLQuery);

	return {
		body: {
			legal: data.lmke_dev.legal
		}
	}
}