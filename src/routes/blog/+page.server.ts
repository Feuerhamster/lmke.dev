import { graphql } from "$lib/directus";
import type { PageServerLoad } from "./$types";
import type { IDirectusArticle, IDirectusArticleTopic } from "$models/directus";
import GQLBlogQuery from "$graphql/blog.gql?raw";

const limit = 12;

export const load: PageServerLoad = async ({ url }) => {
	let pageFromQuery = url.searchParams.get("page");

	if (pageFromQuery && !/\d+/.test(pageFromQuery)) {
		return {
			status: 400
		};
	}

	const page = pageFromQuery ? parseInt(pageFromQuery) : 1;

	let data = await graphql(GQLBlogQuery, { limit, page });

	const articleCount = data.lmke_articles_aggregated[0].count.id;

	let totalPages = Math.ceil(articleCount / limit);

	return {
		articles: data.lmke_articles as IDirectusArticle[],
		topics: data.lmke_article_topics as IDirectusArticleTopic[],
		page,
		totalPages: totalPages < 1 ? 1 : totalPages
	};
};
