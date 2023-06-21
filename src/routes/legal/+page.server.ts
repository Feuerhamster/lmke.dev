import { graphql } from "$lib/directus";

import LegalGQLQuery from "$graphql/legal.gql?raw";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async () => {
	const data = await graphql(LegalGQLQuery);

	return {
		legal: data.lmke_dev.legal as string
	};
};
