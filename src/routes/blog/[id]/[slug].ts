import { graphql } from "$lib/directus";
import type { RequestHandler } from "@sveltejs/kit";
import GQLArticleQuery from "$graphql/article.gql?raw";

export const get: RequestHandler = async ({ params }) => {
	let data = await graphql(GQLArticleQuery, { id: params.id })

	return {
		body: {
			article: data.lmke_articles_by_id
		}
	}
}