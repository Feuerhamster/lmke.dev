import { graphql } from "$lib/directus";
import type { IDirectusArticle } from "$models/directus";
import type { RequestHandler } from "./$types";
import { getDirectusImageUrl } from "$lib/utils";
import GQLBlogQuery from "$graphql/blog.gql?raw";
import RssTemplate from "$templates/blog-rss.liquid?raw";
import { Liquid } from "liquidjs";

var engine = new Liquid();

const template = engine.parse(RssTemplate);

export const GET: RequestHandler = async () => {
	let data = await graphql(GQLBlogQuery, { limit: 18, page: 1 });

	const articles = data.lmke_articles as IDirectusArticle[];

	const imageSettings = { quality: 70, width: 480, height: 270, format: "jpg", fit: "outside" };

	const rawFeed = await engine.render(template, {
		articles: articles.map((article) => ({
			...article,
			formatted_date_published: new Date(article.date_published).toUTCString(),
			image_url: getDirectusImageUrl(article.preview_image.id, imageSettings).replace(
				/\&/g,
				"&amp;"
			)
		})),
		year: new Date().getFullYear()
	});

	return new Response(rawFeed, {
		headers: {
			"Cache-Control": "max-age=0, s-maxage=3600",
			"Content-Type": "application/xml"
		}
	});
};
