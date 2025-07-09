import { graphql } from "$lib/directus";
import type { PageServerLoad } from "./$types";
import GQLArticleQuery from "$graphql/article.gql?raw";
import type { IDirectusArticle } from "$models/directus";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ params }) => {
	let data = await graphql(GQLArticleQuery, { id: params.id });

	const article = data.lmke_articles_by_id as IDirectusArticle;

	if (params.slug !== article.slug) {
		return error(404);
	}

	return { article };
};
