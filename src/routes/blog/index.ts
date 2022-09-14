import directus from "$lib/directus";
import type { RequestHandler } from "@sveltejs/kit";

const limit = 12;

export const get: RequestHandler = async ({ url }) => {

	let pageFromQuery = url.searchParams.get("page");

	if (pageFromQuery && !/\d+/.test(pageFromQuery)) {
		return {
			status: 400
		}
	}

	const page = pageFromQuery ? parseInt(pageFromQuery) : 1;

	let articlesReq = directus.items("lmke_articles").readByQuery({
		limit,
		page,
		meta: "*",
		sort: ["-date_published", "-date_created"],
		fields: [
			"*",
			"topics.topic.name",
			"wallpaper_image.id",
			"wallpaper_image.title",
			"preview_image.id",
			"preview_image.title",
			"user_created.*",
			"user_created.avatar.id"
		]
	});

	let articleTopicsReq = directus.items("lmke_article_topics").readByQuery({
		fields: ["name"]
	});

	let results = await Promise.all([articlesReq, articleTopicsReq]);
	let [articles, topics] = results;

	return {
		body: {
			articles: articles.data,
			topics: topics.data,
			page,
			totalPages: Math.ceil(articles.meta.filter_count / limit)
		}
	}
}