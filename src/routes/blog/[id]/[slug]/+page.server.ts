import { graphql } from "$lib/directus";
import type { PageServerLoad } from "./$types";
import GQLArticleQuery from "$graphql/article.gql?raw";
import type { IDirectusArticle } from "$models/directus";

export const load: PageServerLoad = async ({ params }) => {
	let data = await graphql(GQLArticleQuery, { id: params.id });

	return {
		article: data.lmke_articles_by_id as IDirectusArticle
	};
};
